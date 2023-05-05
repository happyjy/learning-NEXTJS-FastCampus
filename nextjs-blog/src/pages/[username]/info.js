import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'

// url -> http://localhost:3000/jyoon/info

export default function UsernameInfo() {
  return (
    <>
      <h1>UsernameInfo</h1>
    </>
  )
}

UsernameInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
