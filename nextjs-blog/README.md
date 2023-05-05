This is a starter template for [Learn Next.js](https://nextjs.org/learn).

<!-- TOC -->

- [Part1. 2-1. Next.js 소개 및 환경 설정](#part1-2-1-nextjs-%E1%84%89%E1%85%A9%E1%84%80%E1%85%A2-%E1%84%86%E1%85%B5%E1%86%BE-%E1%84%92%E1%85%AA%E1%86%AB%E1%84%80%E1%85%A7%E1%86%BC-%E1%84%89%E1%85%A5%E1%86%AF%E1%84%8C%E1%85%A5%E1%86%BC)
  - [학습 branch](#%ED%95%99%EC%8A%B5-branch)
  - [Next.js 프로젝트 띄워보기](#nextjs-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%9D%84%EC%9B%8C%EB%B3%B4%EA%B8%B0)
  - [package 설치](#package-%EC%84%A4%EC%B9%98)
  - [project 실행](#project-%EC%8B%A4%ED%96%89)
- [Part2. 1-1 Next.js 기본 1프레임워크 구조](#part2-1-1-nextjs-%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB-1%E1%84%91%E1%85%B3%E1%84%85%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%B7%E1%84%8B%E1%85%AF%E1%84%8F%E1%85%B3-%E1%84%80%E1%85%AE%E1%84%8C%E1%85%A9)
  - [Commerce 예제를 살펴보자](#commerce-%EC%98%88%EC%A0%9C%EB%A5%BC-%EC%82%B4%ED%8E%B4%EB%B3%B4%EC%9E%90)
  - [Commerce 프로젝트는?](#commerce-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%8A%94)
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
- [Part2. 1-6. Next.js 기본 5Shallow Routing](#part2-1-6-nextjs-%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB-5shallow-routing)
  - [Dynamic Routes](#dynamic-routes)
    - [query가 있다면?](#query%EA%B0%80-%EC%9E%88%EB%8B%A4%EB%A9%B4)
    - [궁금증?!](#%EA%B6%81%EA%B8%88%EC%A6%9D)
  - [다중 슬러그 1](#%EB%8B%A4%EC%A4%91-%EC%8A%AC%EB%9F%AC%EA%B7%B8-1)
  - [다중 슬러그 2](#%EB%8B%A4%EC%A4%91-%EC%8A%AC%EB%9F%AC%EA%B7%B8-2)
    - [옵셔널 slug](#%EC%98%B5%EC%85%94%EB%84%90-slug)
  - [Routing 방법 2가지](#routing-%EB%B0%A9%EB%B2%95-2%EA%B0%80%EC%A7%80)
  - [Shallow Routing](#shallow-routing)
    - [상태는 유지하면서 URL 만 바꾸고 싶은 경우?](#%EC%83%81%ED%83%9C%EB%8A%94-%EC%9C%A0%EC%A7%80%ED%95%98%EB%A9%B4%EC%84%9C-url-%EB%A7%8C-%EB%B0%94%EA%BE%B8%EA%B3%A0-%EC%8B%B6%EC%9D%80-%EA%B2%BD%EC%9A%B0)
  - [url을 바꾸는 3가지 방식](#url%EC%9D%84-%EB%B0%94%EA%BE%B8%EB%8A%94-3%EA%B0%80%EC%A7%80-%EB%B0%A9%EC%8B%9D)
  - [Shallow Routing 정리](#shallow-routing-%EC%A0%95%EB%A6%AC)
- [Part2. 1-7. Next.js 기본 6API Routes](#part2-1-7-nextjs-%E1%84%80%E1%85%B5%E1%84%87%E1%85%A9%E1%86%AB-6api-routes)
  - [API란?](#api%EB%9E%80)
    - [실제 서비스 예시](#%EC%8B%A4%EC%A0%9C-%EC%84%9C%EB%B9%84%EC%8A%A4-%EC%98%88%EC%8B%9C)
  - [Next.js 가 제공하는 API Routes](#nextjs-%EA%B0%80-%EC%A0%9C%EA%B3%B5%ED%95%98%EB%8A%94-api-routes)
  - [Dynamic API Routes](#dynamic-api-routes)
  - [Client 사이드 Data Fetching](#client-%EC%82%AC%EC%9D%B4%EB%93%9C-data-fetching)
  - [Routing 에서 다뤘던 여러 Slug 활용법 적용 가능](#routing-%EC%97%90%EC%84%9C-%EB%8B%A4%EB%A4%98%EB%8D%98-%EC%97%AC%EB%9F%AC-slug-%ED%99%9C%EC%9A%A9%EB%B2%95-%EC%A0%81%EC%9A%A9-%EA%B0%80%EB%8A%A5)
  - [API Middlewares](#api-middlewares)
  - [Response](#response)
  - [API Routes 정리](#api-routes-%EC%A0%95%EB%A6%AC)

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

# Part2. 1-1 Next.js 기본 1(프레임워크 구조)

## Commerce 예제를 살펴보자

```
git clone https://github.com/vercel/commerce.git
yarn
yarn build yarn start
```

## Commerce 프로젝트는?

- Typescript로 되어있고
- Turbo 로 mono repo를 관리하고 있고
- 4개의 extension을 recommendation 으로 정해뒀고
- yarn build 후에 yarn start 로 실행해볼 수 있다

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
- ⭐️ pages/index.js에 있던 Link의 href 주소 부분이 정상 동작하지 않는다.
  - 정상 동작 하지 않는 부분은 src/pages/index.js이 동작해야 동작해야 한다.

## Style 이슈

- Layout 으로 공통 코드를 빼낸 이후에 스타일이 부분적으로 적용

## nextjs-blog 프로젝트 커스텀

- commerce 프로젝트의 prettier 설정을 그대로 가져와보자

  - yarn add -D prettier
  - .prettierrc, .prettierignore 추가
  - .prettierrc code

    ```
      {
        "semi": false,
        "singleQuote": true,
        "tabWidth": 2,
        "useTabs": false
      }

    ```

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

# Part2. 1-6. Next.js 기본 5(Shallow Routing)

## Dynamic Routes

- [slug] 값은 어떻게 활용할 것 인가?

  - pages/category/[slug].js

- useRouter 객체 활용!
  ```
   import { useRouter } from ‘next/router’
   const router = useRouter()
   const { slug } = router.query
  ```

### query가 있다면?

- "/category/food?from=event" 이런 url이라면
  - useRtouer().query는 아래와 같은 객체를 반환
  - { “slug”: “food”, “from”: “event” }

### 궁금증?!

- query에 slug가 있다면?
  - /category/food?slug=book
  - ⭐️ 아래와 같이 query에 있는 book은 생략 된다.
  - { “slug”: “food”}

## 다중 슬러그 1

- pages/[username]/[info].js
- const { username, info } = router.query

## 다중 슬러그 2

- pages/cart/[...slug].js
  - const { slug } = router.query
  - slug는 배열

### 옵셔널 slug

- pages/cart/[...slug].js => /cart 로 접근하면 404가 뜬다.
- pages/cart/[[...slug]].js 해주면 slug가 존재하지 않아도 받는다

## Routing 방법 2가지

1. <Link href=”url”><a>url 로</a></Link>
2. router.push(“url”)

## Shallow Routing

- getServerSideProps / getStaticProps 등을 다시 실행시키지 않고,
- 현재 상태를 잃지 않고 url을 바꾸는 방법

### 상태는 유지하면서 URL 만 바꾸고 싶은 경우?

- 사용자가 어떤 동작을 했고, 그 기록을 query로 남기고 싶을때
  - query로 남기면 사용자가 새로고침을 해도 유지된다.
- Data fetching 을 일으키고 싶지 않다면?

## url을 바꾸는 3가지 방식

1. location.replace(“url”): ⭐️ 로컬 state 유지 안됨(= 리렌더) / ⭐️ data fetching은 일어남
2. router.push(url): ⭐️ 로컬 state 유지 / ⭐️ data fetching은 일어남
3. router.push(url, as, { shallow: true }): ⭐️ 로컬 state 유지 / ⭐️ data fetching [x]

## Shallow Routing 정리

- Dynamic Routes -> slug를 활용하는 방법
- 다중 slug -> [user]/[info].js / [...slug].js
- 옵셔널 slug -> [[...slug]].js
- Shallow Routing -> router.push(url, undefined, {shallow:true})

# Part2. 1-7. Next.js 기본 6(API Routes)

## API란?

- Application Programming Interface
  - 응용 프로그래밍 인터페이스
  - 컴퓨터나 컴퓨터 프로그램 사이의 연결
- Frontend Service - Backend Service 간의 연결
  - Frontend Service는 고객과 닿아있고,
  - Backend Service는 DB에 닿아있다.
- 고객이 DB에 접근하기 위해 FE는 BE와 연결되어야하고 이때 API를 활용한다.
  - BE가 제공해주는 API를 통해 DB의 내용을 활용할 수 있다.

### 실제 서비스 예시

- 커머스 사이트 - 개발자 도구 - 네트워크 탭
- 어떤 API를 호출하는지? 2*cm / 마켓 컬*

## Next.js 가 제공하는 API Routes

- pages/api/\*

## Dynamic API Routes

- pages/api/user-info/[uid].js

## Client 사이드 Data Fetching

```
fetch('/api/user')
.then((res) => res.json())
.then((data) => { 처리 })
```

## Routing 에서 다뤘던 여러 Slug 활용법 적용 가능

- 다중 Route

```
/api/post/create.js
/api/post/[pid].js
/api/post/[...slug].js
```

## API Middlewares

- 내장 Middleware의 기능
- req.cookies / req.query ...
- req / res 관련 다양한 기능들은 Middleware 들을 활용할 수 있다.
  - ex) CORS (교차 출처 리소스 공유)

## Response

- res.status(code)
- res.json(body): serializable object
- res.redirect(code, url)
- res.send(body) : string / object / Buffer

## API Routes 정리

- API란? -> 프로그램 간의 연결
- API Routes -> Routing과 동일(파일 기반 / Dynamic)
- Middlewares -> 기본으로 제공되는 built in외 추가 가능
- Response -> status / json / redirect / send...
