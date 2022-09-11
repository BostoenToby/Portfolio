//@ts-ignore
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/smj0alx.css"/>
          <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=optional"
          rel="stylesheet"
          />
          <meta name="description" content="This is the portfolio of Toby Bostoen"/>
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" media="(prefers-color-scheme: light)" content="#FFFAFB"/>
          <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#131515"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument