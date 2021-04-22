import Head from 'next/head';

import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

import Navigation from "../src/components/Navigation";


const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Shannone Controu</title>
      <link rel="icon" href="/favicon.ico" />
      <script async defer data-domain="shannone.controu.com" src="https://plausible.io/js/plausible.js" />
    </Head>
    <div className="realative bg-principal bg-cover bg-center bg-no-repeat h-screen w-full md:flex text-textbase">
      <div className="md:w-1/5 md:mx-12 md:h-5/6 my-auto">
        <Navigation />
      </div>
      {/* <div className="md:w-3/5 md:my-auto md:h-4/6 w-11/12 h-2/3 mt-10 xs:mt-20 mx-auto"> */}
      <div className="w-11/12 h-2/3 mx-auto mt-5 xs:mt-14 md:w-3/5 md:my-auto md:h-5/6">
        <Component {...pageProps} />
      </div>
    </div>
  </>
);

export default MyApp
