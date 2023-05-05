This is a starter template for [Learn Next.js](https://nextjs.org/learn).

<!-- TOC -->

- [Part1. 2-1. Next.js 소개 및 환경 설정](#part1-2-1-nextjs-%E1%84%89%E1%85%A9%E1%84%80%E1%85%A2-%E1%84%86%E1%85%B5%E1%86%BE-%E1%84%92%E1%85%AA%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC-%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC)
  - [학습 branch](#%ED%95%99%EC%8A%B5-branch)
  - [Next.js 프로젝트 띄워보기](#nextjs-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%9D%84%EC%9B%8C%EB%B3%B4%EA%B8%B0)
  - [package 설치](#package-%EC%84%A4%EC%B9%98)
- [Part2. 1-2. Next.js 기본 2Data Fetching](#part2-1-2-nextjs-%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB-2data-fetching)
  - [학습 branch](#%ED%95%99%EC%8A%B5-branch)
  - [DATA Fetching](#data-fetching)
- [Part2. 1-3. Next.js 기본 3Pages_Layout_Image](#part2-1-3-nextjs-%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB-3pages_layout_image)
  - [학습 branch](#%ED%95%99%EC%8A%B5-branch)
  - [Pre-renders 와 SEO](#pre-renders-%EC%99%80-seo)
  - [Pre-rendering과 SEO의 상관관계](#pre-rendering%EA%B3%BC-seo%EC%9D%98-%EC%83%81%EA%B4%80%EA%B4%80%EA%B3%84)
  - [Next.js 의 Pre-rendering 방식?](#nextjs-%EC%9D%98-pre-rendering-%EB%B0%A9%EC%8B%9D)
  - [SSG 2가지 상황](#ssg-2%EA%B0%80%EC%A7%80-%EC%83%81%ED%99%A9)
  - [Layouts](#layouts)
  - [Images](#images)
  - [정리: Pages / Layout / Image](#%EC%A0%95%EB%A6%AC-pages--layout--image)
- [Part2. 1-5. Next.js 기본 4Routing](#part2-1-5-nextjs-%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB-4routing)
  - [Router](#router)
  - [pages/index.js, src/pages/index.js 둘 다 있다면? 뭐가 우선순위를 가질까?](#pagesindexjs-srcpagesindexjs-%EB%91%98-%EB%8B%A4-%EC%9E%88%EB%8B%A4%EB%A9%B4-%EB%AD%90%EA%B0%80-%EC%9A%B0%EC%84%A0%EC%88%9C%EC%9C%84%EB%A5%BC-%EA%B0%80%EC%A7%88%EA%B9%8C)
  - [Style 이슈](#style-%EC%9D%B4%EC%8A%88)
  - [nextjs-blog 프로젝트 커스텀](#nextjs-blog-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%BB%A4%EC%8A%A4%ED%85%80)
  - [Nested routes](#nested-routes)
  - [jsconfig.json](#jsconfigjson)
  - [slug](#slug)
  - [slug](#slug)
  - [Routing 요약 정리](#routing-%EC%9A%94%EC%95%BD-%EC%A0%95%EB%A6%AC)

<!-- /TOC -->

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

# Part2. 1-5. Next.js 기본 4(Routing)

## Router

- Next.js의 Router 는 file-system 기반
- "pages/" 혹은 "src/pages/"

## pages/index.js, src/pages/index.js 둘 다 있다면? 뭐가 우선순위를 가질까?

- pages/index.js 우선 된다!

## Style 이슈

- Layout 으로 공통 코드를 빼낸 이후에 스타일이 부분적으로 적용

## nextjs-blog 프로젝트 커스텀

- commerce 프로젝트의 prettier 설정을 그대로 가져와보자
  - yarn add -D prettier - .prettierrc
  - .prettierignore
  - prettier-fix 명령 추가

## Nested routes

- pages/product/first-item.js => /product/first-item
- pages/settings/my/info.js => /settings/my/info

## jsconfig.json

```
{ "compilerOptions": { "baseUrl": "src" } }
```

## slug

- pages/category/[slug].js => /category/:slug (ex. /category/food)
- pages/[username]/info.js => /:username/info (ex. /jimmy/info)

## ...slug

- pages/cart/[...slug].js => /cart/\* (ex. /cart/2022/06/24)

## Routing 요약 정리

- Router -> File system을 토대로 구현
- pages/ 혹은 src/pages -> pages/ 가 우선순위, 하나만 가능
- 프로젝트 설정 -> prettier / jsconfig.json(절대경로)
- Slug -> 다양한 위계의 Dynamic 제공
