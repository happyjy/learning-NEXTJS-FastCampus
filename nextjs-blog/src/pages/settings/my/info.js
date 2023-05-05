import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import { useRouter } from 'next/router'
import { useState } from 'react'

// url -> http://localhost:3000/settings/my/info

export async function getServerSideProps() {
  console.log('###server###')

  return {
    props: {},
  }
}

export default function MyInfo() {
  const router = useRouter()
  const [clicked, setClicked] = useState(false)
  const { status = 'initial' } = router.query
  return (
    <>
      <h1 className="title">My Info</h1>
      <h1 className="title">Clicked: {String(clicked)}</h1>
      <h1 className="title">Status: {status}</h1>

      {/* edit(replace) */}
      {/*  
        - rerender 여부: O
          - button click시 알수 있는 방법: clicked가 true 였다가 rerender되면서 false로 변경된다.
        - server 호출 여부: O
          - getServerSideProps() 함수에 '###server###' 이 로그가 terminal에 찍힌다.
      */}
      <button
        onClick={() => {
          alert('edit')
          setClicked(true)
          location.replace('/settings/my/info?status=editing')
        }}
      >
        edit(replace)
      </button>
      <br />

      {/* edit(push) */}
      {/*  
        - rerender 여부: X
          - button click시 알수 있는 방법: clicked가 true로 변경되고 유지 된다.
        - server 호출 여부: O
          - getServerSideProps() 함수에 '###server###' 이 로그가 terminal에 찍힌다.
      */}
      <button
        onClick={() => {
          alert('edit')
          setClicked(true)
          router.push('/settings/my/info?status=editing')
        }}
      >
        edit(push)
      </button>
      <br />

      {/* edit(shallow) */}
      {/* 
        - rerender 여부: X
          - button click시 알수 있는 방법: clicked가 true로 변경되고 유지 된다.
        - server 호출 여부: O
          - getServerSideProps() 함수에 '###server###' 이 로그가 terminal에 찍힌다.
      */}
      <button
        onClick={() => {
          alert('edit')
          setClicked(true)
          router.push('/settings/my/info?status=editing', undefined, {
            shallow: true,
          })
        }}
      >
        edit(shallow)
      </button>
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
