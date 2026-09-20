/**
 * main.js — 상태 관리 + 렌더링 + 이벤트 바인딩
 * data.js에 정의된 상수를 사용한다.
 */
(function () {
  "use strict";

  // ---- 상태 ----
  const state = {
    query: "",
    tab: 0,
    sort: 0,
    picked: new Set(["생활비", "코워킹"])
  };

  // ---- DOM 참조 ----
  const quickTagsEl = document.getElementById("quickTags");
  const filterTabsEl = document.getElementById("filterTabs");
  const criteriaChipsEl = document.getElementById("criteriaChips");
  const matchCountBtn = document.getElementById("matchCountBtn");
  const sortBarEl = document.getElementById("sortBar");
  const cityGridEl = document.getElementById("cityGrid");
  const compareCardEl = document.getElementById("compareCard");
  const reviewGridEl = document.getElementById("reviewGrid");
  const footerLinksEl = document.getElementById("footerLinks");
  const searchInput = document.getElementById("city-search");

  // ---- 유틸 ----
  function scoreBadgeClass(score) {
    if (score >= 85) return "badge--high";
    if (score >= 78) return "badge--mid";
    return "badge--low";
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // ---- 정적/준정적 렌더 함수 ----
  function renderQuickTags() {
    quickTagsEl.innerHTML = QUICK_TAGS.map(
      (tag) => `<a href="#" class="quick-tag">${escapeHtml(tag)}</a>`
    ).join("");
  }

  function renderTabs() {
    filterTabsEl.innerHTML = TAB_LABELS.map((label, i) => {
      const active = state.tab === i;
      return `<button type="button" class="filter-tab${active ? " is-active" : ""}" role="tab" aria-selected="${active}" data-tab-index="${i}">${escapeHtml(label)}</button>`;
    }).join("");
  }

  function renderCriteriaChips() {
    criteriaChipsEl.innerHTML = CRITERIA_LABELS.map((label) => {
      const active = state.picked.has(label);
      return `<button type="button" class="chip${active ? " is-active" : ""}" aria-pressed="${active}" data-criteria="${escapeHtml(label)}">${escapeHtml(label)}</button>`;
    }).join("");
  }

  function renderSortButtons() {
    sortBarEl.innerHTML = SORT_LABELS.map((label, i) => {
      const active = state.sort === i;
      return `<button type="button" class="chip sort-btn${active ? " is-active" : ""}" aria-pressed="${active}" data-sort-index="${i}">${escapeHtml(label)}</button>`;
    }).join("");
  }

  function renderCompareRows() {
    compareCardEl.innerHTML = COMPARE_ROWS.map((row) => `
      <div class="compare-row">
        <div class="compare-row__labels">
          <span class="compare-row__value">${escapeHtml(row.a)}</span>
          <span class="compare-row__label">${escapeHtml(row.label)}</span>
          <span class="compare-row__value">${escapeHtml(row.b)}</span>
        </div>
        <div class="compare-row__bars">
          <div class="compare-row__track compare-row__track--a">
            <div class="compare-row__fill compare-row__fill--a" style="width:${escapeHtml(row.aw)};"></div>
          </div>
          <div class="compare-row__track compare-row__track--b">
            <div class="compare-row__fill compare-row__fill--b" style="width:${escapeHtml(row.bw)};"></div>
          </div>
        </div>
      </div>
    `).join("");
  }

  function renderReviews() {
    reviewGridEl.innerHTML = REVIEWS.map((r) => `
      <div class="review-card">
        <div class="review-card__head">
          <div class="review-card__who">
            <span class="review-card__avatar" aria-hidden="true"></span>
            <div>
              <div class="review-card__name">${escapeHtml(r.name)}</div>
              <div class="review-card__meta">${escapeHtml(r.job)} · ${escapeHtml(r.stay)}</div>
            </div>
          </div>
          <span class="review-card__score">${escapeHtml(r.score)}</span>
        </div>
        <div class="review-card__city">${escapeHtml(r.city)}</div>
        <p class="review-card__text">${escapeHtml(r.text)}</p>
      </div>
    `).join("");
  }

  function renderFooterCols() {
    footerLinksEl.innerHTML = FOOTER_COLS.map((col) => `
      <div class="footer-col">
        <div class="footer-col__title">${escapeHtml(col.title)}</div>
        <div class="footer-col__links">
          ${col.links.map((l) => `<a href="#">${escapeHtml(l)}</a>`).join("")}
        </div>
      </div>
    `).join("");
  }

  function renderStaticLabels() {
    document.getElementById("reviewCountLabel").textContent = REVIEW_COUNT;
    document.getElementById("reviewCountLabel2").textContent = REVIEW_COUNT;
    document.getElementById("updatedAtLabel").textContent = UPDATED_AT;
    document.getElementById("updatedAtLabel2").textContent = UPDATED_AT;
  }

  // ---- 매치 카운트 버튼 ----
  function updateMatchCountButton() {
    const count = 12 + state.picked.size;
    matchCountBtn.textContent = `${count}개 도시 보기`;
  }

  // ---- 정렬 비교 함수 ----
  const SORT_COMPARATORS = [
    // 0: 종합 점수 (내림차순)
    (a, b) => b.score - a.score,
    // 1: 생활비 낮은 순 (오름차순)
    (a, b) => parseInt(a.cost, 10) - parseInt(b.cost, 10),
    // 2: 인터넷 빠른 순 (내림차순)
    (a, b) => parseInt(b.net, 10) - parseInt(a.net, 10),
    // 3: 코워킹 많은 순 (내림차순)
    (a, b) => parseInt(b.cowork, 10) - parseInt(a.cowork, 10),
    // 4: 공기질 좋은 순 (내림차순)
    (a, b) => (AIR_RANK[b.air] || 0) - (AIR_RANK[a.air] || 0)
  ];

  // ---- 도시 카드 목록 렌더 ----
  function updateCityList() {
    const q = state.query.trim();
    const filtered = CITIES.filter(
      (c) =>
        !q ||
        c.name.includes(q) ||
        c.region.includes(q) ||
        c.tags.some((t) => t.includes(q))
    );

    const sorted = filtered.slice().sort(SORT_COMPARATORS[state.sort] || SORT_COMPARATORS[0]);

    if (sorted.length === 0) {
      cityGridEl.innerHTML = `<p class="city-grid__empty">검색 결과가 없습니다.</p>`;
      return;
    }

    cityGridEl.innerHTML = sorted
      .map((city) => `
        <a href="#" class="city-card">
          <div class="city-card__photo">
            <span class="city-card__photo-label">${escapeHtml(city.photoLabel)}</span>
            <span class="city-card__badge ${scoreBadgeClass(city.score)}">${city.score}</span>
            <span class="city-card__delta">${escapeHtml(city.delta)}</span>
          </div>
          <div class="city-card__body">
            <div class="city-card__name-row">
              <span class="city-card__name">${escapeHtml(city.name)}</span>
              <span class="city-card__region">${escapeHtml(city.region)}</span>
            </div>
            <div class="city-card__blurb">${escapeHtml(city.blurb)}</div>
            <div class="city-card__stats">
              <div class="city-card__stat"><span>월 생활비</span><span>${escapeHtml(city.cost)}</span></div>
              <div class="city-card__stat"><span>인터넷</span><span>${escapeHtml(city.net)}</span></div>
              <div class="city-card__stat"><span>코워킹</span><span>${escapeHtml(city.cowork)}</span></div>
              <div class="city-card__stat"><span>공기질</span><span>${escapeHtml(city.air)}</span></div>
            </div>
            <div class="city-card__tags">
              ${city.tags.map((t) => `<span class="city-card__tag">${escapeHtml(t)}</span>`).join("")}
            </div>
          </div>
        </a>
      `)
      .join("");
  }

  // ---- 이벤트 바인딩 ----
  function bindEvents() {
    searchInput.addEventListener("input", (e) => {
      state.query = e.target.value;
      updateCityList();
    });

    filterTabsEl.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-tab-index]");
      if (!btn) return;
      state.tab = Number(btn.dataset.tabIndex);
      renderTabs();
    });

    criteriaChipsEl.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-criteria]");
      if (!btn) return;
      const label = btn.dataset.criteria;
      if (state.picked.has(label)) {
        state.picked.delete(label);
      } else {
        state.picked.add(label);
      }
      renderCriteriaChips();
      updateMatchCountButton();
    });

    sortBarEl.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-sort-index]");
      if (!btn) return;
      state.sort = Number(btn.dataset.sortIndex);
      renderSortButtons();
      updateCityList();
    });

    // 목적지 없는 링크(href="#") 클릭 무력화 — 문서 레벨 위임 리스너
    document.addEventListener("click", (e) => {
      const a = e.target.closest('a[href="#"]');
      if (a) e.preventDefault();
    });
  }

  // ---- 초기화 ----
  function init() {
    renderStaticLabels();
    renderQuickTags();
    renderTabs();
    renderCriteriaChips();
    renderSortButtons();
    renderCompareRows();
    renderReviews();
    renderFooterCols();
    updateMatchCountButton();
    updateCityList();
    bindEvents();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
