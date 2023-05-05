import Link from "next/link";

/* 
  ⭐️point: SSR 설명
    - SSR (Server Side Render)
    - 서버가 그린다
    - 그린다: 데이터를 가져와서 그린다
    - 서버가 그린다: 서버가 데이터를 가져와서 그린다
    - SSR을 담당하는 함수 -> getServerSideProps
      - 서버에서 데이터를 가지고 오고 페이지로 전달하는 역할을 한다.
*/
export async function getServerSideProps() {
  console.log("--- server"); // 여기 로그는 서버를 실행한 terminal에서 보인다.(서버 실행 방법 두 가지 yarn dev, yarn star)
  return {
    //⭐️ step-1
    props: { time: new Date().toISOString() },
  };
}

export default function Home({ time }) {
  console.log("time: ", time);
  //⭐️ step-2
  return (
    <div>
      "file location: src/pages/index.js"
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
