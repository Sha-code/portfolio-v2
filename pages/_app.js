import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

import Navigation from "../src/components/Navigation";


const MyApp = ({ Component, pageProps }) => (
  <div className="realative bg-principal bg-cover bg-center bg-no-repeat h-screen w-full md:flex text-textbase">
    <div className="md:w-1/5 md:mx-12 md:h-5/6 my-auto">
      <Navigation />
    </div>
    {/* <div className="md:w-3/5 md:my-auto md:h-4/6 w-11/12 h-2/3 mt-10 xs:mt-20 mx-auto"> */}
    <div className="md:w-3/5 md:my-auto md:h-5/6 w-11/12 h-2/3 mx-auto">
      <Component {...pageProps} />
    </div>
  </div>
)



export default MyApp
