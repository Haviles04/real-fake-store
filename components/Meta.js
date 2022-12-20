import Head from "next/head";

function Meta({title, descript}) {
  return (
    <Head>
    <title>{title}</title>
    <meta name="description" content={descript} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/logo.png" />
  </Head>
  )
}

export default Meta