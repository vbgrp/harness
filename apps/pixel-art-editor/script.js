(function () {
  "use strict";

  var GRID_SIZE = 16;
  var MAX_UNDO = 40;

  var PRESET_COLORS = [
    "#000000", "#ffffff", "#7f7f7f", "#c3c3c3",
    "#ff0000", "#ff7f00", "#ffff00", "#00ff00",
    "#0077ff", "#0000ff", "#7f00ff", "#ff00ff",
    "#8b4513", "#f4a460", "#008080", "#ff69b4"
  ];

  // gridState[y][x] = "#rrggbb" 문자열 또는 null (빈 칸)
  var gridState = [];
  var cellElements = [];

  var currentColor = "#3b82f6";
  var currentTool = "pen"; // "pen" | "eraser"
  var isDrawing = false;
  var strokeSnapshotSaved = false;

  var undoStack = [];

  var gridEl = document.getElementById("pixel-grid");
  var swatchesEl = document.getElementById("swatches");
  var customColorInput = document.getElementById("custom-color-picker");
  var currentColorPreview = document.getElementById("current-color-preview");
  var penBtn = document.getElementById("pen-btn");
  var eraserBtn = document.getElementById("eraser-btn");
  var undoBtn = document.getElementById("undo-btn");
  var clearBtn = document.getElementById("clear-btn");
  var saveBtn = document.getElementById("save-png-btn");
  var exportScaleSelect = document.getElementById("export-scale");

  function init() {
    buildGridState();
    buildGridDOM();
    buildSwatches();
    bindEvents();
    updateCurrentColorPreview();
    updateUndoButtonState();
  }

  function buildGridState() {
    for (var y = 0; y < GRID_SIZE; y++) {
      var row = [];
      for (var x = 0; x < GRID_SIZE; x++) {
        row.push(null);
      }
      gridState.push(row);
    }
  }

  function buildGridDOM() {
    var fragment = document.createDocumentFragment();
    for (var y = 0; y < GRID_SIZE; y++) {
      var rowEls = [];
      for (var x = 0; x < GRID_SIZE; x++) {
        var cell = document.createElement("div");
        cell.className = "cell";
        cell.setAttribute("role", "gridcell");
        cell.setAttribute("data-x", String(x));
        cell.setAttribute("data-y", String(y));
        fragment.appendChild(cell);
        rowEls.push(cell);
      }
      cellElements.push(rowEls);
    }
    gridEl.appendChild(fragment);
  }

  function buildSwatches() {
    PRESET_COLORS.forEach(function (color, index) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "swatch";
      btn.style.backgroundColor = color;
      btn.setAttribute("data-color", color);
      btn.setAttribute("aria-label", "색상 " + color);
      if (index === 0) {
        // no default selection highlight tied to first swatch; currentColor is custom picker default
      }
      btn.addEventListener("click", function () {
        selectColor(color);
      });
      swatchesEl.appendChild(btn);
    });
  }

  function selectColor(color) {
    currentColor = color;
    setTool("pen");
    updateCurrentColorPreview();
    highlightSelectedSwatch(color);
  }

  function highlightSelectedSwatch(color) {
    var swatches = swatchesEl.querySelectorAll(".swatch");
    swatches.forEach(function (sw) {
      if (sw.getAttribute("data-color").toLowerCase() === color.toLowerCase()) {
        sw.classList.add("selected");
      } else {
        sw.classList.remove("selected");
      }
    });
  }

  function updateCurrentColorPreview() {
    currentColorPreview.style.backgroundColor = currentColor;
    customColorInput.value = currentColor;
  }

  function setTool(tool) {
    currentTool = tool;
    if (tool === "pen") {
      penBtn.classList.add("active");
      eraserBtn.classList.remove("active");
      penBtn.setAttribute("aria-pressed", "true");
      eraserBtn.setAttribute("aria-pressed", "false");
    } else {
      eraserBtn.classList.add("active");
      penBtn.classList.remove("active");
      eraserBtn.setAttribute("aria-pressed", "true");
      penBtn.setAttribute("aria-pressed", "false");
    }
  }

  function bindEvents() {
    gridEl.addEventListener("pointerdown", onPointerDown);
    gridEl.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);

    penBtn.addEventListener("click", function () {
      setTool("pen");
    });
    eraserBtn.addEventListener("click", function () {
      setTool("eraser");
    });

    customColorInput.addEventListener("input", function () {
      selectColor(customColorInput.value);
    });

    clearBtn.addEventListener("click", onClearClick);
    undoBtn.addEventListener("click", undo);
    saveBtn.addEventListener("click", function () {
      var scale = parseInt(exportScaleSelect.value, 10) || 16;
      exportToPNG(scale);
    });

    document.addEventListener("keydown", function (e) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z") {
        e.preventDefault();
        undo();
      }
    });
  }

  function getCellFromEvent(e) {
    var el = document.elementFromPoint(e.clientX, e.clientY);
    if (el && el.classList && el.classList.contains("cell")) {
      return el;
    }
    return null;
  }

  function onPointerDown(e) {
    e.preventDefault();
    isDrawing = true;
    strokeSnapshotSaved = false;
    var cell = getCellFromEvent(e) || e.target;
    if (cell && cell.classList && cell.classList.contains("cell")) {
      ensureStrokeSnapshot();
      applyToolToCell(cell);
    }
    if (gridEl.setPointerCapture && e.pointerId !== undefined) {
      try {
        gridEl.setPointerCapture(e.pointerId);
      } catch (err) {
        // ignore capture errors
      }
    }
  }

  function onPointerMove(e) {
    if (!isDrawing) return;
    e.preventDefault();
    var cell = getCellFromEvent(e);
    if (cell) {
      ensureStrokeSnapshot();
      applyToolToCell(cell);
    }
  }

  function onPointerUp() {
    isDrawing = false;
    strokeSnapshotSaved = false;
  }

  function ensureStrokeSnapshot() {
    if (!strokeSnapshotSaved) {
      pushUndoSnapshot();
      strokeSnapshotSaved = true;
    }
  }

  function applyToolToCell(cellEl) {
    var x = parseInt(cellEl.getAttribute("data-x"), 10);
    var y = parseInt(cellEl.getAttribute("data-y"), 10);
    var newValue = currentTool === "eraser" ? null : currentColor;
    if (gridState[y][x] === newValue) return;
    gridState[y][x] = newValue;
    renderCell(x, y);
  }

  function renderCell(x, y) {
    var cellEl = cellElements[y][x];
    var value = gridState[y][x];
    if (value) {
      cellEl.style.backgroundColor = value;
      cellEl.classList.add("filled");
    } else {
      cellEl.style.backgroundColor = "";
      cellEl.classList.remove("filled");
    }
  }

  function renderAll() {
    for (var y = 0; y < GRID_SIZE; y++) {
      for (var x = 0; x < GRID_SIZE; x++) {
        renderCell(x, y);
      }
    }
  }

  function cloneGridState() {
    return gridState.map(function (row) {
      return row.slice();
    });
  }

  function pushUndoSnapshot() {
    undoStack.push(cloneGridState());
    if (undoStack.length > MAX_UNDO) {
      undoStack.shift();
    }
    updateUndoButtonState();
  }

  function undo() {
    if (undoStack.length === 0) return;
    var snapshot = undoStack.pop();
    for (var y = 0; y < GRID_SIZE; y++) {
      gridState[y] = snapshot[y];
    }
    renderAll();
    updateUndoButtonState();
  }

  function updateUndoButtonState() {
    undoBtn.disabled = undoStack.length === 0;
  }

  function onClearClick() {
    var hasContent = gridState.some(function (row) {
      return row.some(function (v) {
        return v !== null;
      });
    });
    if (hasContent && !window.confirm("정말로 전체 그림을 지우시겠습니까?")) {
      return;
    }
    pushUndoSnapshot();
    clearGrid();
  }

  function clearGrid() {
    for (var y = 0; y < GRID_SIZE; y++) {
      for (var x = 0; x < GRID_SIZE; x++) {
        gridState[y][x] = null;
      }
    }
    renderAll();
  }

  function exportToPNG(scale) {
    var canvas = document.createElement("canvas");
    canvas.width = GRID_SIZE * scale;
    canvas.height = GRID_SIZE * scale;
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var y = 0; y < GRID_SIZE; y++) {
      for (var x = 0; x < GRID_SIZE; x++) {
        var color = gridState[y][x];
        if (color) {
          ctx.fillStyle = color;
          ctx.fillRect(x * scale, y * scale, scale, scale);
        }
      }
    }

    if (canvas.toBlob) {
      canvas.toBlob(function (blob) {
        triggerDownload(blob);
      }, "image/png");
    } else {
      var dataUrl = canvas.toDataURL("image/png");
      var a = document.createElement("a");
      a.href = dataUrl;
      a.download = "pixel-art.png";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }

  function triggerDownload(blob) {
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "pixel-art.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () {
      URL.revokeObjectURL(url);
    }, 1000);
  }

  init();
})();
