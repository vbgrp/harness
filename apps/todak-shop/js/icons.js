/**
 * icons.js — lucide-static v0.544.0 아이콘 14종을 인라인 SVG 문자열로 로컬화.
 * 런타임 네트워크 요청 없음 (원본 Icon 컴포넌트는 fetch(unpkg.../icons/{name}.svg)를 썼지만,
 * 이 페이지는 필요한 14개만 고정 문자열로 박아 둔다). 2px stroke, round cap — 원본과 동일.
 */
(function (global) {
  'use strict';

  var ICONS = {
    'image': '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
    'chevron-left': '<path d="m15 18-6-6 6-6"/>',
    'chevron-right': '<path d="m9 18 6-6-6-6"/>',
    'check': '<path d="M20 6 9 17l-5-5"/>',
    'minus': '<path d="M5 12h14"/>',
    'plus': '<path d="M5 12h14"/><path d="M12 5v14"/>',
    'heart-pulse': '<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/>',
    'stethoscope': '<path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/>',
    'truck': '<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/>',
    'pill': '<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>',
    'message-circle': '<path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/>',
    'heart': '<path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/>',
    'search': '<path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/>',
    'shopping-bag': '<path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.103 6.034h17.794"/><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/>'
  };

  /**
   * name 아이콘의 SVG 마크업 문자열을 반환한다. 장식용이므로 aria-hidden.
   * @param {string} name  ICONS의 키
   * @param {number} [size=20]
   * @returns {string}
   */
  function iconSvg(name, size) {
    size = size || 20;
    var inner = ICONS[name] || '';
    return '<svg xmlns="http://www.w3.org/2000/svg" width="' + size + '" height="' + size +
      '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" ' +
      'stroke-linecap="round" stroke-linejoin="round" style="display:block;width:100%;height:100%" aria-hidden="true" focusable="false">' +
      inner + '</svg>';
  }

  /**
   * name 아이콘을 담은 <span class="icon"> 마크업 문자열을 반환한다.
   * 버튼 등에 innerHTML로 바로 꽂아 쓰는 용도.
   * @param {string} name
   * @param {number} [size=20]
   */
  function renderIcon(name, size) {
    size = size || 20;
    return '<span class="icon" style="width:' + size + 'px;height:' + size + 'px" aria-hidden="true">' +
      iconSvg(name, size) + '</span>';
  }

  global.TodakIcons = { ICONS: ICONS, iconSvg: iconSvg, renderIcon: renderIcon };
})(window);
