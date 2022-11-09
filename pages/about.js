import Head from "next/head"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function About() {
    return (
        <div className="w-screen h-screen flex flex-col" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            <Head>
                <title>About vobble</title>
                <meta name="description" content="About vobble" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <div className="px-8 py-32 flex flex-col space-y-8 items-center bg-yellow-300">
                <div className="w-full sm:w-1/2 text-justify">
                    <div className="text-4xl sm:text-6xl font-bold text-black" style={{ fontFamily: "'Gochi Hand', cursive" }}>listening — made fun again!</div>
                </div>
                <div className="w-full sm:w-1/2 flex flex-col space-y-4 sm:space-y-8">
                    <div className="text-xl font-normal">vobble is a screen-free edutainment offering for children aged 2-8 years. It is an on-demand audio platform designed to enhance the joy of listening for your child.</div>
                </div>
            </div>
            <div className="bg-white h-48">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fde047" fillOpacity="1" d="M0,96L60,101.3C120,107,240,117,360,133.3C480,149,600,171,720,176C840,181,960,171,1080,165.3C1200,160,1320,160,1380,160L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
            </div>

            <div className="text-4xl sm:text-6xl font-bold text-accentColor p-8 w-full text-center" style={{ fontFamily: "'Gochi Hand', cursive" }}>Meet the vobblers</div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 text-center">
                <div className="px-8 py-8 sm:py-16 flex flex-col space-y-8 items-center bg-white w-full sm:w-1/2">
                    <div className="w-full sm:w-1/2 wrap">
                        <div className="circle">
                            <img src='/neha.jpg' alt='' />
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 flex flex-col space-y-4">
                        <div className="text-2xl font-bold text-black" style={{ fontFamily: "'Gochi Hand', cursive" }}>Neha Sharma</div>
                        <div className="text-md font-light text-justify">blah blahblahblah blah blah blahblah blahblahblah blah blah. blah blahblah blah blahblah blahblahblah blah blah. blahblah blah blahblah blah blah blah blah blah blah.</div>
                        <svg className="h-8 w-8 block mx-auto text-accentColor" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
                    </div>
                </div>
                <div className="px-8 py-8 sm:py-16 flex flex-col space-y-8 items-center bg-white w-full sm:w-1/2">
                    <div className="w-full sm:w-1/2 wrap">
                        <div className="circle">
                            <img src='/sowmya.jpg' alt='' />
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 flex flex-col space-y-4">
                        <div className="text-2xl font-bold text-black" style={{ fontFamily: "'Gochi Hand', cursive" }}>Sowmya Jagannath</div>
                        <div className="text-md font-light text-justify">blah blahblahblah blah blah blahblah blahblahblah blah blah. blah blahblah blah blahblah blahblahblah blah blah. blahblah blah blahblah blah blah blah blah blah blah.</div>
                        <svg className="h-8 w-8 block mx-auto text-accentColor" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
                    </div>
                </div>
            </div>

            <div className="bg-white h-48">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#E9F6FF" fillOpacity="1" d="M0,128L34.3,112C68.6,96,137,64,206,90.7C274.3,117,343,203,411,202.7C480,203,549,117,617,80C685.7,43,754,53,823,85.3C891.4,117,960,171,1029,160C1097.1,149,1166,75,1234,64C1302.9,53,1371,107,1406,133.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg>
            </div>
            <Footer />
        </div>
    )
}