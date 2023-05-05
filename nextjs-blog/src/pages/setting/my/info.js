import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'

export default function MyINfo() {
  return (
    <>
      <h1>My Info</h1>
    </>
  )
}

MyINfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
