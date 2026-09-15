(function () {
  'use strict';

  const SIZE = 4;
  const BEST_SCORE_KEY = 'game-2048-best-score';
  const WIN_VALUE = 2048;

  const boardEl = document.getElementById('game-board');
  const gridBgEl = document.getElementById('grid-bg');
  const tileContainerEl = document.getElementById('tile-container');
  const scoreEl = document.getElementById('score');
  const bestScoreEl = document.getElementById('best-score');
  const messageEl = document.getElementById('game-message');
  const messageTextEl = document.getElementById('game-message-text');
  const keepGoingBtn = document.getElementById('keep-going-btn');
  const tryAgainBtn = document.getElementById('try-again-btn');
  const restartBtn = document.getElementById('restart-btn');

  /** @type {{board: number[][], score: number, best: number, isGameOver: boolean, hasWon: boolean, keepPlaying: boolean}} */
  let state = null;

  function createEmptyBoard() {
    return Array.from({ length: SIZE }, () => Array(SIZE).fill(0));
  }

  function buildGridBackground() {
    gridBgEl.innerHTML = '';
    for (let i = 0; i < SIZE * SIZE; i++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      gridBgEl.appendChild(cell);
    }
  }

  function loadBestScore() {
    const raw = localStorage.getItem(BEST_SCORE_KEY);
    const parsed = raw ? parseInt(raw, 10) : 0;
    return Number.isFinite(parsed) ? parsed : 0;
  }

  function saveBestScore(value) {
    try {
      localStorage.setItem(BEST_SCORE_KEY, String(value));
    } catch (e) {
      /* ignore storage errors (private mode, quota, etc.) */
    }
  }

  function getEmptyCells(board) {
    const cells = [];
    for (let r = 0; r < SIZE; r++) {
      for (let c = 0; c < SIZE; c++) {
        if (board[r][c] === 0) cells.push({ r, c });
      }
    }
    return cells;
  }

  function spawnRandomTile(board) {
    const empty = getEmptyCells(board);
    if (empty.length === 0) return null;
    const spot = empty[Math.floor(Math.random() * empty.length)];
    const value = Math.random() < 0.9 ? 2 : 4;
    board[spot.r][spot.c] = value;
    return { row: spot.r, col: spot.c, value };
  }

  // --- Core slide/merge logic ---
  // slideAndMergeRow: takes an array of SIZE numbers (a "row" in left-move orientation)
  // and returns { row: newRow, gained: scoreGained, moved: boolean }
  function slideAndMergeRow(row) {
    const original = row.slice();
    const compact = row.filter((v) => v !== 0);
    const result = [];
    const mergedMask = [];
    let gained = 0;

    for (let i = 0; i < compact.length; i++) {
      const current = compact[i];
      if (i + 1 < compact.length && compact[i + 1] === current) {
        const mergedValue = current * 2;
        result.push(mergedValue);
        mergedMask.push(true);
        gained += mergedValue;
        i++; // skip the next one, it has been merged
      } else {
        result.push(current);
        mergedMask.push(false);
      }
    }

    while (result.length < SIZE) {
      result.push(0);
      mergedMask.push(false);
    }

    let moved = false;
    for (let i = 0; i < SIZE; i++) {
      if (original[i] !== result[i]) {
        moved = true;
        break;
      }
    }

    return { row: result, gained, moved, mergedMask };
  }

  // Rotate the board 90 degrees clockwise (returns a new board)
  function rotateClockwise(board) {
    const rotated = createEmptyBoard();
    for (let r = 0; r < SIZE; r++) {
      for (let c = 0; c < SIZE; c++) {
        rotated[c][SIZE - 1 - r] = board[r][c];
      }
    }
    return rotated;
  }

  function rotateCounterClockwise(board) {
    const rotated = createEmptyBoard();
    for (let r = 0; r < SIZE; r++) {
      for (let c = 0; c < SIZE; c++) {
        rotated[SIZE - 1 - c][r] = board[r][c];
      }
    }
    return rotated;
  }

  // Apply a "move left" pass to every row of the board.
  function moveLeft(board) {
    let moved = false;
    let gained = 0;
    const newBoard = [];
    const mergedMaskBoard = [];
    for (let r = 0; r < SIZE; r++) {
      const { row, gained: g, moved: m, mergedMask } = slideAndMergeRow(board[r]);
      newBoard.push(row);
      mergedMaskBoard.push(mergedMask);
      if (m) moved = true;
      gained += g;
    }
    return { board: newBoard, moved, gained, mergedMaskBoard };
  }

  // direction: 'up' | 'down' | 'left' | 'right'
  // All directions are implemented in terms of moveLeft by rotating the board,
  // applying moveLeft, then rotating back.
  function move(board, direction) {
    let working = board;
    let rotations = 0;

    switch (direction) {
      case 'left':
        rotations = 0;
        break;
      case 'up':
        working = rotateCounterClockwise(board);
        rotations = 1; // rotate back clockwise once
        break;
      case 'right':
        working = rotateClockwise(rotateClockwise(board));
        rotations = 2;
        break;
      case 'down':
        working = rotateClockwise(board);
        rotations = 3; // rotate back counter-clockwise once (== clockwise 3 times)
        break;
      default:
        throw new Error('Unknown direction: ' + direction);
    }

    const { board: movedBoard, moved, gained, mergedMaskBoard } = moveLeft(working);

    let finalBoard = movedBoard;
    let finalMergedMask = mergedMaskBoard;
    if (direction === 'up') {
      finalBoard = rotateClockwise(movedBoard);
      finalMergedMask = rotateClockwise(mergedMaskBoard);
    } else if (direction === 'right') {
      finalBoard = rotateClockwise(rotateClockwise(movedBoard));
      finalMergedMask = rotateClockwise(rotateClockwise(mergedMaskBoard));
    } else if (direction === 'down') {
      finalBoard = rotateCounterClockwise(movedBoard);
      finalMergedMask = rotateCounterClockwise(mergedMaskBoard);
    }

    return { board: finalBoard, moved, gained, mergedMaskBoard: finalMergedMask };
  }

  function hasAnyMoves(board) {
    // Any empty cell means a move is possible.
    if (getEmptyCells(board).length > 0) return true;
    // Check for any adjacent equal values (horizontally or vertically).
    for (let r = 0; r < SIZE; r++) {
      for (let c = 0; c < SIZE; c++) {
        const v = board[r][c];
        if (c + 1 < SIZE && board[r][c + 1] === v) return true;
        if (r + 1 < SIZE && board[r + 1][c] === v) return true;
      }
    }
    return false;
  }

  function hasTileValue(board, value) {
    for (let r = 0; r < SIZE; r++) {
      for (let c = 0; c < SIZE; c++) {
        if (board[r][c] === value) return true;
      }
    }
    return false;
  }

  // --- Rendering ---
  function render(newTileSpot, mergedSpots) {
    scoreEl.textContent = String(state.score);
    bestScoreEl.textContent = String(state.best);

    tileContainerEl.innerHTML = '';
    for (let r = 0; r < SIZE; r++) {
      for (let c = 0; c < SIZE; c++) {
        const value = state.board[r][c];
        if (value === 0) continue;
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.dataset.value = String(value);
        tile.style.gridRowStart = String(r + 1);
        tile.style.gridColumnStart = String(c + 1);
        tile.textContent = String(value);

        if (newTileSpot && newTileSpot.row === r && newTileSpot.col === c) {
          tile.classList.add('tile-new');
        }
        if (mergedSpots && mergedSpots.some((s) => s.row === r && s.col === c)) {
          tile.classList.add('tile-merge');
        }

        tileContainerEl.appendChild(tile);
      }
    }
  }

  function showMessage(text, options) {
    messageTextEl.textContent = text;
    keepGoingBtn.hidden = !(options && options.showKeepGoing);
    messageEl.hidden = false;
  }

  function hideMessage() {
    messageEl.hidden = true;
  }

  // --- Game flow ---
  function initGame() {
    state = {
      board: createEmptyBoard(),
      score: 0,
      best: loadBestScore(),
      isGameOver: false,
      hasWon: false,
      keepPlaying: false,
    };

    hideMessage();

    const first = spawnRandomTile(state.board);
    const second = spawnRandomTile(state.board);
    render(second || first, null);
  }

  function handleMove(direction) {
    if (!state || state.isGameOver) return;
    if (state.hasWon && !state.keepPlaying) return;

    const result = move(state.board, direction);

    if (!result.moved) {
      return; // nothing changed, don't spawn a new tile
    }

    state.board = result.board;
    state.score += result.gained;

    if (state.score > state.best) {
      state.best = state.score;
      saveBestScore(state.best);
    }

    const spawned = spawnRandomTile(state.board);

    const mergedSpots = [];
    for (let r = 0; r < SIZE; r++) {
      for (let c = 0; c < SIZE; c++) {
        if (result.mergedMaskBoard[r][c]) mergedSpots.push({ row: r, col: c });
      }
    }

    const justWon = !state.hasWon && hasTileValue(state.board, WIN_VALUE);
    if (justWon) {
      state.hasWon = true;
    }

    // Always evaluate game-over, even on the move that also wins, so a
    // simultaneous win + no-more-moves state isn't silently lost when the
    // player later chooses "keep going".
    if (!hasAnyMoves(state.board)) {
      state.isGameOver = true;
    }

    render(spawned, mergedSpots);

    if (justWon && !state.keepPlaying) {
      showMessage('You Win!', { showKeepGoing: true });
      return;
    }

    if (state.isGameOver) {
      showMessage('Game Over!', { showKeepGoing: false });
    }
  }

  function restart() {
    initGame();
  }

  function keepGoing() {
    state.keepPlaying = true;
    hideMessage();
    if (state.isGameOver) {
      // Edge case: the winning move also left no further moves possible.
      showMessage('Game Over!', { showKeepGoing: false });
    }
  }

  // --- Input handling ---
  const KEY_DIRECTIONS = {
    ArrowUp: 'up',
    ArrowDown: 'down',
    ArrowLeft: 'left',
    ArrowRight: 'right',
  };

  window.addEventListener('keydown', (event) => {
    const direction = KEY_DIRECTIONS[event.key];
    if (!direction) return;
    event.preventDefault();
    handleMove(direction);
  });

  // Touch swipe support
  let touchStartX = 0;
  let touchStartY = 0;
  let touchActive = false;
  const MIN_SWIPE_DISTANCE = 30;

  boardEl.addEventListener(
    'touchstart',
    (event) => {
      if (event.touches.length !== 1) return;
      touchActive = true;
      touchStartX = event.touches[0].clientX;
      touchStartY = event.touches[0].clientY;
    },
    { passive: true }
  );

  boardEl.addEventListener(
    'touchmove',
    (event) => {
      if (touchActive) event.preventDefault();
    },
    { passive: false }
  );

  boardEl.addEventListener('touchend', (event) => {
    if (!touchActive) return;
    touchActive = false;
    const touch = event.changedTouches[0];
    const dx = touch.clientX - touchStartX;
    const dy = touch.clientY - touchStartY;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);

    if (Math.max(absDx, absDy) < MIN_SWIPE_DISTANCE) return;

    if (absDx > absDy) {
      handleMove(dx > 0 ? 'right' : 'left');
    } else {
      handleMove(dy > 0 ? 'down' : 'up');
    }
  });

  restartBtn.addEventListener('click', restart);
  tryAgainBtn.addEventListener('click', restart);
  keepGoingBtn.addEventListener('click', keepGoing);

  buildGridBackground();
  initGame();
})();
