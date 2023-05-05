import Layout from '../components/Layout';
import SubLayout from '../components/SubLayout';

/* 
  ⭐️point: SSG(Static-Site Generation)설명
    - 정적인 사이트를 생성한다
    - 생성한다: 데이터를 가져와서 그려둔다
    - 정적인 사이트를 생성한다: 정적인 사이트를 데이터를 가져와서 그려 둔다
    - 개발 환경에서는 SSG가 제대로 동작하지 않는다.
      - 개발 환경에서는 SSR처럼 동작한다.
      - yarn build -> yarn start로 빌트한 파일을 실행해야 한다.
    - 새로 고침시 terminal에 "--- server"문구가 브라우저 리프레쉬해도 보이지 않는다.
    - SSG을 담당하는 함수
      - getStaticProps(with getStaticPaths)
    - 정리 하면
      - 블로그와 같이 변경되기 전에 계속 같은 내용이라면 build시 static하게 서버에서 만들어 놓으면 서버에 부하가 훨씬 덜하게 서빙할 수 있다.
*/
export async function getStaticProps() {
  console.log('--- server');
  return {
    //⭐️ step-1
    props: { time: new Date().toISOString() },
  };
}

export default function SSG({ time }) {
  return (
    <>
      <h1 className="title">{time}</h1>
      <label>ssg 예시 페이지 입니다.</label>
    </>
  );
}

SSG.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
