/**
 * main.js — 갤러리/옵션/수량/합계 인터랙션 상태 관리 (바닐라 JS).
 * 이벤트 위임(.thumbs, .color-row, .size-col에 각각 click 리스너 하나씩)으로 동작한다.
 */
(function () {
  'use strict';

  var UNIT_PRICE = 57000;

  var COLOR_NAMES = { ivory: '아이보리', mint: '민트', frost: '프로스트' };
  var SIZE_NAMES = { s: 'S', m: 'M', l: 'L' };
  var SHOT_LABELS = [
    '상품 정면 컷 (미제공)',
    '15° 경사 측면 컷 (미제공)',
    '퍼피가 먹는 모습 (미제공)',
    '사이즈 비교 컷 (미제공)'
  ];

  var state = { color: 'ivory', size: 'm', qty: 1, photoIndex: 0 };

  function formatWon(n) {
    return n.toLocaleString('ko-KR');
  }

  // 페이지에 미리 박혀 있는 icons.js의 SVG 문자열을 [data-icon] 플레이스홀더에 주입한다.
  // 런타임 네트워크 요청은 전혀 일어나지 않는다.
  function renderIcons() {
    if (!window.TodakIcons) return;
    var nodes = document.querySelectorAll('[data-icon]');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      var size = parseInt(el.getAttribute('data-icon-size'), 10) || 20;
      el.innerHTML = window.TodakIcons.iconSvg(el.getAttribute('data-icon'), size);
    }
  }

  // 옵션 섹션 합계 + 구매 바(모바일 고정바/데스크톱 사이드 패널 — 동일 DOM)를 한 번에 갱신.
  function renderSummary() {
    var totalText = formatWon(UNIT_PRICE * state.qty);
    var qtyTotalPriceEl = document.getElementById('qty-total-price');
    var buybarPriceEl = document.getElementById('buybar-price');
    var buybarOptEl = document.getElementById('buybar-opt');
    var colorPickedEl = document.getElementById('color-picked');
    var qtyNumEl = document.getElementById('qty-num');

    if (qtyTotalPriceEl) qtyTotalPriceEl.textContent = totalText;
    if (buybarPriceEl) buybarPriceEl.textContent = totalText;
    if (colorPickedEl) colorPickedEl.textContent = COLOR_NAMES[state.color];
    if (qtyNumEl) qtyNumEl.textContent = state.qty;
    if (buybarOptEl) {
      buybarOptEl.textContent = COLOR_NAMES[state.color] + ' · ' + SIZE_NAMES[state.size] + ' · ' + state.qty + '개';
    }
  }

  function bindGallery() {
    var wrap = document.querySelector('.thumbs');
    var labelEl = document.getElementById('gallery-photo-label');
    var countEl = document.getElementById('gallery-count-current');
    if (!wrap) return;
    var thumbs = wrap.querySelectorAll('.thumb');

    wrap.addEventListener('click', function (e) {
      var btn = e.target.closest ? e.target.closest('.thumb') : null;
      if (!btn || !wrap.contains(btn)) return;
      var idx = parseInt(btn.getAttribute('data-index'), 10);
      if (isNaN(idx)) return;

      state.photoIndex = idx;
      if (labelEl) labelEl.textContent = SHOT_LABELS[idx];
      if (countEl) countEl.textContent = String(idx + 1);

      for (var i = 0; i < thumbs.length; i++) {
        var isOn = thumbs[i] === btn;
        thumbs[i].classList.toggle('is-on', isOn);
        thumbs[i].setAttribute('aria-pressed', isOn ? 'true' : 'false');
      }
    });
  }

  function bindColors() {
    var row = document.querySelector('.color-row');
    if (!row) return;
    var chips = row.querySelectorAll('.color-chip');

    row.addEventListener('click', function (e) {
      var btn = e.target.closest ? e.target.closest('.color-chip') : null;
      if (!btn || !row.contains(btn)) return;

      state.color = btn.getAttribute('data-color');
      for (var i = 0; i < chips.length; i++) {
        var isOn = chips[i] === btn;
        chips[i].classList.toggle('is-on', isOn);
        chips[i].setAttribute('aria-pressed', isOn ? 'true' : 'false');
      }
      renderSummary();
    });
  }

  function bindSizes() {
    var col = document.querySelector('.size-col');
    if (!col) return;
    var rows = col.querySelectorAll('.size-row');

    col.addEventListener('click', function (e) {
      var btn = e.target.closest ? e.target.closest('.size-row') : null;
      if (!btn || !col.contains(btn) || btn.disabled) return;

      state.size = btn.getAttribute('data-size');
      for (var i = 0; i < rows.length; i++) {
        var r = rows[i];
        var isOn = r === btn;
        r.classList.toggle('is-on', isOn);
        if (!r.disabled) r.setAttribute('aria-pressed', isOn ? 'true' : 'false');
      }
      renderSummary();
    });
  }

  function bindQty() {
    var minusBtn = document.getElementById('qty-minus');
    var plusBtn = document.getElementById('qty-plus');
    if (minusBtn) {
      minusBtn.addEventListener('click', function () {
        state.qty = Math.max(1, state.qty - 1);
        renderSummary();
      });
    }
    if (plusBtn) {
      plusBtn.addEventListener('click', function () {
        state.qty = Math.min(9, state.qty + 1);
        renderSummary();
      });
    }
  }

  function bindWish() {
    var btn = document.getElementById('wish-btn');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var pressed = btn.getAttribute('aria-pressed') === 'true';
      btn.setAttribute('aria-pressed', pressed ? 'false' : 'true');
    });
  }

  function bindSizeGuideLink() {
    var link = document.querySelector('.opt-help');
    if (!link) return;
    link.addEventListener('click', function (e) {
      var href = link.getAttribute('href') || '';
      if (href.charAt(0) !== '#') return;
      var target = document.getElementById(href.slice(1));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    renderIcons();
    bindGallery();
    bindColors();
    bindSizes();
    bindQty();
    bindWish();
    bindSizeGuideLink();
    renderSummary();
  });
})();
