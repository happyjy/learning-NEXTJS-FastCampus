import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import SubLayout from '../components/SubLayout'

/* 
  ⭐️point: CSR(Client Side Render) 설명
    - 이페이지를 확인하려면 "http://localhost:3000/CSR" 여기로 접속해야 합니다. 
    - 클라이언트가 그린다
    - 그린다: 데이터를 가져와서 그린다
    - 클라이언트가 그린다: 클라이언트가 데이터를 가져와서 그린다
    - CSR을 담당하는 함수 따로 없음
    - 기존 React 사용법과 동일
*/

export default function CSR() {
  const [time, setTime] = useState()

  useEffect(() => {
    console.log('client')
    setTime(new Date().toISOString())
  }, [])

  return (
    <>
      <h1 className="title">{time}</h1>
      <label>csr 예시 페이지 입니다.</label>
    </>
  )
}

CSR.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
