import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {
  console.log('_app.js');
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  // console.log('--- getLayout: ', getLayout)
  // console.log('--- Component.getLayout: ', Component.getLayout)
  // console.log('--- pageProps: ', pageProps)
  // console.log('--- Component: ', Component)

  return getLayout(<Component {...pageProps} />);
}
