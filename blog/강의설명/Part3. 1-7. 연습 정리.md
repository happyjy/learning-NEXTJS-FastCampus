# Part3. 1-7. 연습 정리

## 1-1. Link Component / Client-side Navigate

- 프레임워크 익히는 최상의 방법 -> 실제 서비스를 프레임워크로 만들기
- Link component -> Next.js 에서 제공하는 링크 기능
- Client side Navigate -> url로 접근하는 것과 달리 JS 상에서 변경
- Prefetching -> Viewport 내 Link 페이지를 미리 페칭

## 1-2. Layouts / Styling 정리

- 정적 리소스 -> /public (robots.txt / images 등)
- Image component -> 이미지 관련 최적화 기능
- Metadata -> Head / Script
- Styling -> styled-jsx / CSS modules

## 1-3. Pre-rendering / Data Fetching

- Pre-rendering -> SSG 선택 기준
- SSG 2가지 케이스 -> without data / with data
- YAML Front Matter -> Metadata 표기 방식 / gray-matter로 파싱
- API Routes -> fs는 serverside에서만 가능

## 1-4. Dynamic Routes

- 하나의 파일로 여러 페이지 -> Dynamic Routes
- SSG 시 생성할 목록 -> getStaticPaths (paths 배열 반환)
- 도구: md 파싱 / date format -> remark & remark-html / date-fns
- getStaticPaths fallback -> 빌드시 생성되지 않은 page에 대한 처리

## 1-5. API Routes / 배포하기

- API Routes -> 요청하는 코드는 Client side 에만 두자
- POST 요청 -> Post를 직접 write 하고 POST 해봄
- Vercel로 배포 -> 순서대로만 하면 너무 간단
- Main 브랜치 -> Push 하거나 PR을 올리면 배포됨
