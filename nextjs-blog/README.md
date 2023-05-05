This is a starter template for [Learn Next.js](https://nextjs.org/learn).

# Part1. 2-1. Next.js 소개 및 환경 설정

## 학습 branch

```
part1.2-1_Next.js소개_및_환경설정
```

## Next.js 프로젝트 띄워보기

```
npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"


```

## package 설치

```
yarn

```

## project 실행

```

yarn dev

```

# Part2. 1-2. Next.js 기본 2(Data Fetching)

## 학습 branch

```
Part2.1-2_Next.js_기본_2(Data_Fetching)
```

## DATA Fetching

- 페이지를 그리는 방식 -> 데이터를 가져와서 그린다
- 3 + 1 -> SSR / CSR / SSG / ISR
- SSG -> yarn dev 로는 SSR 처럼 동작
- 필요에 맞춰서-> SSR은 서버 부하 / SSG + ISR

# Part2. 1-3. Next.js 기본 3(Pages_Layout_Image)

## 학습 branch

```
Part2.1-3_Next.js_기본_3(Pages_Layout_Image)
```

## Pre-renders 와 SEO

- Next.js는 모든 페이지를 기본적으로 pre-render 한다.
- Pre-rendering(Using Next.js)
- No Pre-rendering(Plain React.js app)

## Pre-rendering과 SEO의 상관관계

- CSR만 제공한다면, Client(브라우저) 처럼 동작하지 않는 검색엔진의 경우 아무런 데이터도 조회해갈 수 없다.
- Pre-render를 해두면 Client 처럼 동작하지 않는 검색엔진에게 필요한 데이터를 제공 할 수 있다.

## Next.js 의 Pre-rendering 방식?

- SSG(⭐️ recommended) & SSR
- ⭐️ SSG는 <u>빌드 타임에</u> pre-render
- ⭐️ SSR은 <u>요청 타임에</u> pre-render

## SSG 2가지 상황

1. Page의 내용물이 외부 데이터에 의존적인 상황
2. Page Paths 까지 외부 데이터에 의존적인 상황

- 첫번째는 getStaticProps만 가지고도 가능
- 두번째는 getStaticPaths도 함께 활용해야 가능

## Layouts

> 현 브렌치에서 실습하고 있는 내용

- 여러 Page들의 공통 처리

- 하나의 공통된 Layout을 쓰는 경우 <b>(components/Layout.js)</b>
  - 컴포넌트 하나를 pages/\_app.js 에서 활용하면 됨
- 여러개의 Layouts을 활용하고 싶은 경우 <b>components/SubLayout.js</b>
  - Page.getLayout에 getLayout 함수를 제공

## Images

> Next.js 가 제공하는 최적화 Image Component

- Improved Performance
- Visual Stability(CLS- Cumulative Layout Shift 방지)
- Faster Page Loads(viewport 진입시 로드 / blur 처리)
- Asset Flexibility(리사이징)

## 정리: Pages / Layout / Image

- Pre-rendering -> SEO 와 초기 로딩 속도
- SSG vs SSR -> SSG은 빌드 시 / SSR은 요청 시
- Layout -> pages/\_app.js 활용해서 페이지 공통화
- Images -> 최적화된 이미지 활용 util
