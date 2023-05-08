# Next.js 연습 3 1 Pre-rendering / Data Fetching

## 1. (질릴만큼) 반복되는 Pre-rendering / Data Fetching

- 그만큼 Next.js에 핵심이 되는 개념
- SSG(build time) vs SSR(request time)

  - SSG: 말 그대로 build time에 미리 정적인 페이지를 생성.
  - SSR: 서버에 요청했을때 그때 서야 pre render를 시작한다.

## 2. Next.js를 활용하면 페이지별로 Pre-rendering 방식을 선택할 수 있다.

- getStaticProps 를 사용하면 SSG
- getServerSideProps 를 사용하면 SSR

## 3. SSG를 사용하면 좋은 페이지

- Marketing pages
- Blog posts
- E-commerce product listings
- Help and documentation

## 4. SSG를 사용하면 좋은 페이지 적용 여부 선택 기준

- 사용자가 페이지를 요청하기 전에 pre-render 할 수 있는가?
  - Yes 라면 SSG
  - No 라면 SSR 혹은 ISR 혹은 CSR

## 5. SSG의 2가지 케이스

1. 외부 데이터 없이 pre-rendering
2. 외부 데이터를 가져와서 pre-rendering

- 외부 데이터?

  - 다른파일
  - API
  - DB등...

### 다른 파일을 읽어와보자

```
https://nextjs.org/learn/basics/data-fetching/blog-data
```

- 파일 추가
  - posts/pre-rendering.md
  - posts/ssg-ssr.md

## 7. " —-- --- " 으로 감싸진 metadata를 읽어보자 (YAML Front Matter)

- YAML을 "야믈"이라고 읽더라...

```
https://nextjs.org/learn/basics/data-fetching/implement-getstaticprops
```

```
yarn add gray-matter
```

sort 로직 살펴보기

```
https://www.google.com/search?q=js+sort
```

- SSG로 구현: getStaticProps 활용
- SSR로 구현: getServerSideProps 활용
- CSR로 구현: API Routes 활용

## 9. Data를 가져오는 함수 getSortedPostsData 의 확장

- 다른File조회
- 외부api요청
- DB조회

## 10. 정리 Pre-rendering / Data Fetching

- Pre-rendering -> SSG 선택 기준
- SSG 2가지 케이스 -> without data / with data
- YAML Front Matter -> Metadata 표기 방식 / gray-matter로 파싱
- API Routes -> fs는 serverside에서만 가능
