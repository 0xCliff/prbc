import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            defer
            src='https://kit.fontawesome.com/c27fefec8d.js'
            crossOrigin='anonymous'
          ></script>
        </Head>
        <body className='bg-light dark:bg-dark'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
