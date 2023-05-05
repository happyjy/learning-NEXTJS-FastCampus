import Link from 'next/link'

export default function SubLayout({ children }) {
  return (
    <div className="SUBLAYOUT">
      <Link href="/">Home 으로</Link>
      {children}
    </div>
  )
}
