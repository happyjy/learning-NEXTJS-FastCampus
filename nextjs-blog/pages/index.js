import Link from "next/link";

export async function getServerSideProps() {
  console.log("--- server"); // 여기 로그는 서버를 실행한 terminal에서 보인다.(서버 실행 방법 두 가지 yarn dev, yarn star)
  return {
    props: { time: new Date().toISOString() },
  };
}

export default function Home({ time }) {
  console.log("time: ", time);

  return (
    <div>
      "file location: pages/index.js"
      <main>
        <h1 className="title">{time}</h1>
        <label>ssr 예시 페이지 입니다.</label>
        <h1>
          <Link href="/CSR">CSR 예시 페이지로</Link>
        </h1>
        <h1>
          <Link href="/SSG">SSG 예시 페이지로</Link>
        </h1>
        <h1>
          <Link href="/ISR">ISR 예시 페이지로</Link>
        </h1>
      </main>
    </div>
  );
}
