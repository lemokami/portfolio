import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='preload' href='/fonts/Komoda.woff2' as='font' />
          <link rel='preload' href='/fonts/RobotoSlab.woff' as='font' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
