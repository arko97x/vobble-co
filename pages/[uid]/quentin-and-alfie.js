import Head from "next/head"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import AudioPlayer from "../../components/audioPlayer"
import { useState, useEffect } from "react"
import Papa from "papaparse"
import AllowedUIDs from "../../allowed-uid"
import ReactLoading from "react-loading"
import { useRouter } from "next/router"

export default function QuentinAndAlfie() {
    const [data, setData] = useState({})
    var epNumber = []
    var epTitle = []
    var epDesc = []
    var epLink = []
    var epReleaseDate = []
    var seriesTitle = ""
    var seriesDesc = ""
    var availableEpisodes = 0
    var upcomingEpisodes = 0

    useEffect(() => {
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vSwSeFHKZimM6M44eK3zz8KNr9KhUj152tu7K5UVrg_XqKo5o2apqynv0YRdprN6CtZ3MgPuCAX34zw/pub?output=csv", {
            download: true,
            header: true,
            complete: (results) => {
                setData(results.data);
            },
        })
    }, [])

    for (var i = 1; i < data.length; i++) {
        epNumber[i] = data[i].number
        epTitle[i] = data[i].title
        epDesc[i] = data[i].description
        epLink[i] = data[i].link
        epReleaseDate[i] = data[i].releaseDate
        seriesTitle = data[0].title
        seriesDesc = data[0].description
        if (data[i].releaseDate == "-") {
            availableEpisodes++
        } else { upcomingEpisodes++ }
    }

    var allowed = ""
    allowed = AllowedUIDs()
    const router = useRouter()
    const uid = router.query.uid
    var loaderPurple = <ReactLoading type={'spin'} color={'#6667AB'} height={'24px'} width={'24px'} />
    var loaderYellow = <ReactLoading type={'spin'} color={'#FBD065'} height={'24px'} width={'24px'} />

    return (
        <div className="w-screen h-screen flex flex-col" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            <Head>
                <title>Quentin and Alfie&apos;s ABC Adventure - {uid}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Quentin and Alfie's ABC Adventure" />
                <meta property="og:site_name" content="Vobble" />
                <meta property="og:url" content={'https://vobble.co/' + uid + '/quentin-and-alfie'} />
                <meta property="og:description" content="" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://vobble.co/og-image.png?v=2" />
            </Head>

            <Navbar />

            {
                allowed == "" ?
                    <div className="p-24 m-auto">{loaderPurple}</div> :
                    (
                        allowed ?
                            <div className="px-8 md:px-8 lg:px-24 py-24">
                                <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-8 md:space-y-0">
                                    <div className="w-full h-fit md:w-1/2 p-4 bg-[#FFB100] flex flex-col space-y-4 rounded-lg">
                                        <img className="rounded-lg" src="/quentinAndAlfie_sABCAdventures.jpeg" />
                                        {
                                            seriesTitle == "" || seriesDesc == "" ?
                                                loaderYellow :
                                                <>
                                                    <div className="text-2xl sm:text-4xl font-bold text-black" style={{ fontFamily: "'Gochi Hand', cursive" }}>{seriesTitle}</div>
                                                    <div className="text-lg font-regular text-black">{seriesDesc}</div>
                                                </>
                                        }
                                    </div>

                                    <div className="flex flex-col space-y-4 w-full md:w-1/2">
                                        <div className="w-full h-fit p-4 border border-gray-400 flex flex-col space-y-4 rounded-lg">
                                            <div className="flex flex-row justify-between items-center">
                                                <div className="text-2xl sm:text-4xl font-bold text-[#6667AB]" style={{ fontFamily: "'Gochi Hand', cursive" }}>Available Episodes</div>
                                                <div className="text-2xl sm:text-4xl font-bold text-[#6667AB]" style={{ fontFamily: "'Gochi Hand', cursive" }}>{availableEpisodes == 0 ? loaderPurple : availableEpisodes}</div>
                                            </div>
                                            <hr className="border-gray-400" />
                                            <div className="flex flex-col space-y-4">
                                                {Array.from(data).slice(1).map((i) => (
                                                    i.releaseDate == "-" &&
                                                    <div className="flex flex-row space-x-4 items-start p-2 sm:p-4 border border-gray-300 rounded-lg">
                                                        <div className="text-xl font-bold text-black" style={{ fontFamily: "'Gochi Hand', cursive" }}>{i.number}</div>
                                                        <div className="flex flex-col space-y-2 w-full">
                                                            <div className="text-xl font-bold text-black" style={{ fontFamily: "'Gochi Hand', cursive" }}>{i.title}</div>
                                                            {
                                                                i.description == "-" ?
                                                                    null :
                                                                    <div className="text-sm font-regular text-gray-600">{i.description}</div>
                                                            }
                                                            <div className="relative">
                                                                <AudioPlayer url={i.link} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="w-full h-fit p-4 border border-gray-400 border-dashed flex flex-col space-y-4 rounded-lg pointer-events-none opacity-70">
                                            <div className="flex flex-row justify-between items-center">
                                                <div className="text-2xl sm:text-4xl font-bold text-[#6667AB]" style={{ fontFamily: "'Gochi Hand', cursive" }}>Upcoming Episodes</div>
                                                <div className="text-2xl sm:text-4xl font-bold text-[#6667AB]" style={{ fontFamily: "'Gochi Hand', cursive" }}>{upcomingEpisodes == 0 ? loaderPurple : upcomingEpisodes}</div>
                                            </div>
                                            <hr className="border-gray-400" />
                                            <div className="flex flex-col space-y-4">
                                                {Array.from(data).slice(1).map((i) => (
                                                    i.releaseDate !== "-" &&
                                                    <div className="flex flex-row space-x-4 items-start p-2 sm:p-4 border border-gray-300 rounded-lg">
                                                        <div className="text-xl font-bold text-black" style={{ fontFamily: "'Gochi Hand', cursive" }}>{i.number}</div>
                                                        <div className="flex flex-col space-y-2 w-full">
                                                            {
                                                                i.title == "-" ?
                                                                    null :
                                                                    <div className="text-xl font-bold text-black" style={{ fontFamily: "'Gochi Hand', cursive" }}>{i.title}</div>
                                                            }
                                                            {
                                                                i.description == "-" ?
                                                                    null :
                                                                    <div className="text-sm font-regular text-gray-600">{i.description}</div>
                                                            }
                                                            <div className="text-xs text-white py-1 px-4 bg-[#00A7B7] w-fit rounded-full">Releasing <span className="text-white">{i.releaseDate}</span></div>
                                                            {
                                                                i.link == "-" ?
                                                                    null :
                                                                    <div className="relative">
                                                                        <AudioPlayer url={i.link} />
                                                                    </div>
                                                            }
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> :
                            null
                    )
            }

            <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6667AB" fillOpacity="1" d="M0,288L80,272C160,256,320,224,480,218.7C640,213,800,235,960,234.7C1120,235,1280,213,1360,202.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg></div>
            <Footer />
        </div>
    )
}