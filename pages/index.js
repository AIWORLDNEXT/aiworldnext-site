// pages/_app.js
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* QUICK TEMP FIX: Tailwind Play CDN (no build step) */}
        <script src="https://cdn.tailwindcss.com"></script>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
