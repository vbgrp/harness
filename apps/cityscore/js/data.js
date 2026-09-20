/**
 * data.js — 시티스코어 정적 데이터
 * 원본 디자인 소스(cityscore-design-source.dc.html)의 cityData()/renderVals() 값을 그대로 옮김.
 * 임의로 값을 바꾸지 않는다.
 */

// 도시 8개
const CITIES = [
  { name: "제주시", region: "제주", score: 86, delta: "▲ 3", cost: "138만", net: "412Mbps", cowork: "14곳", air: "좋음", blurb: "코워킹·카페 밀도가 가장 높고 노마드 모임이 상시 열립니다", tags: ["#노마드밀집", "#바다뷰"], photoLabel: "제주 도심 전경" },
  { name: "강릉", region: "강원", score: 82, delta: "▲ 6", cost: "112만", net: "388Mbps", cowork: "7곳", air: "매우좋음", blurb: "서울 KTX 2시간, 주말 서핑까지 붙일 수 있는 접근성", tags: ["#서핑", "#KTX2시간"], photoLabel: "강릉 해변 사진" },
  { name: "부산 해운대", region: "부산", score: 84, delta: "▲ 2", cost: "145만", net: "465Mbps", cowork: "22곳", air: "보통", blurb: "대도시 인프라와 해변 생활을 동시에 가져가는 선택지", tags: ["#대도시", "#공항근접"], photoLabel: "해운대 해안 야경" },
  { name: "속초", region: "강원", score: 78, delta: "▲ 5", cost: "98만", net: "351Mbps", cowork: "4곳", air: "매우좋음", blurb: "예산 대비 만족도가 가장 빠르게 오르는 도시", tags: ["#저예산", "#산과바다"], photoLabel: "속초 항구 전경" },
  { name: "전주", region: "전북", score: 75, delta: "▲ 1", cost: "94만", net: "402Mbps", cowork: "6곳", air: "좋음", blurb: "월세와 식비가 낮고 장기 체류 숙소 선택지가 넓습니다", tags: ["#저예산", "#로컬맛집"], photoLabel: "전주 한옥마을" },
  { name: "대전 둔산", region: "충남", score: 77, delta: "— 0", cost: "108만", net: "498Mbps", cowork: "11곳", air: "보통", blurb: "전국 어디로든 1시간대, 인터넷 실측 속도 1위", tags: ["#교통허브", "#인터넷1위"], photoLabel: "대전 도심 사진" },
  { name: "여수", region: "전남", score: 73, delta: "▲ 4", cost: "101만", net: "329Mbps", cowork: "3곳", air: "좋음", blurb: "겨울에도 온화하고 워케이션 숙소 프로그램이 많습니다", tags: ["#따뜻한겨울", "#워케이션"], photoLabel: "여수 밤바다" },
  { name: "서울 성수", region: "서울", score: 88, delta: "▲ 1", cost: "186만", net: "520Mbps", cowork: "38곳", air: "나쁨", blurb: "커뮤니티와 코워킹은 압도적, 대신 생활비 점수가 낮습니다", tags: ["#커뮤니티1위", "#고비용"], photoLabel: "성수동 거리" }
];

// 헤더 퀵 태그
const QUICK_TAGS = ["#한달살기", "#저예산", "#바다", "#코워킹많은", "#공기좋은", "#서울근교", "#워케이션 숙소"];

// 히어로 필터카드 탭
const TAB_LABELS = ["점수순", "예산 맞춤", "지도에서"];

// 정렬 버튼 라벨
const SORT_LABELS = ["종합 점수", "생활비 낮은 순", "인터넷 빠른 순", "코워킹 많은 순", "공기질 좋은 순"];

// "중요하게 볼 항목" 기준 칩 라벨
const CRITERIA_LABELS = ["생활비", "인터넷 속도", "코워킹", "공기질", "커뮤니티", "교통", "카페"];

// 비교 섹션(강릉 vs 제주시) 행
const COMPARE_ROWS = [
  { label: "월 생활비", a: "112만", b: "138만", aw: "82%", bw: "64%" },
  { label: "인터넷 속도", a: "388", b: "412", aw: "76%", bw: "84%" },
  { label: "코워킹 접근성", a: "7곳", b: "14곳", aw: "48%", bw: "92%" },
  { label: "공기질", a: "매우좋음", b: "좋음", aw: "94%", bw: "78%" },
  { label: "노마드 커뮤니티", a: "보통", b: "활발", aw: "55%", bw: "88%" }
];

// 리뷰 3개
const REVIEWS = [
  { name: "김도현", job: "백엔드 개발자", stay: "2개월 체류", city: "강릉", score: "8.4", text: "아침에 파도 보고 일하다가 저녁엔 러닝. 코워킹이 두 곳뿐이라 자리 경쟁이 있지만 인터넷은 한 번도 끊긴 적 없었습니다." },
  { name: "이서연", job: "프리랜스 작가", stay: "4개월 체류", city: "전주", score: "7.9", text: "월세 45만원에 원룸을 구했어요. 조용해서 마감 치기엔 최고인데 노마드 모임은 직접 만들어야 하는 수준." },
  { name: "박준영", job: "마케터", stay: "6개월 체류", city: "제주시", score: "9.1", text: "매주 노마드 밋업이 열려서 외롭지 않았습니다. 다만 겨울 항공권과 렌터카 비용을 예산에 꼭 넣으세요." }
];

// 푸터 링크 컬럼
const FOOTER_COLS = [
  { title: "서비스", links: ["도시 랭킹", "도시 비교", "점수 산정 방식", "데이터 출처"] },
  { title: "커뮤니티", links: ["리뷰 쓰기", "노마드 밋업", "도시별 오픈채팅", "제휴 코워킹"] },
  { title: "회사", links: ["소개", "블로그", "이용약관", "개인정보처리방침"] }
];

// 기타 상수
const REVIEW_COUNT = "2,418";
const UPDATED_AT = "2026.09.18";

// 공기질 정렬용 등급 매핑 (main.js에서 사용)
const AIR_RANK = { "매우좋음": 4, "좋음": 3, "보통": 2, "나쁨": 1 };
