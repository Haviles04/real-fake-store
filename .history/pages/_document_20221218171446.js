import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        // eslint-disable-next-line @next/next/no-styled-jsx-in-document
        <style jsx global>{
          `#__next{ width: 100vw;}`
        }</style>
      </body>
    </Html>
  )
}
