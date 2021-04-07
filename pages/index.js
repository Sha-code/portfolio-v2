
export default function Home() {
  return (
    <div className="relative bg-gray-50 bg-opacity-20 p-5 md:p-10 rounded-xl h-full shadow-sm">
      <div className="md:mt-48 md:w-2/5 mt-32 bg-gray-50 bg-opacity-20 p-6 rounded-xl shadow-xl w-4/5 mx-auto">
        <h1 className="text-3xl py-2 mt-5 text-center">Shannone Controu</h1>
        <h2 className="text-2xl py-2 mb-5 text-center text-textdark">Web Developer</h2>
      </div>
      <div className="absolute bg-gray-50 bg-opacity-20 p-6 rounded-xl top-96 right-7 md:top-32 md:right-32 text-2xl animate-float text-textdark">Front-end</div>
      <div className="absolute bg-gray-50 bg-opacity-20 p-6 rounded-xl -bottom-4 -left-3 md:bottom-24 md:left-24 text-2xl animate-floatFast text-textdark">Reactjs</div>
      <div className="absolute bg-gray-50 bg-opacity-20 p-6 rounded-xl -left-3 -top-2 md:-left-7 text-2xl animate-floatSlow text-textdark">Nextjs</div>
      <div className="absolute bg-gray-50 bg-opacity-20 p-3 rounded-xl shadow-2xl -bottom-6 -right-2 md:bottom-12 md:-right-7 text-lg animate-floatFast">Organized</div>
      <div className="absolute bg-gray-50 bg-opacity-20 p-3 rounded-xl shadow-2xl top-16 left-32 md:top-18 md:left-56 text-lg animate-float">Autonomous</div>
      <div className="absolute bg-gray-50 bg-opacity-20 p-3 rounded-xl shadow-2xl -top-8 -right-2 md:-top-2 md:-right-3 text-lg animate-floatSlow">Pedagogical</div>
    </div>
  )
}
