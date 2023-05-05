import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

// url -> http://localhost:3000/jyoon/info
// url -> http://localhost:3000/jyoon/info?isMultiSlug=ture
// url -> http://localhost:3000/jyoon/info?isMultiSlug=ture&uid=9999

export default function UsernameInfo() {
  const router = useRouter()
  const { username, info, uid } = router.query

  const [name, setName] = useState('?')

  useEffect(() => {
    fetch(`/api/user-info/${uid}`)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log('data: ', data)
        setName(data.name)
      })
  }, [uid])

  // useEffect(() => {
  //   fetch('/api/user')
  //     .then((res) => {
  //       console.log('res: ', res)
  //       return res.json()
  //     })
  //     .then((data) => {
  //       console.log('data: ', data)
  //       setName(data.name)
  //     })
  // }, [])

  return (
    <>
      <h1>UsernameInfo</h1>
      <h1>
        {username}, {info}
      </h1>
      <h1>{`router.query Object : ${JSON.stringify(router.query)}`}</h1>
      <h2>from api(name): {name}</h2>
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
