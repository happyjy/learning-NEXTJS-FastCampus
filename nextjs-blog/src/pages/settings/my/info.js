import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'

// url -> http://localhost:3000/settings/my/info

export default function MyInfo() {
  return (
    <>
      <h1>My Info</h1>
    </>
  )
}

MyInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
