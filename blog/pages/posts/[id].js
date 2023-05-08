import Layout from '../components/Layout';
import Head from 'next/head';
import { getAllPostIds, getPostData } from '../../lib/posts';

// http://localhost:3000/posts/ssg-ssr
// http://localhost:3000/posts/pre-rendering

// http://localhost:3000/posts/first-post
// http://localhost:3000/posts/second-post

export async function getStaticPaths() {
  const paths = getAllPostIds();
  console.log('--- getStaticPaths > paths: ', paths);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  console.log('--- getStaticProps > postData: ', postData);
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  console.log('--- [id].js > postData: ', postData);
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </Layout>
  );
}
