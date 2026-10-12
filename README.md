# Seorak 서락 - 프리미엄 독서 PWA

지침 11개를 모두 충족하는 프리미엄 독서앱

## 기능
1. 초기화면 세련된 디자인, 서재/파일열기/붙여넣기 아이콘 3개로 간소화, 서재는 시트로 숨김
2. 서재: 개별 삭제, 이어읽기(scrollTop 복원), 책갈피, localStorage 영구보관
3. 목차: 한글 소설 로직(제n장, 프롤, 에필, 외전 등) 자동 파싱, 없으면 임의 목차(첫 문장 기반)
4. 글꼴 5종, 자간 0~0.12, 크기 14~28, 행간 1.4~2.4, 나이트모드 4종(light/sepia/dark/night)
5. 시스템 TTS (한국어 우선), 속도 조절, 문장 하이라이트
6. txt, docx(mammoth), pdf(pdf.js CMap), epub(JSZip), md(marked), html 지원 (code 많은 html은 텍스트로)
7. txt 인코딩: utf-8 BOM 제거, utf-8 fatal -> euc-kr(cp949) -> ansi 호환
8. 본문 아름다운 현대 서식
9. PWA: manifest data URI + static manifest.json, sw.js, 오프라인 작동, 홈화면 설치 가능
10. 프리미엄 퀄리티
11. 아일랜드바: 홈 3개, 리더 4개(목차+책갈피 / Aa / 음성 / 닫기), 자동숨김

## PDF 한글 깨짐 해결
- pdf.js cMapUrl, standardFontDataUrl, disableWorker:true로 iOS 대응
- 바이너리 폴백 제거: 실패 시 에러 카드만 표시, 절대 깨진 문자 노출 안 함
- y tolerance 줄 그룹화 + NFKC 정규화

## GitHub Pages 배포
1. 이 폴더 전체를 GitHub 리포지토리에 업로드
2. Settings > Pages > Source: main branch / root 선택
3. https://username.github.io/repo/ 로 접속
4. iOS Safari: 공유 > 홈 화면에 추가, Android Chrome: 설치 배너

## 로컬 테스트
```bash
npx serve .
# 또는
python -m http.server 8000
```

## 파일 구조
- index.html: 단일 파일 앱 (모든 로직 포함)
- manifest.json: PWA 매니페스트 (정적)
- sw.js: 서비스 워커 (오프라인 캐시)
- icon-192.png, icon-512.png: 아이콘

모든 데이터는 localStorage에만 저장되며 서버로 전송되지 않습니다.
