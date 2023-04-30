import Head from "next/head";
import styles from "../styles/Home.module.css";

/* 
  ⭐️point: SSG(Static-Site Generation)설명
    - 정적인 사이트를 생성한다
    - 생성한다: 데이터를 가져와서 그려둔다
    - 정적인 사이트를 생성한다: 정적인 사이트를 데이터를 가져와서 그려 둔다
    - 개발 환경에서는 SSG가 제대로 동작하지 않는다.
      - 개발 환경에서는 SSR처럼 동작한다.
      - yarn build -> yarn start로 빌트한 파일을 실행해야 한다.
    - SSG을 담당하는 함수
      - getStaticProps(with getStaticPaths)
    - 정리 하면
      - 블로그와 같이 변경되기 전에 계속 같은 내용이라면 build시 static하게 서버에서 만들어 놓으면 서버에 부하가 훨씬 덜하게 서빙할 수 있다.
*/
export async function getStaticProps() {
  console.log("--- server");
  return {
    //⭐️ step-1
    props: { time: new Date().toISOString() },
  };
}

export default function SSG({ time }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">{time}</h1>
        <label>csr 예시 페이지 입니다.</label>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
