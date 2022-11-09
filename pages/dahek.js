import DahekEmailCollection from "../components/dahekemailcollection"
// import DahekNavbar from "../components/daheknavbar"
import RadNavbar from '../components/radnavbar'
import VButton from "../components/vButton"
import NewFooter from "../components/newfooter"
import { useState } from "react"

export default function Dahek() {
    const testimBoldArray = ["Kids happily lapped up the content without complaining about the lack of visuals!", "Her eyes lit up when the story came over the speakers!", "Our morning ride to school have become vobble rides and stories!"]
    const testimBodyArray = ["Vobble has been a very refreshing addition to my boys’ entertainment options. It has not only improved their attention span but also perked up their curiosity and creativity! My boys were actually sad that the pilot ended and are eagerly waiting for more episodes!", "I'm so thrilled to see something my kid can use by herself to stay engaged! Look forward to more and more interesting story series from Vobble - this is one entertainment I won't have to put a stop time to!", "Vobble brings the best of both the worlds story telling and imaginative thinking for kids. Totally Loving it and waiting for more to come!!"]
    const testimNameArray = ["Dr. Rubina Shanawaz", "Akanksha Thakore", "Japnit Kaur"]
    const testimDesignationArray = ["Uro-gynaecologist | Mother to 7yr old Namir & 9yr old Arfaan", "Consultant | Mother to 7yr old Zara", "Head SMB Marketing, Amazon | Mother to 3yr old Myra"]
    const testimImageArray = ["/testim1.png", "/testim2.png", "/testim3.png"]

    const [current, setCurrent] = useState(0)
    const [testimBold, settestimBold] = useState(testimBoldArray[current])
    const [testimBody, settestimBody] = useState(testimBodyArray[current])
    const [testimName, settestimName] = useState(testimNameArray[current])
    const [testimDesignation, settestimDesignation] = useState(testimDesignationArray[current])
    const [testimImage, settestimImage] = useState(testimImageArray[current])

    function carouselPrev() {
        // if (current == testimBoldArray.length - 1) {
        //     current = current - 1
        // } else if (current == 0) {
        //     current = testimBoldArray.length - 1
        // } else {
        //     current--
        // }
        console.log("before click: ", current)
        if (current == 0) {
            setCurrent(2)
        } else if (current > 0) {
            setCurrent(current--)
        }
        console.log("after click: ", current)

        settestimBold(testimBoldArray[current])
        settestimBody(testimBodyArray[current])
        settestimName(testimNameArray[current])
        settestimDesignation(testimDesignationArray[current])
        settestimImage(testimImageArray[current])
    }

    function carouselNext() {
        // if (current == testimBoldArray.length - 1) {
        //     current = 0
        // } else if (current == 0) {
        //     current = current + 1
        // } else {
        //     current++
        // }
        if (current == 2) {
            setCurrent(0)
        } else if (current < 2) {
            setCurrent(current++)
        }

        settestimBold(testimBoldArray[current])
        settestimBody(testimBodyArray[current])
        settestimName(testimNameArray[current])
        settestimDesignation(testimDesignationArray[current])
        settestimImage(testimImageArray[current])
    }

    return (
        <div className="w-screen flex flex-col">
            {/* <DahekNavbar /> */}
            <RadNavbar />

            <img className="h-16 sm:h-24 left-[18rem] sm:left-[29rem] top-[10rem] sm:top-[8rem] absolute -z-10 vertmove1" src="/yellowBlob-50.svg" alt="" />
            <img className="sm:h-40 -left-8 sm:-left-12 top-16 sm:top-36 absolute -z-10 vertmove1" src="/yellowBlob-50.svg" alt="" />
            <img className="sm:h-20 left-24 sm:left-32 top-8 sm:top-16 absolute -z-10 vertmove2" src="/purpleBlob-50.svg" alt="" />
            <img className="h-14 left-[14rem] sm:left-[22rem] top-48 sm:top-[22rem] absolute -z-10 vertmove2" src="/tealBlob-50.svg" alt="" />

            <section id="section1" className="px-4 sm:px-16 md:px-12 pt-32 flex flex-col md:flex-row md:justify-between items-center space-y-16 md:space-y-0">
                <div className="w-full md:w-3/5 pr-0 md:pr-8 flex flex-col space-y-10 justify-between">
                    <p className="text-5xl sm:text-7xl font-bold tracking-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>TIRED OF <span className="text-vTeal">NEGOTIATING</span> <br className="md:block hidden" /> SCREEN TIME WITH YOUR CHILD?</p>
                    <p className="text-2xl sm:text-4xl">
                        Introducing&nbsp;&nbsp;
                        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-vTeal relative inline-block font-semibold">
                            <span className="relative text-white">Vobble</span>
                        </span>
                    </p>
                    <p className="text-xl sm:text-2xl font-light lg:w-4/5">India&apos;s first <span className="font-semibold text-vPurple">multi-sensory</span> <span className="font-semibold text-vTeal">immersive</span> <span className="font-semibold text-vYellow">3D audio experience</span> that kids will choose over screens!</p>
                    <DahekEmailCollection />
                </div>
                <div className="w-full md:w-2/5 relative -mr-8 md:-mr-12">
                    <img className="w-[70%] object-contain block m-auto vertmove1 z-30" src="/hr1.png" alt="" />
                    <img className="h-32 sm:h-48 md:h-32 lg:h-48 top-[32%] lg:top-[34%] -left-[6%] md:-left-[14%] lg:-left-[9%] absolute vertmove2 z-20" src="/hr2.png" alt="" />
                    <img id="rotateACW" className="h-14 sm:h-20 md:h-14 lg:h-16 top-[64%] lg:top-[64%] right-[14%] lg:right-[16%] absolute vertmove1 -z-10" src="/hr3.png" alt="" />
                    <img className="h-24 sm:h-32 md:h-20 lg:h-28 -bottom-[16%] sm:-bottom-[14%] md:-bottom-[16%] lg:-bottom-[16%] right-[32%] lg:right-[32%] absolute vertmove1 -z-10" src="/hr4.png" alt="" />
                    <img className="h-28 sm:h-36 md:h-24 lg:h-28 top-[78%] lg:top-[78%] left-[2%] lg:left-[2%] absolute z-20" src="/hr5.png" alt="" />
                    <img className="h-7 sm:h-10 md:h-7 lg:h-10 top-[69%] lg:top-[69%] left-[2%] lg:left-[4%] absolute vertmove1 z-20" src="/hr6.png" alt="" />
                    <img className="h-7 sm:h-10 md:h-7 lg:h-10 top-[52%] lg:top-[52%] right-[12%] lg:right-[12%] absolute vertmove1 -z-10" src="/hr7.png" alt="" />
                    <img className="h-16 sm:h-28 md:h-16 lg:h-28 top-[0%] sm:top-[0%] md:top-[0%] lg:top-[1%] right-[8%] sm:right-[8%] md:right-[8%] lg:right-[8%] absolute vertmove2 -z-10" src="/hr8.png" alt="" />
                    <img className="h-24 sm:h-40 md:h-24 lg:h-28 -top-[10%] sm:-top-[8%] md:-top-[12%] lg:-top-[8%] left-[28%] sm:left-[28%] md:left-[26%] lg:left-[26%] absolute vertmove2 z-30" src="/hr10.png" alt="" />
                    <img id="rotateCW" className="h-28 sm:h-36 md:h-20 lg:h-28 top-[0%] lg:top-[4%] -left-[10%] sm:-left-[6%] lg:-left-[2%] absolute vertmove2 -z-10" src="/hr11.png" alt="" />
                </div>
            </section>

            <section id="section2" className="flex flex-col -z-20">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220" className="bg-[#E5E5E5]">
                    <path fill="#FFFFFF" fillOpacity="1" d="M0,160L40,165.3C80,171,160,181,240,181.3C320,181,400,171,480,160C560,149,640,139,720,149.3C800,160,880,192,960,202.7C1040,213,1120,203,1200,176C1280,149,1360,107,1400,85.3L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z">
                    </path>
                </svg>
                <div className="px-4 sm:px-16 md:px-12 bg-[#E5E5E5] flex flex-col md:h-[65vh]">
                    {/* <p className="text-5xl sm:text-7xl font-bold text-center tracking-tight pb-6" style={{ fontFamily: "'Oswald', sans-serif" }}>WHY AUDIO?</p> */}
                    <div className='flex flex-col md:flex-row space-x-0 md:space-x-2 space-y-2 md:space-y-0 items-center'>
                        <img className="w-4/5 md:w-4/5 h-[75%] object-contain" src="/whyAudio.png" alt="" />
                        <img className="w-4/5 md:w-4/5 h-[75%] object-contain" src="/whyNow.png" alt="" />
                    </div>
                </div>
            </section>

            <section id="section3" className="flex flex-col -z-30 relative">
                <img className="h-16 sm:h-24 left-[4rem] sm:left-[22rem] top-[9rem] sm:top-[15rem] absolute z-10 vertmove1" src="/yellowBlob-50.svg" alt="" />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220" className="bg-[#FFFFFF]">
                    <path fill="#E5E5E5" fillOpacity="1" d="M0,160L40,165.3C80,171,160,181,240,181.3C320,181,400,171,480,160C560,149,640,139,720,149.3C800,160,880,192,960,202.7C1040,213,1120,203,1200,176C1280,149,1360,107,1400,85.3L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z">
                    </path>
                </svg>
                <div className="px-4 sm:px-16 md:px-12 pt-16 bg-[#FFFFFF] flex flex-col space-y-2 sm:space-y-10 text-center">
                    <div className="flex flex-col space-y-0">
                        <p className="text-5xl sm:text-7xl font-bold z-20 tracking-tight text-vPurple" style={{ fontFamily: "'Oswald', sans-serif" }}>MEET VOBBLE!</p>
                        <p className='text-3xl font-light tracking-tighter'>Where Audio comes alive!</p>
                    </div>
                    <div className="px-4 sm:px-16 md:px-12 pt-16 bg-[#FFFFFF] flex flex-col-reverse md:flex-row space-x-0 md:space-x-2 space-y-8 md:space-y-0 items-center">
                        <div className="w-full md:w-1/2 pr-0 md:pr-8 md:text-left flex flex-col space-y-2">
                            <p className="text-xl sm:text-2xl text-vPurple"><span className="font-semibold">Immersive 3D Audio Content</span> designed for <span className="font-semibold">kids</span></p>
                            <p className="text-lg sm:text-xl font-light">Imagine watching your favourite show, but with your eyes closed! You can hear <span className="font-semibold">amazing music</span>, <span className="font-semibold">cool sound effects</span>, <span className="font-semibold">lovable characters</span>, and <span className="font-semibold">super engaging storytelling</span> by kids! It makes the imagination SOAR – and kids feel like they are in the story themselves!!</p>
                            <br /><br />
                            <p className="text-xl sm:text-2xl text-vPurple"><span className="font-semibold">Vobble Device</span> <span className="font-semibold">(The Vobb)</span></p>
                            <p className="text-lg sm:text-xl font-light">An independent device to store and deliver Vobble content. Autonomy and Ownership for kids, 100% Safe, No Internet, No Ads!</p>
                            <br /><br />
                            <p className="text-xl sm:text-2xl text-vPurple"><span className="font-semibold">Play n Play:</span> <span className="font-semibold">Do more than just listen!</span></p>
                            <p className="text-lg sm:text-xl font-light">Spark kids&apos; imagination with fun activities related to what they are listening to. Combining print and audio increases recall by 40% vs print alone.</p>
                        </div>
                        <video autoPlay muted playsInline loop className="w-full md:w-1/2 h-auto">
                            <source src="/testVid.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </section>

            <section id="section4" className="flex flex-col relative">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220" className="bg-[#E5E5E5]">
                    <path fill="#FFFFFF" fillOpacity="1" d="M0,160L40,165.3C80,171,160,181,240,181.3C320,181,400,171,480,160C560,149,640,139,720,149.3C800,160,880,192,960,202.7C1040,213,1120,203,1200,176C1280,149,1360,107,1400,85.3L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z">
                    </path>
                </svg>
                <div className="px-10 sm:px-16 md:px-24 pt-16 bg-[#E5E5E5] flex flex-col space-y-6 sm:space-y-10 text-center md:text-left">
                    <p className="text-5xl sm:text-7xl font-bold text-center tracking-tight text-vYellow" style={{ fontFamily: "'Oswald', sans-serif" }}>VOBBLERS&apos; VOICE</p>
                    <div className='flex md:flex-row flex-col space-y-4 md:space-y-0 items-center'>
                        <img src={testimImage} className="object-contain w-full md:w-1/2" alt="" />
                        <div className='flex flex-col space-y-4 w-full md:w-1/2 pl-0 md:pl-12'>
                            <p className="py-2 px-4 sm:px-2 md:px-2 text-lg sm:text-2xl font-bold text-gray-800">{testimBold}</p>
                            <p className="py-2 px-4 sm:px-2 md:px-2 text-lg sm:text-xl font-light text-gray-800">{testimBody}</p>
                            <div className='flex flex-col -space-y-1 px-4 sm:px-2'>
                                <p className='font-black'>{testimName}</p>
                                <p className='font-regular'>{testimDesignation}</p>
                            </div>
                            <div className="flex flex-row space-x-2 mx-auto md:mx-0 px-4 sm:px-2">
                                <div id="prev" className="cursor-pointer" onClick={carouselPrev}>
                                    <VButton
                                        buttonText={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>}
                                        buttonBgColor="#FFB100"
                                        buttonTextColor="black"
                                        buttonBorderColor="black"
                                    />
                                </div>
                                <div id="next" className="cursor-pointer" onClick={carouselNext}>
                                    <VButton
                                        buttonText={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>}
                                        buttonBgColor="#00A7B7"
                                        buttonTextColor="black"
                                        buttonBorderColor="black"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="section5" className="flex flex-col relative">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220" className="bg-[#FFFFFF]">
                    <path fill="#E5E5E5" fillOpacity="1" d="M0,160L40,165.3C80,171,160,181,240,181.3C320,181,400,171,480,160C560,149,640,139,720,149.3C800,160,880,192,960,202.7C1040,213,1120,203,1200,176C1280,149,1360,107,1400,85.3L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z">
                    </path>
                </svg>
                <div className='px-10 sm:px-16 md:px-24 pt-16'>
                    <div className='w-full border-2 border-[#E5E5E5] rounded-xl flex flex-col-reverse md:flex-row items-center'>
                        <div className='flex flex-col space-y-6 lg:space-y-12 p-4 w-full md:w-1/2 h-full justify-between'>
                            <p className="text-5xl sm:text-7xl font-bold z-20 tracking-tight text-vTeal" style={{ fontFamily: "'Oswald', sans-serif" }}>ABOUT US</p>
                            <p className='text-lg sm:text-xl font-light text-gray-800'>Two mommies who tried their very best to wean<br />their munchkins away from the addictive screen<br />Created Vobble,<br />To end the squabble,<br />And unleashing audio like never before &apos;seen&apos;</p>
                            <a href="https://vobble.co/ourjourney" className='min-h-[4.4rem] cursor-pointer'>
                                <VButton buttonText="Learn more about our journey" buttonBgColor="#00A7B7" buttonTextColor="white" buttonBorderColor="black" />
                            </a>
                        </div>
                        <div className='w-full md:w-1/2'>
                            <img className='w-full h-full p-4 rounded-xl object-contain' src='/aboutUs.jpeg' alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="footer" className="flex flex-col relative">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220" className="bg-[#6667AB]">
                    <path fill="#FFFFFF" fillOpacity="1" d="M0,160L40,165.3C80,171,160,181,240,181.3C320,181,400,171,480,160C560,149,640,139,720,149.3C800,160,880,192,960,202.7C1040,213,1120,203,1200,176C1280,149,1360,107,1400,85.3L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z">
                    </path>
                </svg>
                <NewFooter />
            </section>
        </div>
    )
}