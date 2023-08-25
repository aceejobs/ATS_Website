import { AppProps } from 'next/app';
import Head from 'next/head';

import '@/styles/globals.css';
// !STARTERCONF This is for demo purposes, remove @/styles/colors.css import immediately
import '@/styles/colors.css';
import Layout from '@/components/layout/Layout';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Head>
        <link rel='shortcut icon' href='/assets/svg/logo.svg' />
      </Head> */}
 <Layout>
      
      <Component {...pageProps} />
  </Layout>

    </>
  );
}

export default MyApp;


