import { AppProps } from 'next/app';
import '@/styles/globals.css';
import '@/styles/colors.css';
import Layout from '@/components/layout/Layout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800, // Animation duration (in milliseconds)
      offset: 200, // Offset (in pixels) after the element appears
    });
  }, []);
  const AnyComponent = Component as any;
  return (
    <Layout>
    <AnyComponent {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
