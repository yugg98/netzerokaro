import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.jpg"></link>
          <meta name="theme-color" content="#fff" />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
