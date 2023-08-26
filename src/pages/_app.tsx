import { AppProps } from 'next/app';
import '@/styles/globals.css';
import '@/styles/colors.css';
import Layout from '@/components/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <Layout>
    <AnyComponent {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
