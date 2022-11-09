import NewFooter from "../components/newfooter"
import NavbarWithBackButton from "../components/navbarwithbackbutton"

export default function OurJourney() {
    return (
        <div className="w-screen flex flex-col space-y-12 relative">
            <NavbarWithBackButton />

            <img className="h-16 sm:h-24 left-[18rem] sm:left-[29rem] top-[10rem] sm:top-[8rem] absolute -z-10 vertmove1" src="/yellowBlob-50.svg" alt="" />
            <img className="sm:h-40 -left-8 sm:-left-12 top-16 sm:top-36 absolute -z-10 vertmove1" src="/yellowBlob-50.svg" alt="" />
            <img className="sm:h-20 left-24 sm:left-32 top-8 sm:top-16 absolute -z-10 vertmove2" src="/purpleBlob-50.svg" alt="" />
            <img className="h-14 left-[14rem] sm:left-[22rem] top-48 sm:top-[22rem] absolute -z-10 vertmove2" src="/tealBlob-50.svg" alt="" />

            <div className="flex flex-col space-y-0 pt-32 text-center text-vPurple">
                <p className="text-5xl sm:text-7xl font-bold z-20 tracking-tight" style={{ fontFamily: "'Oswald', sans-serif" }}>OUR JOURNEY<sup>*</sup></p>
                <p className='text-xl italic font-light tracking-tighter'>*so far!</p>
            </div>

            <div className="px-4 sm:px-16 md:px-12">
                <div className="bg-white border-2 border-vTeal flex flex-col md:flex-row space-y-6 md:space-y-0 p-6 items-center rounded-xl">
                    <img className="w-full md:w-1/2 object-contain" src="/Chapter1.png" alt="" />
                    <div className="flex flex-col space-y-6 md:space-y-12 w-full md:w-1/2 px-6 md:px-12">
                        <div className="flex flex-col">
                            <p className="text-2xl sm:text-4xl font-bold z-20 tracking-tight text-vTeal" style={{ fontFamily: "'Oswald', sans-serif" }}>CHAPTER 1</p>
                            <p className='text-lg sm:text-2xl font-medium text-vTeal/75 leading-tight'>What&apos;s happening to our children!?</p>
                        </div>
                        <p className='text-md sm:text-lg font-light text-gray-800 text-justify'>We are two working mothers who completely love their kids (especially their chomp-able cheeks)! And over the last few years, we saw our little ones getting addicted to screens and defending it to the point of total breakdown. We wondered what was happening! Every day became a struggle filled with negotiation on screen time and we painstakingly started looking for equally captivating alternatives. Was there something, away from screens, that kids loved AND was good for them AND could give parents a much needed guilt-free break too?</p>
                    </div>
                </div>
            </div>

            <div className="px-4 sm:px-16 md:px-12">
                <div className="bg-white border-2 border-vYellow flex flex-col-reverse md:flex-row space-y-6 md:space-y-0 p-6 items-center rounded-xl">
                    <div className="flex flex-col space-y-6 md:space-y-12 w-full md:w-1/2 px-6 md:px-12">
                        <div className="flex flex-col">
                            <p className="text-2xl sm:text-4xl font-bold z-20 tracking-tight text-vYellow" style={{ fontFamily: "'Oswald', sans-serif" }}>CHAPTER 2</p>
                            <p className='text-lg sm:text-2xl font-medium text-vYellow/75 leading-tight'>Our Escape..oops…Escapade begins!</p>
                        </div>
                        <p className='text-md sm:text-lg font-light text-gray-800 text-justify'>On our quest to find this mystical alternative to screens we started to observe our kids&apos; behaviours more closely. We found that their imagination soared when WE narrated a story to them or read a book to them. And we wondered… Is audio our mystical alternative?<br /><br />Time to explore… but wait…<br />There&apos;s SO much audio already available – So why aren&apos;t more kids LISTENING to audio content? That&apos;s when we started sifting some more and realized that the current content is either too outdated or inappropriate [some of those Panchatantra stories can be violent!], too preachy, too monotonous or just has bad storytelling and production. We tried it with our kids and it just didn&apos;t stick!
                        </p>
                    </div>
                    <img className="w-full md:w-1/2 object-contain" src="/Chapter2.png" alt="" />
                </div>
            </div>

            <div className="px-4 sm:px-16 md:px-12">
                <div className="bg-white border-2 border-vPurple flex flex-col md:flex-row space-y-6 md:space-y-0 p-6 items-center rounded-xl">
                    <img className="w-full md:w-1/2 object-contain" src="/Chapter3.png" alt="" />
                    <div className="flex flex-col space-y-6 md:space-y-12 w-full md:w-1/2 px-6 md:px-12">
                        <div className="flex flex-col">
                            <p className="text-2xl sm:text-4xl font-bold z-20 tracking-tight text-vPurple" style={{ fontFamily: "'Oswald', sans-serif" }}>CHAPTER 3</p>
                            <p className='text-lg sm:text-2xl font-medium text-vPurple/75 leading-tight'>The Birth of Vobble</p>
                        </div>
                        <p className='text-md sm:text-lg font-light text-gray-800 text-justify'>The new task at hand, for us eager mommies, was to put on our superhero capes and build amazing audio content that would re-ignite kids&apos; imagination and keep them away from screens.<br /><br />First order of duty was to understand - what do kids LOVE listening to?<br /><br />And who better to ask than the kids themselves?<br />We dove right in and made a bunch of kids listen to different types of audio - and we sat back and observed, and observed and observed some more. What makes them laugh? What makes them wonder? What drew them in? <i>We watched and learned</i>.<br /><br />Based on all our insights we came up with Vobble&apos;s very own, kids&apos; approved &quot;Secret Sauce&quot; to make the content we create delicious enough to rival the screen!</p>
                    </div>
                </div>
            </div>

            <div className="px-4 sm:px-16 md:px-12">
                <div className="bg-white border-2 border-vYellow flex flex-col-reverse md:flex-row space-y-6 md:space-y-0 p-6 items-center rounded-xl">
                    <div className="flex flex-col space-y-6 md:space-y-12 w-full md:w-1/2 px-6 md:px-12">
                        <div className="flex flex-col">
                            <p className="text-2xl sm:text-4xl font-bold z-20 tracking-tight text-vYellow" style={{ fontFamily: "'Oswald', sans-serif" }}>CHAPTER 4</p>
                            <p className='text-lg sm:text-2xl font-medium text-vYellow/75 leading-tight'>What are we doing now?</p>
                        </div>
                        <p className='text-md sm:text-lg font-light text-gray-800 text-justify'>We are currently beta testing and refining Vobble to make the best possible version for you and your child. We plan to continue our pilots across cities and get it ready for launch soon!</p>
                    </div>
                    <img className="w-full md:w-1/2 object-contain" src="/Chapter4.png" alt="" />
                </div>
            </div>

            <div className="px-4 sm:px-16 md:px-12">
                <div className="bg-white border-2 border-vTeal flex flex-col md:flex-row space-y-6 md:space-y-0 p-6 items-center rounded-xl">
                    <img className="w-full md:w-1/2 object-contain" src="/Chapter5.png" alt="" />
                    <div className="flex flex-col space-y-6 md:space-y-12 w-full md:w-1/2 px-6 md:px-12">
                        <div className="flex flex-col">
                            <p className="text-2xl sm:text-4xl font-bold z-20 tracking-tight text-vTeal" style={{ fontFamily: "'Oswald', sans-serif" }}>CHAPTER 5</p>
                            <p className='text-lg sm:text-2xl font-medium text-vTeal/75 leading-tight'>Be a Vobbler Parent! Join the cause!</p>
                        </div>
                        <p className='text-md sm:text-lg font-light text-gray-800 text-justify'>We are gearing up for our launch, and building a limited early access waitlist. <span className="font-bold">Join today</span> and stay updated on our progress!</p>
                    </div>
                </div>
            </div>

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