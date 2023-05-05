import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'

// url -> http://localhost:3000/jyoon/infomation

export default function UsernameInfomation() {
  return (
    <>
      <h1>UsernameInfomation</h1>
    </>
  )
}

UsernameInfomation.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
