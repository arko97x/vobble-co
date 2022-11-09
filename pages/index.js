import Head from "next/head"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { useRouter } from "next/router"

export default function Home() {
  const router = useRouter()
  const uid = router.query.uid

  return (
    <div className="w-screen h-screen flex flex-col" style={{ fontFamily: "'Quicksand', sans-serif" }}>
      <Head>
        <title>Vobble Home Page</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Home Page" />
        <meta property="og:site_name" content="Vobble" />
        <meta property="og:url" content="https://vobble.co/" />
        <meta property="og:description" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://vobble.co/og-image.png?v=2" />
      </Head>

      <Navbar />

      <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-8 md:space-y-0 items-center bg-[#6667AB] px-8 md:px-8 lg:px-24 pt-28 pb-2">
        <div className="w-full md:w-1/2 rounded-lg wrap">
          <img id="heroImg" className=" circle w-full rounded-lg object-cover" src="/hero1.jpeg" alt="" />
        </div>
        <div className="flex flex-col space-y-8 w-full md:w-1/2">
          <div className="text-4xl sm:text-6xl font-bold text-white" style={{ fontFamily: "'Gochi Hand', cursive" }}>Listen and Imagine with Joy!</div>
          <div className="text-xl font-regular text-white/50">Together, let&apos;s ride sound waves through the exciting, adventurous and hilarious world of <span><img className="inline h-6" src="/vobble-inline-white.png" /></span>&nbsp;!</div>
        </div>
      </div>
      <div className=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6667AB" fillOpacity="1" d="M0,288L80,272C160,256,320,224,480,218.7C640,213,800,235,960,234.7C1120,235,1280,213,1360,202.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg></div>
      <div className="text-center m-auto px-8 pt-20 text-xl font-bold" id="pulsatingText">
        vobble&apos;s currently being built. pls visit back soon!
      </div>

      <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6667AB" fillOpacity="1" d="M0,288L80,272C160,256,320,224,480,218.7C640,213,800,235,960,234.7C1120,235,1280,213,1360,202.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg></div>
      <Footer />
    </div >
  )
}
