import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import { useRouter } from 'next/router'

// url -> http://localhost:3000/cart/2023/05/05
// url -> http://localhost:3000/cart <- ⭐️ 접속시 페이지에 접속하게 하려면 "/cart/[[...date]].js" 이렇게 파일을 만들어야 합니다.

export default function CartDateSlug() {
  const router = useRouter()
  const { date } = router.query

  return (
    <>
      <h1>Cart Date Slug</h1>
      <h1>{`router.query.data Object : ${JSON.stringify(date)}`}</h1>
    </>
  )
}

CartDateSlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
