import Head from "next/head"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function LandingPageAsOf25July2022() {
    return (
        <div className="w-screen h-screen flex flex-col" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            <Head>
                <title>vobble — landing page as of 25 July, 2022</title>
                <meta name="description" content="vobble — the joy of listening" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <div className="px-8 py-8 sm:py-16 flex flex-col sm:flex-row items-center bg-yellow-300">
                <div className="w-full sm:w-1/2 sm:h-[75vh] h-[62vh] wrap">
                    <div className="circle sm:w-[32vw] sm:h-[64vh]">
                        <img src='/hero1-base.png' alt='' />
                    </div>
                </div>
                <div className="w-full sm:w-1/2 flex flex-col space-y-4 sm:space-y-8">
                    <div className="text-4xl sm:text-6xl font-bold text-black" style={{ fontFamily: "'Gochi Hand', cursive" }}>listening — made fun again!</div>
                    <div className="text-xl font-normal">vobble is designed to enhance the joy of listening for your child.</div>
                    <button className="text-xl py-6 px-8 w-full sm:w-fit text-white bg-baseColor hover:bg-accentColor rounded-xl">
                        Try vobble for free!
                    </button>
                </div>
            </div>

            <div className="bg-white h-48">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E9F6FF" fillOpacity="1" d="M0,128L34.3,112C68.6,96,137,64,206,90.7C274.3,117,343,203,411,202.7C480,203,549,117,617,80C685.7,43,754,53,823,85.3C891.4,117,960,171,1029,160C1097.1,149,1166,75,1234,64C1302.9,53,1371,107,1406,133.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
            </div>

            <Footer />
        </div >
    )
}
