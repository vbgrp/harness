# 지침: 픽셀 아트 에디터 - Review 단계

## 배경
저장소 루트: `D:\Claude_code\Harness`. 마크다운 기반 블로그 + 미니 웹앱 포트폴리오 (HTML/CSS/JS만 사용).
루트의 `CLAUDE.md`에 정의된 작업 사이클(Plan → Build → Review → Embed)을 따르고 있으며, 지금은 Review 단계입니다.
당신은 Build를 수행한 서브에이전트와 별개의 검증 담당자입니다.

- 계획: `apps/pixel-art-editor/spec.md`
- 구현: `apps/pixel-art-editor/index.html`, `apps/pixel-art-editor/style.css`, `apps/pixel-art-editor/script.js`

## 임무
1. `spec.md`를 읽고 구현이 계획을 충족하는지 확인하세요.
2. 세 파일의 코드를 읽고 문법 오류, 버그, 접근성/모바일 문제, 명백한 로직 오류가 없는지 검토하세요.
3. 브라우저(Browser 도구)에서 `apps/pixel-art-editor/index.html`을 실제로 열어 다음을 직접 테스트하세요:
   - 페이지 로드 시 16x16 격자와 색상 팔레트가 정상적으로 렌더링되는지
   - 클릭으로 셀에 색이 칠해지는지, 드래그로 여러 셀에 연속으로 칠해지는지
   - 프리셋 색상 선택과 커스텀 색상(`<input type="color">`) 선택이 동작하는지
   - 지우개 도구가 정상 동작하는지
   - 전체 지우기 버튼이 확인 후 동작하는지
   - 실행 취소(undo)가 있다면 동작하는지
   - "PNG로 저장" 버튼 클릭 시 에러 없이 다운로드가 트리거되는지 (네트워크/콘솔 에러 확인)
   - 콘솔에 에러가 없는지 (`read_console_messages` 등으로 확인)
   - 모바일 뷰포트(예: 375px 너비)로 리사이즈하여 레이아웃이 깨지지 않는지 확인
4. 문제를 발견하면 **직접 수정하세요** (단, 아래 범위 제한을 지킬 것).

## 범위 제한 (매우 중요)
- 오직 다음 파일만 생성/수정할 수 있습니다:
  - `apps/pixel-art-editor/index.html`
  - `apps/pixel-art-editor/style.css`
  - `apps/pixel-art-editor/script.js`
  - `apps/pixel-art-editor/review.md` (새로 작성)
- 그 외 파일(`spec.md` 포함)은 읽기만 하고 수정하지 마세요.
- 루트 `index.html`, `apps/2048/*`, `CLAUDE.md`는 절대 건드리지 마세요.
- 테스트 중 다운로드된 파일(예: 테스트용 PNG)이 저장소 안에 생성되었다면 검토 후 반드시 삭제하세요.

## 산출물
`apps/pixel-art-editor/review.md` 파일을 작성하세요. 포함할 내용:
- 테스트한 항목과 결과 (통과/실패)
- 발견한 문제와 수정 여부
- 최종 결론 (배포 가능 여부)

## 완료 조건
- 브라우저 테스트를 실제로 수행했다는 근거(무엇을 확인했는지)를 review.md에 명시하세요.
- 발견된 문제는 모두 수정 후 재확인하세요.
- 응답에 review.md 요약과 최종 결론을 포함하세요.
