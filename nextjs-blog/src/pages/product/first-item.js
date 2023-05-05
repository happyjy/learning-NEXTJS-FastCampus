import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'

export default function firstItem() {
  return (
    <>
      <h1>firstItem</h1>
    </>
  )
}

firstItem.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
