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
    <div className="realative bg-principal bg-cover bg-center bg-no-repeat h-screen w-full xl:flex text-textbase">
      <div className="xl:w-1/5 xl:mx-12 xl:h-5/6 my-auto">
        <Navigation />
      </div>
      {/* <div className="w-11/12 h-2/3 mx-auto mt-5 xs:mt-14 xl:w-3/5 xl:my-auto xl:h-5/6"> */}
      <div className="w-11/12 h-2/3 mt-8 md:mt-20 lg:mt-32 mx-auto xl:my-auto xl:w-3/5 lg:h-4/6 xl:h-5/6">
        <Component {...pageProps} />
      </div>
    </div>
  </>
);

export default MyApp
