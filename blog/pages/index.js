import Head from 'next/head';
import { useEffect, useState } from 'react';
import Layout, { siteTitle } from './components/Layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
// import { getSortedPostsData } from '../lib/posts';

/* SSG 구현 */
// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   console.log('allPostsData: ', allPostsData);
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

/* SSR 구현 */
// export async function getServerSideProps() {
//   const allPostsData = getSortedPostsData();
//   console.log('getServerSideProps > allPostsData: ', allPostsData);
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

export default function Home(/* { allPostsData } */) {
  console.info('🔴 index.js');
  const [allPostsData, setAllPostsData] = useState([]);

  useEffect(() => {
    fetch('/api/posts')
      .then((res) => res.json())
      .then((data) => {
        console.log('data.PostsData: ', data.allPostsData);
        setAllPostsData(data.allPostsData);
      });
  }, []);

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I love coding ♡</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <p>
          <Link href="/posts/first-post">첫번째글</Link>
        </p>
      </section>

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData?.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
