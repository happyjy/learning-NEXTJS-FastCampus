import Layout from '../components/Layout'
import SubLayout from '../components/SubLayout'

/* 
  ⭐️point: ISR (Incremental Static Regeneration)
    - 증분 정적 사이트를 재생성한다
    - 재생성한다: (특정 주기로) 데이터를 가져와서 다시 그려둔다
    - 증분 정적 사이트를 재생성한다: (특정 주기로) 정적인 사이트를 데이 터를 가져와서 다시 그려둔다
    - 새로 고침시 terminal에 "--- server"문구가 revalidate로 설정한 만큼 반복 된다.
    - ISR을 담당하는 함수 getStaticProps with revalidate
*/
export async function getStaticProps() {
  console.log('--- server')
  return {
    //⭐️ step-1
    props: { time: new Date().toISOString() },
    revalidate: 1,
  }
}

export default function ISR({ time }) {
  return (
    <>
      <h1 className="title">{time}</h1>
      <label>isr 예시 페이지 입니다.</label>
    </>
  )
}

// ISR.getLayout = function getLayout(page) {
//   return (
//     <Layout>
//       <SubLayout>{page}</SubLayout>
//     </Layout>
//   );
// };
