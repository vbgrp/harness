# 픽셀 아트 에디터 웹앱 — 구현 계획 (spec.md)

## 개요
순수 HTML/CSS/JavaScript로 만드는 16x16 픽셀 아트 에디터. `/apps/pixel-art-editor/` 폴더 안에서 완전히 자체 완결되며, 외부 라이브러리 없이 동작한다. 마우스 클릭/드래그와 모바일 터치로 격자에 도트를 찍어 그림을 그리고, 프리셋 색상 팔레트와 커스텀 색상 선택(`<input type="color">`)을 지원하며, 완성한 그림을 실제 PNG 이미지 파일로 다운로드할 수 있다.

## 1. 파일 구조
```
apps/pixel-art-editor/
├── index.html   # 마크업: 헤더, 그리드, 팔레트, 툴바(지우개/클리어/실행취소/저장)
├── style.css    # 레이아웃, 그리드 셀 스타일, 팔레트, 반응형(모바일)
└── script.js    # 그리드 상태 관리, 입력 처리(마우스/터치), PNG 내보내기
```
- 세 파일만 사용. 아이콘은 이모지나 텍스트/CSS로 대체하여 외부 리소스 의존을 없앤다.

## 2. 핵심 렌더링 방식 결정
- **편집용 격자**: CSS Grid + 16x16 = 256개의 `<div class="cell">` 요소로 구현한다 (canvas가 아님).
  - 이유: 각 셀에 대해 개별 클릭/터치 대상 판정, hover 효과, 테두리 렌더링이 CSS만으로 간단하고, `data-row`/`data-col` 속성으로 상태와 DOM을 1:1 매핑하기 쉽다.
  - 상태는 별도의 2차원 배열(또는 1차원 길이 256 배열) `gridState[y][x]`로 관리하며, 값은 색상 문자열(`#rrggbb`) 또는 `null`(투명/빈 칸)이다. DOM의 `cell.style.backgroundColor`는 이 상태를 반영하는 뷰일 뿐, 실제 데이터는 `gridState`에 둔다.
- **PNG 내보내기용**: 화면에는 보이지 않는 오프스크린 `<canvas>` (또는 export 시점에 동적으로 생성하는 canvas)를 사용해 `gridState`를 실제 이미지 픽셀로 그린 뒤 다운로드한다. 편집 화면의 div 그리드와 export용 canvas를 분리함으로써 "예쁜 편집 UI"와 "정확한 픽셀 이미지 출력"을 독립적으로 최적화할 수 있다.

## 3. 주요 기능 목록

### 3.1 16x16 격자 렌더링
- `script.js`가 페이지 로드 시 `#pixel-grid` 컨테이너 안에 16x16 `div.cell`을 동적으로 생성한다.
- 각 셀에 `data-x`, `data-y` 속성을 부여해 클릭/터치 시 좌표를 바로 읽을 수 있게 한다.
- `#pixel-grid`는 `display: grid; grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr);` 로 구성, 정사각형 셀을 위해 컨테이너에 `aspect-ratio: 1 / 1`을 적용한다.
- 기본 배경은 빈 칸을 나타내는 옅은 체크무늬 또는 단색(예: 흰색)으로 표시해 "지워진 상태"를 시각적으로 구분한다.

### 3.2 도트 찍기 (클릭 / 드래그 / 터치)
- 통합 입력 처리를 위해 **Pointer Events**(`pointerdown`, `pointermove`, `pointerup`, `pointercancel`)를 사용한다. 마우스와 터치를 동일한 API로 처리할 수 있어 로직 중복을 피한다.
- 동작 흐름:
  1. `isDrawing` 플래그를 두고, `pointerdown` 시 `true`로 설정하며 눌린 셀에 현재 선택된 색상(또는 지우개면 `null`)을 즉시 적용한다.
  2. `pointermove` 중 `isDrawing`이 `true`이면, `document.elementFromPoint(x, y)`로 그 아래 있는 `.cell` 요소를 찾아 색을 적용한다.
  3. `pointerup`/`pointercancel`(전역 바인딩 포함) 시 `isDrawing = false`.
  4. 같은 셀에 대해 값이 바뀔 때만 실제로 `gridState`와 DOM을 갱신한다.
- 그리드 컨테이너에 `touch-action: none;`을 지정해 모바일에서 드래그 중 스크롤/줌이 발생하지 않도록 한다.

### 3.3 색상 팔레트
- **프리셋 색상**: 12~16개 기본 색상 배열을 `script.js`에 정의하고 각 색상을 작은 `button.swatch`로 렌더링한다.
- 스와치 클릭 시 `currentColor`를 갱신하고, 선택된 스와치에 `.selected` 클래스를 부여한다.
- **커스텀 색상**: `<input type="color" id="custom-color-picker">`를 팔레트 영역에 배치, 값 변경 시 `currentColor` 갱신.
- 팔레트에서 색을 고르면 자동으로 "펜(그리기)" 모드로 전환된다.

