import Head from 'next/head';

import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:url" content="https://shannone.controu.com" />
        <meta property="og:title" content="Shannone controu Web Portfolio" />
        <meta property="og:description" content="Discover more about Shannone's experiences and projects" />
        <meta property="og:image" content="https://shacode.fr/img/sha-code.jpeg" />
        <title>Shannone Controu</title>
        <link rel="icon" href="/favicon.ico" />
        <script async defer data-domain="shannone.controu.com" src="https://plausible.io/js/plausible.js" />
      </Head>
      <div className="bg-pink-100 text-textbase">
        <Component {...pageProps} />
      </div>
    </>
  )
};

export default MyApp
