import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import { useRouter } from 'next/router'

// url -> http://localhost:3000/jyoon/info?isMultiSlug=ture

export default function UsernameInfo() {
  const router = useRouter()
  const { username, info } = router.query

  return (
    <>
      <h1>UsernameInfo</h1>
      <h1>
        {username}, {info}
      </h1>
      <h1>{`router.query Object : ${JSON.stringify(router.query)}`}</h1>
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
