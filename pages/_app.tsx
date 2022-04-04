import { Layout } from "../components"
import '../styles/globals.scss';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { AppProps } from "next/app";
config.autoAddCss = false

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp
