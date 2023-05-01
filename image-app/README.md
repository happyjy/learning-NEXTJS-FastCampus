# Image Component With Layout Responsive를 구현하는 Next.js의 image 객체

- import Image from "next/image";
- next package에 image의 객체를 활용하면 viewport에 맞는 image size를 제공함으로 네트워크의 최적화를 이룰 수 있다.

# 실행 방법

1. yarn 명령어로 package설치

```
yarn
```

2. 프로젝트를 build하고 실행

```
yarn build
yarn start
```

# Image Component Example

This example shows how to use the [Image Component in Next.js](https://nextjs.org/docs/api-reference/next/image) serve optimized, responsive images.

The index page ([`pages/index.tsx`](pages/index.tsx)) has a couple images, one internal image and one external image. In [`next.config.js`](next.config.js), the `domains` property is used to enable external images. The other pages demonstrate the different layouts. Run or deploy the app to see how it works!

## Live demo

[https://image-component.nextjs.gallery](https://image-component.nextjs.gallery)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example) or preview live with [StackBlitz](https://stackblitz.com/github/vercel/next.js/tree/canary/examples/image-component)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/image-component&project-name=image-component&repository-name=image-component)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example image-component image-app
# or
yarn create next-app --example image-component image-app
# or
pnpm create next-app --example image-component image-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
