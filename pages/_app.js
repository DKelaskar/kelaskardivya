import Head from 'next/head'

import '../styles/base.css'

function MyApp({ Component, pageProps }) {
  const og = pageProps.data?.og
  const title = pageProps.data?.title

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta property="og:title" content={title || `Divya, learns & codes`} />
        <meta property="og:site_name" content="Divya, learns & codes" />
        <meta property="og:description" content={og ? og.description : `Writing about the tips, journey that I come across and some more.`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@theavidcoder" />
        <meta property="og:image" content={og ? og.image : `https://drive.google.com/open?id=1nAJYK2fyiA67cEYhgPQbq9eAT6pLpcbc`} />

        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

        <title>{title || `Divya, learns & codes`}</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp

