import { Html, Head, Main, NextScript } from 'next/document'

function Document() {
  return (
    <Html className="scrollbar scroll-pt-16 overflow-x-hidden scroll-smooth">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
