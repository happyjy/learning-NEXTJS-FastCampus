import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  console.info('🔴 _app.js');
  // console.log('Component: ', Component);
  // console.log('pageProps: ', pageProps);
  return <Component {...pageProps} />;
}
