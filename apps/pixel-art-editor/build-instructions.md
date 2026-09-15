# 지침: 픽셀 아트 에디터 - Build 단계

## 배경
저장소 루트: `D:\Claude_code\Harness`. 마크다운 기반 블로그 + 미니 웹앱 포트폴리오 (HTML/CSS/JS만 사용).
루트의 `CLAUDE.md`에 정의된 작업 사이클(Plan → Build → Review → Embed)을 따르고 있으며, 지금은 Build 단계입니다.
Plan 단계에서 작성된 계획은 `apps/pixel-art-editor/spec.md`에 있습니다. 먼저 그 파일을 읽으세요.

## 임무
`apps/pixel-art-editor/spec.md`에 명시된 계획대로 "픽셀 아트 에디터" 웹앱을 실제로 구현하세요.

## 범위 제한 (매우 중요)
- **오직 다음 파일만 생성/수정할 수 있습니다**:
  - `apps/pixel-art-editor/index.html`
  - `apps/pixel-art-editor/style.css`
  - `apps/pixel-art-editor/script.js`
- 그 외 파일은 절대 건드리지 마세요. 특히 다음은 손대지 마세요:
  - 루트의 `index.html` (블로그 메인 페이지 — Embed 단계에서 별도로 수정됩니다)
  - `apps/2048/` 폴더의 모든 파일
  - `CLAUDE.md`
  - `apps/pixel-art-editor/spec.md`, `plan-instructions.md`, `build-instructions.md` (읽기만 하세요)

## 구현 요구사항 (spec.md 요약, 상세는 spec.md 참조)
1. 16x16 격자 (CSS Grid + div 256개), `gridState` 배열로 상태 관리
2. 클릭/드래그/터치로 도트 찍기 — Pointer Events(`pointerdown/move/up`) 사용, `elementFromPoint`로 드래그 중 셀 감지
3. 색상 팔레트: 프리셋 색상 스와치 12~16개 + `<input type="color">` 커스텀 색상
4. 지우개 도구 (펜/지우개 토글)
5. 전체 지우기 버튼 (확인 절차 포함)
6. 실행 취소(undo) — 최소 1단계라도 구현 권장
7. PNG로 저장: 오프스크린 `<canvas>`를 이용해 배율(예: 8x/16x/32x) 선택 가능하게 그린 뒤 다운로드. 빈 칸은 투명 처리.
8. 모바일 대응: `touch-action: none`, 반응형 크기(`min(90vw, 90vh, 480px)` 등), 터치 타겟 40px 이상
9. 외부 라이브러리 사용 금지 (바닐라 HTML/CSS/JS만). CDN 폰트 등도 필요 없으면 쓰지 마세요.
10. 앱은 완전히 독립적으로 동작해야 하며 (다른 폴더의 파일을 참조하지 않음), `apps/pixel-art-editor/index.html`을 직접 브라우저로 열어도 정상 동작해야 합니다.

## 완료 조건
- 세 파일이 모두 존재하고 서로 정상적으로 연결되어 있어야 합니다 (`index.html`이 `style.css`, `script.js`를 올바른 상대 경로로 로드).
- 브라우저에서 열었을 때 에러 없이 그리드와 팔레트가 렌더링되어야 합니다 (가능하다면 직접 확인하거나, 코드 리뷰로 문법 오류가 없는지 확인하세요).
- 작업 완료 후 응답에 구현한 내용과 파일 목록을 간단히 요약하세요.
