import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel='preload'
            href='/fonts/Komoda.woff2'
            as='font'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='/fonts/RobotoSlab.woff'
            as='font'
            crossOrigin='anonymous'
          />
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
