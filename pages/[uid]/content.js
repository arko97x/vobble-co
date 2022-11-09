import Head from "next/head"
import Link from "next/link"
import Navbar from "../../components/navbar"
import Footer from "../../components/footer"
import AllowedUIDs from "../../allowed-uid"
import { useRouter } from "next/router"
import ReactLoading from "react-loading"

export default function Content() {
    var allowed = ""
    allowed = AllowedUIDs()
    const router = useRouter()
    const uid = router.query.uid
    var loaderPurple = <ReactLoading type={'spin'} color={'#6667AB'} height={'24px'} width={'24px'} />

    return (
        <div className="w-screen h-screen flex flex-col" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            <Head>
                <title>Audio Series - {uid}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Vobble Audio Series" />
                <meta property="og:site_name" content="Vobble" />
                <meta property="og:url" content={'https://vobble.co/' + uid + '/content'} />
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
                            <>
                                <div className="px-8 md:px-8 lg:px-24 py-24">
                                    <div className="flex flex-col space-y-10">
                                        <div className="text-3xl sm:text-6xl font-bold text-[#6667AB]" style={{ fontFamily: "'Gochi Hand', cursive" }}>Audio Series</div>
                                        <Link href={'/' + uid + '/sugar-monster'} passHref>
                                            <div className="p-2 bg-white hover:bg-gray-100 border border-white hover:border-gray-300 rounded-lg cursor-pointer flex flex-col sm:flex-row space-x-0 sm:space-x-6 space-y-2 sm:space-y-0">
                                                <div className="w-full sm:w-1/4">
                                                    <img className="rounded-lg w-full aspect-square object-cover" src="/sugarMonster.jpeg" />
                                                </div>
                                                <div className="w-full sm:w-3/4 flex flex-col space-y-3 sm:space-y-4">
                                                    <div className="text-sm sm:text-3xl font-bold text-black">Sugar Monster</div>
                                                    <div className="text-sm font-regular">The Sugar Monster has a simple mission in life: Never let kids eat healthy food. Young Molly and her friends also have a mission: never let the sugar monster do his job. Through a variety of silly scenarios and situations, Kids learn what it means to eat and be healthy.</div>
                                                    <div className="text-xs text-[#00A7B7] py-1 px-4 border border-[#00A7B7] w-fit rounded-full">10 episodes</div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link href={'/' + uid + '/hey-story-go'} passHref>
                                            <div className="p-2 bg-white hover:bg-gray-100 border border-white hover:border-gray-300 rounded-lg cursor-pointer flex flex-col sm:flex-row space-x-0 sm:space-x-6 space-y-2 sm:space-y-0">
                                                <div className="w-full sm:w-1/4">
                                                    <img className="rounded-lg w-full aspect-square object-cover" src="/heyStoryGo.jpeg" />
                                                </div>
                                                <div className="w-full sm:w-3/4 flex flex-col space-y-3 sm:space-y-4">
                                                    <div className="text-sm sm:text-3xl font-bold text-black">Hey Story Go!</div>
                                                    <div className="text-sm font-regular">Storytellers Carly C and KB are here to take you on a wild, musical, fantastical story adventure! But they can&apos;t do it alone- they need your help to keep the story moving. So get up on your feet and get in on the action with Hey Story Go!</div>
                                                    <div className="text-xs text-[#00A7B7] py-1 px-4 border border-[#00A7B7] w-fit rounded-full">10 episodes</div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link href={'/' + uid + '/a-to-z-mysteries'} passHref>
                                            <div className="p-2 bg-white hover:bg-gray-100 border border-white hover:border-gray-300 rounded-lg cursor-pointer flex flex-col sm:flex-row space-x-0 sm:space-x-6 space-y-2 sm:space-y-0">
                                                <div className="w-full sm:w-1/4">
                                                    <img className="rounded-lg w-full aspect-square object-cover" src="/a-to-z-mysteries.jpeg" />
                                                </div>
                                                <div className="w-full sm:w-3/4 flex flex-col space-y-3 sm:space-y-4">
                                                    <div className="text-sm sm:text-3xl font-bold text-black">A to Z Mysteries: Clue Club</div>
                                                    <div className="text-sm font-regular">Inspired by Ron Roy&apos;s hit chapter book series, A to Z Mysteries. This show lets you join the clue club with Dink, Josh, and Ruth Rose. Piece together clues and interview witnesses to solve brand new mysteries all over Green Lawn!</div>
                                                    <div className="text-xs text-[#00A7B7] py-1 px-4 border border-[#00A7B7] w-fit rounded-full">10 episodes</div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link href={'/' + uid + '/mars-patel'} passHref>
                                            <div className="p-2 bg-white hover:bg-gray-100 border border-white hover:border-gray-300 rounded-lg cursor-pointer flex flex-col sm:flex-row space-x-0 sm:space-x-6 space-y-2 sm:space-y-0">
                                                <div className="w-full sm:w-1/4">
                                                    <img className="rounded-lg w-full aspect-square object-cover" src="/marsPatel.jpeg" />
                                                </div>
                                                <div className="w-full sm:w-3/4 flex flex-col space-y-3 sm:space-y-4">
                                                    <div className="text-sm sm:text-3xl font-bold text-black">The Unexplainable Disappearance of Mars Patel</div>
                                                    <div className="text-sm font-regular">The Unexplainable Disappearance of Mars Patel is a high-quality serial mystery story for middle graders, performed by actual kids. Think Goonies, meets Spy Kids, meets Stranger Things for 8-12 year-olds. Listen along as eleven-year-old Mars Patel and his pals JP, Toothpick, and Caddie set out on a audacious adventure in search of two missing friends. The mysterious tech billionaire Oliver Pruitt might have a thing-or-two to say about their quest, because as he likes to say, To the stars! In fact, that&apos;s just where they might be headed!</div>
                                                    <div className="text-xs text-[#00A7B7] py-1 px-4 border border-[#00A7B7] w-fit rounded-full">10 episodes</div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link href={'/' + uid + '/best-whatever-ever'} passHref>
                                            <div className="p-2 bg-white hover:bg-gray-100 border border-white hover:border-gray-300 rounded-lg cursor-pointer flex flex-col sm:flex-row space-x-0 sm:space-x-6 space-y-2 sm:space-y-0">
                                                <div className="w-full sm:w-1/4">
                                                    <img className="rounded-lg w-full aspect-square object-cover" src="/bestWhateverEver.jpeg" />
                                                </div>
                                                <div className="w-full sm:w-3/4 flex flex-col space-y-3 sm:space-y-4">
                                                    <div className="text-sm sm:text-3xl font-bold text-black">Best Whatever Ever</div>
                                                    <div className="text-sm font-regular">Best Whatever Ever! is a podcast for kids that features original stories all about the stuff that kids really care about... like: &quot;Where do giant monsters poop?&quot; &quot;What happens when you break a pinky promise?&quot; &quot;Are unicorns real?&quot; &quot;Is it possible to fool the Tooth Fairy?&quot; &quot;What&apos;s the coolest superpower?&quot; And more! Join Ira and his &quot;bosses&quot; Spencer and Scarlett as they talk about… WHATEVER! What&apos;s a &quot;Whatever&quot;? It&apos;s whatever kids find silly or super important… or SUPER SILLY IMPORTANT! We then take that &quot;Whatever&quot; and tell a fun, silly original story inspired by it.</div>
                                                    <div className="text-xs text-[#00A7B7] py-1 px-4 border border-[#00A7B7] w-fit rounded-full">10 episodes</div>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link href={'/' + uid + '/quentin-and-alfie'} passHref>
                                            <div className="p-2 bg-white hover:bg-gray-100 border border-white hover:border-gray-300 rounded-lg cursor-pointer flex flex-col sm:flex-row space-x-0 sm:space-x-6 space-y-2 sm:space-y-0">
                                                <div className="w-full sm:w-1/4">
                                                    <img className="rounded-lg w-full aspect-square object-cover" src="/quentinAndAlfie_sABCAdventures.jpeg" />
                                                </div>
                                                <div className="w-full sm:w-3/4 flex flex-col space-y-3 sm:space-y-4">
                                                    <div className="text-sm sm:text-3xl font-bold text-black">Quentin and Alfie&apos;s ABC Adventures</div>
                                                    <div className="text-sm font-regular">Join Alfie and his babysitter, Quentin, on alphabet adventures spanning A to Z. Each day, they journey down a magical sidewalk to fantastic destinations where they explore letter sounds, sing song, and meet new friends.</div>
                                                    <div className="text-xs text-[#00A7B7] py-1 px-4 border border-[#00A7B7] w-fit rounded-full">10 episodes</div>
                                                </div>
                                            </div>
                                        </Link>

                                        <div className="p-2 bg-white hover:bg-gray-100 border border-white hover:border-gray-300 rounded-lg flex flex-col sm:flex-row space-x-0 sm:space-x-6 space-y-2 sm:space-y-0 pointer-events-none opacity-50">
                                            <div className="w-full sm:w-1/4">
                                                <img className="rounded-lg w-full aspect-square object-cover" src="/omNom.jpeg" />
                                            </div>
                                            <div className="w-full sm:w-3/4 flex flex-col space-y-3 sm:space-y-4">
                                                <div className="text-sm sm:text-3xl font-bold text-black">Om noms</div>
                                                <div className="text-sm font-regular">-</div>
                                                <div className="flex flex-row space-x-2">
                                                    <div className="text-xs text-[#00A7B7] py-1 px-4 border border-[#00A7B7] w-fit rounded-full">10 episodes</div>
                                                    <div className="text-xs text-white py-1 px-4 bg-[#00A7B7] w-fit rounded-full">COMING SOON!</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-2 bg-white hover:bg-gray-100 border border-white hover:border-gray-300 rounded-lg flex flex-col sm:flex-row space-x-0 sm:space-x-6 space-y-2 sm:space-y-0 pointer-events-none opacity-50">
                                            <div className="w-full sm:w-1/4">
                                                <img className="rounded-lg w-full aspect-square object-cover" src="/hill-laryUs.jpeg" />
                                            </div>
                                            <div className="w-full sm:w-3/4 flex flex-col space-y-3 sm:space-y-4">
                                                <div className="text-sm sm:text-3xl font-bold text-black">Hill-Lary-Us</div>
                                                <div className="text-sm font-regular">-</div>
                                                <div className="flex flex-row space-x-2">
                                                    <div className="text-xs text-[#00A7B7] py-1 px-4 border border-[#00A7B7] w-fit rounded-full">10 episodes</div>
                                                    <div className="text-xs text-white py-1 px-4 bg-[#00A7B7] w-fit rounded-full">COMING SOON!</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-2 bg-white hover:bg-gray-100 border border-white hover:border-gray-300 rounded-lg flex flex-col sm:flex-row space-x-0 sm:space-x-6 space-y-2 sm:space-y-0 pointer-events-none opacity-50">
                                            <div className="w-full sm:w-1/4">
                                                <img className="rounded-lg w-full aspect-square object-cover" src="/superGreatStories .jpeg" />
                                            </div>
                                            <div className="w-full sm:w-3/4 flex flex-col space-y-3 sm:space-y-4">
                                                <div className="text-sm sm:text-3xl font-bold text-black">Super Great Kids&apos; Stories</div>
                                                <div className="text-sm font-regular">-</div>
                                                <div className="flex flex-row space-x-2">
                                                    <div className="text-xs text-[#00A7B7] py-1 px-4 border border-[#00A7B7] w-fit rounded-full">10 episodes</div>
                                                    <div className="text-xs text-white py-1 px-4 bg-[#00A7B7] w-fit rounded-full">COMING SOON!</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </> :
                            null
                    )
            }

            <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#6667AB" fillOpacity="1" d="M0,288L80,272C160,256,320,224,480,218.7C640,213,800,235,960,234.7C1120,235,1280,213,1360,202.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg></div>
            <Footer />
        </div >
    )
}