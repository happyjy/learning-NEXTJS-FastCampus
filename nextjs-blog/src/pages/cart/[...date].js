import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'

// url -> http://localhost:3000/cart/2023/05/05

export default function CartDateSlug() {
  return (
    <>
      <h1>CartDateSlug</h1>
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
