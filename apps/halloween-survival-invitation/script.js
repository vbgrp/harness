// ==========================================================================
// 할로윈 언데드 클럽 초대장 — script.js
// ==========================================================================

// ==== 행사 정보 (여기만 수정하면 됨) ====
const EVENT_DATE = new Date('2026-10-31T23:30:00+09:00'); // 행사 일시 (KST)
const EVENT_NAME = '할로윈 언데드 클럽';
const VENUE_NAME = '광안리 언데드 시네마';
const VENUE_ADDRESS = '부산광역시 수영구 광안해변로 219';
const SCREENING_TITLE = '《살아있는 자들의 밤》 언데드 특별 상영';
const PREP_NOTICE_TEXT = '담요와 간식 지참을 추천해요 🍿\n상영 중 소리 지르는 건 자유입니다 😱\n좀비 분장은 언제나 환영이에요 🧟';

// --------------------------------------------------------------------------
// 유틸: 두 자리 숫자 포맷
// --------------------------------------------------------------------------
function pad2(num) {
  return String(num).padStart(2, '0');
}

// --------------------------------------------------------------------------
// 카운트다운
// --------------------------------------------------------------------------
let countdownTimerId = null;

function updateCountdown() {
  const now = Date.now();
  const diffMs = EVENT_DATE.getTime() - now;

  const activeEl = document.getElementById('countdown-active');
  const endedEl = document.getElementById('countdown-ended');
  const badgeEl = document.getElementById('d-badge');
  const descEl = document.getElementById('countdown-desc');

  if (diffMs <= 0) {
    if (countdownTimerId !== null) {
      clearInterval(countdownTimerId);
      countdownTimerId = null;
    }
    if (activeEl) activeEl.classList.add('hidden');
    if (endedEl) endedEl.classList.remove('hidden');
    if (badgeEl) badgeEl.textContent = 'D-DAY';
    if (descEl) descEl.textContent = `${EVENT_NAME}, 지금 진행 중!`;
    return;
  }

  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  if (daysEl) daysEl.textContent = pad2(days);
  if (hoursEl) hoursEl.textContent = pad2(hours);
  if (minutesEl) minutesEl.textContent = pad2(minutes);
  if (secondsEl) secondsEl.textContent = pad2(seconds);

  if (badgeEl) badgeEl.textContent = `D-${days}`;
  if (descEl) descEl.textContent = `${EVENT_NAME}까지 카운트다운 중...`;
}

function startCountdown() {
  updateCountdown(); // 초기 1회 즉시 호출 (깜빡임 방지)
  countdownTimerId = setInterval(updateCountdown, 1000);
}

// --------------------------------------------------------------------------
// 행사 정보 렌더링
// --------------------------------------------------------------------------
function formatEventDateTime(date) {
  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekday = weekdays[date.getDay()];

  let hours = date.getHours();
  const minutes = date.getMinutes();
  const isPM = hours >= 12;
  const period = isPM ? '오후' : '오전';
  hours = hours % 12;
  if (hours === 0) hours = 12;

  const minuteText = minutes === 0 ? '' : ` ${pad2(minutes)}분`;

  return `${year}년 ${month}월 ${day}일 (${weekday}) ${period} ${hours}시${minuteText}`;
}

function renderEventInfo() {
  const datetimeEl = document.getElementById('event-datetime');
  const venueEl = document.getElementById('event-venue');
  const addressEl = document.getElementById('event-address');
  const featureEl = document.getElementById('event-feature');
  const noticeEl = document.getElementById('event-notice');

  if (datetimeEl) datetimeEl.textContent = formatEventDateTime(EVENT_DATE);
  if (venueEl) venueEl.textContent = VENUE_NAME;
  if (addressEl) addressEl.textContent = VENUE_ADDRESS;
  if (featureEl) featureEl.textContent = SCREENING_TITLE;
  if (noticeEl) noticeEl.textContent = PREP_NOTICE_TEXT;
}

// --------------------------------------------------------------------------
// 지도 렌더링
// --------------------------------------------------------------------------
function renderMap() {
  const mapIframe = document.getElementById('map-iframe');
  const directionsLink = document.getElementById('directions-link');
  const mapAddressDesc = document.getElementById('map-address-desc');

  const encodedAddress = encodeURIComponent(VENUE_ADDRESS);
  const embedSrc = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;
  const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  if (mapIframe) mapIframe.src = embedSrc;
  if (directionsLink) directionsLink.href = directionsHref;
  if (mapAddressDesc) mapAddressDesc.textContent = `${VENUE_NAME} · ${VENUE_ADDRESS}`;
}

// --------------------------------------------------------------------------
// 스크롤 등장 효과
// --------------------------------------------------------------------------
function initScrollReveal() {
  const targets = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((el) => observer.observe(el));
}

// --------------------------------------------------------------------------
// RSVP / 공유 (선택 기능)
// --------------------------------------------------------------------------
function initRsvpAndShare() {
  const rsvpBtn = document.getElementById('rsvp-yes');
  const shareBtn = document.getElementById('share-btn');
  const shareStatus = document.getElementById('share-status');

  if (rsvpBtn) {
    rsvpBtn.addEventListener('click', () => {
      alert(`🍿 관람 신청이 전달되었습니다! ${EVENT_NAME}에서 만나요!`);
    });
  }

  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      const url = window.location.href;
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(url);
          showShareStatus('✅ 초대장 링크가 복사되었습니다!');
        } else {
          showShareStatus('⚠️ 이 브라우저에서는 자동 복사가 지원되지 않아요.');
        }
      } catch (err) {
        showShareStatus('⚠️ 링크 복사에 실패했습니다.');
      }
    });
  }

  function showShareStatus(message) {
    if (!shareStatus) return;
    shareStatus.textContent = message;
    shareStatus.classList.remove('hidden');
  }
}

// --------------------------------------------------------------------------
// 초기화
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  renderEventInfo();
  renderMap();
  startCountdown();
  initScrollReveal();
  initRsvpAndShare();
});