### 3.4 지우개 기능
- 툴바에 "지우개" 버튼(`#eraser-btn`)을 두고, 클릭 시 `currentTool = 'eraser'`로 전환한다.
- 지우개 모드에서는 셀을 찍을 때 `gridState[y][x] = null`로 설정하고 DOM 배경을 기본 상태로 되돌린다.
- 활성화 시 `.active` 클래스로 시각 피드백. 팔레트에서 다른 색을 고르면 자동으로 펜 모드로 복귀.

### 3.5 전체 지우기 (Clear)
- "전체 지우기" 버튼(`#clear-btn`) 클릭 시 확인(`confirm()`)을 거쳐 `gridState` 전체를 초기화한다.
- Clear 실행 전 현재 상태를 undo 스택에 저장한다.

### 3.6 PNG 저장 (다운로드)
- "PNG로 저장" 버튼(`#save-png-btn`) 클릭 시:
  1. 배율(scale) 옵션(`<select id="export-scale">`, 예: 8x/16x/32x, 기본 16x)을 확인한다.
  2. 오프스크린 `<canvas>`를 생성하고 `canvas.width = canvas.height = 16 * scale`로 설정한다.
  3. `gridState`를 순회하며 값이 있는 셀은 `ctx.fillRect(x*scale, y*scale, scale, scale)`로 그리고, `null`인 셀은 투명하게 둔다.
  4. `canvas.toBlob`(또는 `toDataURL`)로 이미지 데이터를 얻는다.
  5. 동적 `<a download="pixel-art.png">`을 생성해 클릭 트리거로 다운로드하고 이후 정리(`URL.revokeObjectURL`)한다.

### 3.7 실행 취소 (Undo) — 권장 기능
- 드로잉 스트로크 시작 시점과 Clear 실행 직전에 `gridState` 스냅샷을 `undoStack`에 push (최대 30~50개 제한).
- "실행 취소" 버튼(`#undo-btn`)으로 최근 스냅샷 복원. 스택이 비면 버튼 비활성화.
- (선택) `Ctrl+Z` 단축키 지원.

## 4. UI 레이아웃 개요
1. **헤더**: 타이틀 "픽셀 아트 에디터" + 짧은 설명.
2. **툴바**: 펜/지우개 토글, 실행 취소, 전체 지우기, 내보내기 배율 선택, "PNG로 저장" 버튼.
3. **메인 그리드**: `#pixel-grid`, 화면 중앙, 정사각형 유지.
4. **팔레트**: 프리셋 스와치(flex-wrap) + 커스텀 색상 피커 + 현재 색상 미리보기.
5. **데스크톱**: 그리드 중앙 + 팔레트/툴바를 아래 또는 사이드바에 배치.
6. **모바일**: 헤더 → 그리드 → 팔레트 → 툴바 순으로 세로 스택.

## 5. 모바일 대응 방안
- `<meta name="viewport" content="width=device-width, initial-scale=1">`.
- 그리드 크기: `width: min(90vw, 90vh, 480px); aspect-ratio: 1 / 1;`.
- 그리드에 `touch-action: none;` 적용.
- 스와치/버튼 최소 40~44px 터치 타겟.
- 팔레트가 넘칠 경우 `flex-wrap` 또는 가로 스크롤.
- Pointer Events 사용으로 마우스/터치 분기 코드 불필요.

## 6. 파일별 책임 분담
### `index.html`
- 문서 구조, 헤더, 툴바 버튼 마크업, 팔레트 컨테이너, `#pixel-grid` 빈 컨테이너, 커스텀 색상 `<input type="color">`, 배율 `<select>`. `style.css`/`script.js` 연결.

### `style.css`
- 전체 레이아웃, `#pixel-grid`/`.cell` 스타일, 팔레트 스와치 스타일, 버튼 활성 상태, 반응형 미디어 쿼리.

### `script.js`
- 상태: `gridState`, `currentColor`, `currentTool`, `undoStack`.
- 초기화: 그리드/팔레트 DOM 생성, 이벤트 바인딩.
- 입력 처리: Pointer Events 기반 드로잉.
- 기능 함수: `clearGrid()`, `pushUndoSnapshot()`, `undo()`, `exportToPNG(scale)`.
- 렌더링 헬퍼: `renderCell(x, y)` / `renderAll()`.

## 7. Build 단계 참고사항
- 변수명, 함수 분리 방식은 자유롭게 구현하되, 파일 구조(`index.html`/`style.css`/`script.js`)와 핵심 기능(16x16 그리드, 클릭/드래그/터치 드로잉, 프리셋+커스텀 색상, 지우개, 전체 지우기, 배율 선택 가능한 PNG 저장)은 반드시 지킨다.
- Undo 기능은 권장이며 최소 구현(직전 1단계만 기억)도 허용.
- PNG는 투명 배경 지원을 기본으로 한다(캔버스 기본이 투명이므로 구현 난이도 낮음).
- `apps/2048/` 폴더의 기존 구조/컨벤션을 참고하되, 그 폴더의 파일은 절대 수정하지 않는다.
