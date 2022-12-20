/* eslint-disable @next/next/no-styled-jsx-in-document */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <style jsx global>{
          `#__next{ width: 100vw; height: 100vh;}`
        }</style>
      </body>
    </Html>
  )
}
