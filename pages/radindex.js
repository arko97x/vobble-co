import RadNavbar from '../components/radnavbar'
import EmailCollection from '../components/emailcollection'
import NewFooter from '../components/newfooter'
import Head from 'next/head'
import Script from 'next/script'

export default function RadIndex() {
    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop > 120) {
                document.getElementById('radnavbar').style.backgroundColor = '#6667AB'
                document.getElementById('radnavbar-m').style.backgroundColor = '#6667AB'
                document.getElementById('radlogo').setAttribute('src', 'logo1-white.png')
                document.getElementById('radlogo-m').setAttribute('src', 'logo1-white.png')
                document.getElementById('radnavcontent').style.color = '#FFFFFF'
                document.getElementById('radnavbutton').style.color = '#6667AB'
                document.getElementById('radnavbutton').style.backgroundColor = '#FFFFFF'
                document.getElementById('radnavbutton-m').style.color = '#6667AB'
                document.getElementById('radnavbutton-m').style.backgroundColor = '#FFFFFF'
            } else {
                document.getElementById('radnavbar').style.backgroundColor = '#FFFFFF'
                document.getElementById('radnavbar-m').style.backgroundColor = '#FFFFFF'
                document.getElementById('radlogo').setAttribute('src', 'logo1-base.png')
                document.getElementById('radlogo-m').setAttribute('src', 'logo1-base.png')
                document.getElementById('radnavcontent').style.color = '#000000'
                document.getElementById('radnavbutton').style.color = '#FFFFFF'
                document.getElementById('radnavbutton').style.backgroundColor = '#6667AB'
                document.getElementById('radnavbutton-m').style.color = '#FFFFFF'
                document.getElementById('radnavbutton-m').style.backgroundColor = '#6667AB'
            }
        })
    }

    return (
        <div id='radindex' className="w-screen h-screen flex flex-col" style={{ fontFamily: "'Karla', sans-serif" }}>
            <RadNavbar />

            <img className="h-16 sm:h-24 left-[18rem] sm:left-[29rem] top-[10rem] sm:top-[8rem] absolute -z-10 vertmove1" src="/yellowBlob-50.svg" alt="" />
            <img className="sm:h-40 -left-8 sm:-left-12 top-16 sm:top-36 absolute -z-10 vertmove1" src="/yellowBlob-50.svg" alt="" />
            <img className="sm:h-20 left-24 sm:left-32 top-8 sm:top-16 absolute -z-10 vertmove2" src="/purpleBlob-50.svg" alt="" />
            <img className="h-14 left-[14rem] sm:left-[22rem] top-48 sm:top-[22rem] absolute -z-10 vertmove2" src="/tealBlob-50.svg" alt="" />

            {/* Hero section */}
            <section id='section1' className='px-4 sm:px-16 md:px-12 pt-20 sm:pt-24 flex flex-col md:flex-row md:justify-between items-center space-y-8 md:space-y-0 relative'>
                <img className="h-14 left-[6rem] sm:left-[12rem] top-[40rem] sm:top-[42rem] absolute -z-10 vertmove2" src="/yellowBlob-50.svg" alt="" />
                <div className='w-full md:w-1/2 pr-0 md:pr-2 flex flex-col space-y-14 sm:space-y-12 justify-between relative'>
                    <img className="h-16 sm:h-24 left-[18rem] sm:left-[29rem] top-[26rem] sm:top-[22rem] absolute -z-10 vertmove2" src="/yellowBlob-50.svg" alt="" />
                    <div className='text-5xl sm:text-7xl font-bold tracking-tight' style={{ fontFamily: "'Oswald', sans-serif" }}>TIRED OF <span className='text-[#00A7B7]'>NEGOTIATING</span> SCREEN TIME WITH YOUR CHILD?</div>
                    <div className='text-xl sm:text-2xl'>
                        Introducing&nbsp;&nbsp;
                        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#00A7B7] relative inline-block font-semibold">
                            <span className="relative text-white">Vobble</span>
                        </span>
                    </div>
                    <div className='text-lg sm:text-xl font-light'>India&apos;s first <span className='font-semibold text-[#6667AB]'>multi-sensory</span> <span className='font-semibold text-[#00A7B7]'>immersive</span> <span className='font-semibold text-[#FFB100]'>audio</span> experience that kids will choose over screens!</div>
                    <EmailCollection />
                    <div>
                        {/* <img className="h-12 absolute bottom-[5%] left-[60%]" src="/funnyArrow1.svg" alt="" /> */}
                        <img className="h-14 absolute -bottom-2 left-[45%]" src="/wePromiseNoSpam.svg" alt="" />
                    </div>
                </div>
                {/* <img className="hidden sm:block sm:h-14 left-[14rem] sm:left-[28rem] top-48 sm:top-[41rem] absolute -z-10" src="/funnyArrow1.svg" alt="" />
                <img className="hidden sm:block sm:h-14 left-[14rem] sm:left-[21rem] top-48 sm:top-[29.58rem] absolute -z-10" src="/funnyArrow2.svg" alt="" />
                <img className="h-12 sm:h-14 left-[12rem] sm:left-[26rem] top-[30.5rem] sm:top-[44.5rem] absolute -z-10" src="/wePromiseNoSpam.svg" alt="" />
                <img className="h-16 md:hidden lg:block left-[9rem] sm:left-[25rem] top-[21rem] sm:top-[30rem] absolute -z-10" src="/aParentCanAlwaysHope.svg" alt="" /> */}

                <div className='w-full md:w-1/2 relative'>
                    <img id='rotateCW' className='h-20 sm:h-32 absolute z-40 top-[7%] left-[8%] vertmove2' src='/rocket.svg' />
                    {/* <img id='rotateACW' className='h-8 sm:h-12 absolute z-40 top-[21%] left-[25%] sm:left-[22%] vertmove2' src='purpleFlower.svg' /> */}
                    <img className="w-full h-[50vh] sm:h-[85vh] pl-0 sm:pl-10 aspect-auto object-contain vertmove1" src="/radHeroImg.png" alt="" />
                </div>
            </section>

            {/* Curved divider */}
            <img className="w-full mt-16" src="/testCurve-black.svg" alt="" />

            {/* New Why AUDIO? section */}
            <section id='section2' className='w-full pt-12 sm:pt-20 px-4 sm:px-16 md:px-12 flex md:flex-row flex-col items-center relative'>
                <img className="h-16 sm:h-24 left-[18rem] sm:left-[58%] top-[1rem] sm:top-[2rem] absolute -z-10 vertmove1" src="/yellowBlob-50.svg" alt="" />
                <img className="h-16 sm:h-24 left-[30%] sm:left-[32%] -bottom-[10%] sm:-bottom-[12%] absolute -z-10 vertmove2" src="/purpleBlob-50.svg" alt="" />
                {/* <img className="h-16 sm:h-24 left-[18rem] sm:left-[58%] top-[10rem] sm:top-[2rem] absolute -z-10 vertmove1" src="/purpleBlob-50.svg" alt="" /> */}
                <div id='clippedL' className='w-full md:w-1/2 h-50vh p-4 text-center bg-[#FFB100]'>
                    <div className='text-center text-3xl sm:text-5xl font-semibold text-white/50' style={{ fontFamily: "'Oswald', sans-serif" }}>Why AUDIO?</div>
                    <br />
                    <div className='flex flex-col space-y-2 items-center p-4'>
                        <div className='text-7xl font-black rounded-full p-6 bg-white/50'>80%</div>
                        <div className='text-lg'>Some fact comes here</div>
                    </div>
                    <br />
                    <div className='flex flex-col space-y-2 items-center p-4'>
                        <div className='text-7xl font-black rounded-full p-6 bg-white/50'>70%</div>
                        <div className='text-lg'>Some other fact comes here</div>
                    </div>
                </div>

                <div id='clippedR' className='w-full md:w-1/2 h-50vh p-4 text-center bg-[#00A7B7] mt-20'>
                    <div className='flex flex-col space-y-2 items-center p-4'>
                        <div className='text-7xl font-black rounded-full p-6 bg-white/50'>80%</div>
                        <div className='text-lg'>Some fact comes here</div>
                    </div>
                    <br />
                    <div className='flex flex-col space-y-2 items-center p-4'>
                        <div className='text-7xl font-black rounded-full p-6 bg-white/50'>70%</div>
                        <div className='text-lg'>Some other fact comes here</div>
                    </div>
                    <br />
                    <div className='text-center text-3xl sm:text-5xl font-semibold text-white/50' style={{ fontFamily: "'Oswald', sans-serif" }}>Why NOW?</div>
                </div>
            </section>

            {/* Why AUDIO? section */}
            {/* <section id='section2' className='w-full pt-12 sm:pt-20 px-4 sm:px-16 md:px-12 flex flex-col items-center space-y-8 relative'>
                <img className='h-10 absolute top-[8%] sm:top-[13%] left-[24%] sm:left-[36%] -z-10 overflow-hidden' src='/yellowBlob-50.svg' />
                <img className="sm:h-40 right-8 sm:right-12 top-16 sm:top-36 absolute -z-10 vertmove1" src="/yellowBlob-50.svg" alt="" />
                <img className="h-16 sm:h-20 left-8 sm:left-12 top-[44%] sm:top-[46%] absolute -z-10" src="/purpleBlobs2.svg" alt="" />
                <div className='text-center text-3xl sm:text-5xl font-semibold' style={{ fontFamily: "'Oswald', sans-serif" }}>Why AUDIO?</div>
                <div className='items-center text-center bg-[#6667AB] rounded-xl p-8'>
                    <div className='text-lg sm:text-xl font-light text-white'>Research shows <br /> that children listening to audio had</div>
                    <br />
                    <div className="wordCarousel text-lg sm:text-3xl font-light text-white">
                        <div>
                            <ul className="flip3">
                                <li><span className='font-bold text-[#FFB100]'>3 times</span> more <span className='text-[#FFB100]'>reading comprehension</span></li>
                                <li><span className='font-bold text-[#FFB100]'>7 times</span> more <span className='text-[#FFB100]'>grade vocabulary</span></li>
                                <li><span className='font-bold text-[#FFB100]'>~4 times</span> more <span className='text-[#FFB100]'>reading motivation</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className='text-lg sm:text-xl font-light text-white'>than non-audio listerners!</div>
                </div>
                <img src='/star.svg' className='h-16 sm:h-24' />
                <div className='w-full flex flex-col md:flex-row mx-auto justify-center items-center space-y-8 md:space-y-0 space-x-0 md:space-x-8'>
                    <div className='w-full md:w-1/3 p-4 rounded-xl text-center border-2 border-[#00A7B7] text-[#00A7B7] text-lg sm:text-xl font-light overflow-visible relative'>
                        DID YOU KNOW?
                        <br />
                        ~100% of Indian Kids<br />get exposed to screens<br />before 18 MONTHS!
                        <img src='/didYouKnowFace1.svg' className='h-16 sm:h-24 absolute -top-4 sm:-top-6 -left-4 sm:-left-6' />
                    </div>
                    <div className='w-full md:w-1/3 p-4 text-center text-lg sm:text-xl font-light overflow-visible relative'>
                        An early beginning of <span className='text-[#00A7B7]'>SCREEN OBSESSION</span> causes havoc for later years. There are proven psycological and physical dangers with proof of <span className='text-[#00A7B7]'>DELAYED Learnings</span>.
                        <img src='/didYouKnowFace2.svg' className='h-16 sm:h-24 absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8' />
                    </div>
                </div>
            </section> */}

            {/* Curved divider */}
            <img className="w-full mt-16" src="/testCurve-black.svg" alt="" />

            {/* Testimonial section */}
            <section id='section4' className="w-full pt-12 sm:pt-20 px-4 sm:px-16 md:px-12 flex flex-col items-center space-y-8 relative">
                <img className='h-24 absolute top-[52%] right-[10%] sm:right-[28%]' src='/spaceship.svg' />
                <img className='h-10 absolute top-[11%] sm:top-[16%] right-[24%] sm:right-[34%] -z-10 vertmove2' src='/tealBlob-50.svg' />
                <div className='text-center text-3xl sm:text-5xl font-semibold' style={{ fontFamily: "'Oswald', sans-serif" }}>Parents & Kids Speak</div>
                <img src='/testim1.svg' className='h-48 sm:h-56' />
                <div className="container flex flex-col items-center mx-auto space-y-6">
                    <p className="py-2 sm:px-24 text-lg sm:text-2xl font-light text-center text-gray-800">&quot;Veniam quidem animi ea maxime odit fugiat architecto perferendis ipsum perspiciatis iusto, provident qui nam dolorum corporis.&quot;</p>
                </div>
            </section>

            <br /><br />
            <NewFooter />
        </div>
    )
}