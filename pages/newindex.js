import Head from "next/head"
import Script from 'next/script'
import NewNavbar from "../components/newnavbar"
import NewFooter from "../components/newfooter"
import { Fragment, useState } from "react"
import { Dialog, Transition } from '@headlessui/react'
import ReactLoading from "react-loading"

export default function NewIndex() {
    let [msg, setMsg] = useState("Get early premium access ✨")

    let [isOpen, setIsOpen] = useState(false)
    function closeModal() {
        setIsOpen(false)
    }

    var loaderWhite = <ReactLoading className="align-center" type={'spin'} color={'#FFFFFF'} height={'24px'} width={'24px'} />
    const scriptURL = "https://script.google.com/macros/s/AKfycby-sfaTREj4y2moPdh4M8JGOUJiE8ZXgSLnZVSp87ZPMt_ay0gDaXRDVazB0TGsttWw/exec";
    if (typeof window !== 'undefined') {
        const form = document.forms["google-sheet"]
        form.addEventListener("submit", (e) => {
            e.preventDefault()
            setMsg(loaderWhite)
            fetch(scriptURL, { method: "POST", body: new FormData(form) })
                .then((resp) => {
                    setIsOpen(true)
                    setMsg("Get early premium access ✨")
                    document.getElementById("email").value = ""
                })
                .catch((error) =>
                    setMsg("Something went wrong :(")
                );
        })
    }

    return (
        <div className="w-screen h-screen flex flex-col">
            <>
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={closeModal}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-gray-900"
                                        >
                                            ✨&nbsp;Early access successful!
                                        </Dialog.Title>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Thank you for trusting us with your email. Exciting times ahead; but no spam, we promise!
                                            </p>
                                        </div>

                                        <div className="mt-4">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center rounded-md border border-transparent bg-[#6667AB]/75 px-4 py-2 text-sm font-medium text-white hover:bg-[#6667AB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6667AB] focus-visible:ring-offset-2"
                                                onClick={closeModal}
                                            >
                                                Got it, thanks!
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"></Script>
            <Head>
                <title>Vobble New Home Page</title>
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Home Page" />
                <meta property="og:site_name" content="Vobble" />
                <meta property="og:url" content="https://vobble.co/" />
                <meta property="og:description" content="" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://vobble.co/og-image.png?v=2" />
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                />
            </Head>

            <NewNavbar />

            {/* Hero Section */}
            <div className="px-8 md:px-8 lg:px-24 pt-20 sm:pt-24 mb-8 sm:mb-16">
                <div className="w-full flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:items-center">
                    <div className="w-full sm:w-1/2 sm:pr-4 pr-0 flex flex-col space-y-4 sm:space-y-12">
                        <div className="text-xl sm:text-4xl text-[#1E2330] font-bold" style={{ fontFamily: "'Delius Unicase', cursive" }}>Tired of negotiating screen time with your child?</div>
                        <div className="text-sm sm:text-xl font-regular text-[#1E2330]" style={{ fontFamily: "'Gaegu', cursive" }}>Introducing <span><img className="inline h-4 sm:h-6" src="/vobble-inline.png" /></span>&nbsp;!<br />India&apos;s first multi-sensory “immersive” audio experience that kids will choose over screens!</div>
                        <form name="google-sheet" className="flex flex-col space-y-2 text-sm sm:text-base" style={{ fontFamily: "'Gaegu', cursive" }}>
                            <input type="email" id="email" name="email" className="form-control w-full h-9 sm:h-10 px-3 font-regular text-[#1E2330] placeholder-[#6667AB] border border-[#6667AB] bg-white rounded-lg focus:shadow-outline" placeholder="Please enter your email" required />
                            <button
                                id="submitbtn"
                                className='w-full px-4 py-2 font-semibold bg-[#6667AB] hover:bg-[#00A7B7] text-white flex items-center border border-transparent hover:border-white rounded-lg transition ease-in-out delay-45 cursor-pointer' type="submit"
                            >
                                <div className="m-auto">{typeof msg == "string" ? msg : loaderWhite}</div>
                            </button>
                        </form>
                        {/* <div className="flex flex-col space-y-2 text-sm sm:text-base" style={{ fontFamily: "'Gaegu', cursive" }}>
                            <input className="w-full h-9 sm:h-10 px-3 font-regular text-[#1E2330] placeholder-[#6667AB] border border-[#6667AB] bg-white rounded-lg focus:shadow-outline" type="text" placeholder="Please enter your email" />
                            <button
                                className='w-full px-4 py-2 font-semibold bg-[#6667AB] hover:bg-[#00A7B7] text-white border border-transparent hover:border-white rounded-lg transition ease-in-out delay-45 cursor-pointer'
                            >
                                Get early premium access&nbsp;✨
                            </button>
                        </div> */}
                    </div>
                    <div className="w-full sm:w-1/2 sm:pl-4 pl-0">
                        <img className="w-full sm:h-[70vh] mx-auto aspect-auto object-contain" src="/newHeroImg.svg" alt="" />
                    </div>
                </div>
            </div>

            {/* Curved divider */}
            <div className="w-full relative">
                <img className="w-full top-0 bottom-0 absolute" src="/testCurve-teal.svg" alt="" />
                <img id="rotateCW" className="sm:w-20 w-12 sm:h-20 h-12 absolute right-8 md:right-8 lg:right-24 top-0 bottom-0 my-auto" src="/rotateCW.svg" alt="" />
                <img className="sm:w-8 w-5 sm:h-8 h-5 absolute right-[2.8rem] sm:right-[3.48rem] md:right-[3.4rem] lg:right-[7.5rem] top-0 bottom-0 my-auto fill-[#6667AB]" src="/bottomArrow.svg" />
            </div>

            {/* Journey Section */}
            <div className="px-8 md:px-8 lg:px-24 pt-16 mb-8 sm:mb-16">
                <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-2 sm:space-y-0 items-start sm:items-center mb-8">
                    <img className="h-10 sm:h-16 w-auto" src="/journeyIcon.svg" alt="" />
                    <div className="flex flex-col text-[#00A7B7]" style={{ fontFamily: "'Delius Unicase', cursive" }}>
                        <div className="flex flex-row space-x-3 items-center">
                            <div className="text-xl sm:text-4xl font-bold">Here&apos;s our journey!</div>
                            <img className="h-8 sm:h-14 hidden sm:block" src="/scrollArrow.svg" alt="" />
                        </div>
                        {/* <div className="text-xl sm:text-4xl font-bold">Here&apos;s our journey!</div> */}
                        <div className="text-sm sm:text-xl font-regular">Like a Tarantino movie, is divided into 5 chapters</div>
                    </div>
                    <img className="h-8 sm:h-14 block sm:hidden" src="/scrollArrow.svg" alt="" />
                </div>

                <div className="flex flex-row overflow-x-auto space-x-8">
                    {/* Chapter 1 */}
                    <div className="flex-shrink-0 w-[70vw] flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:items-center overflow-visible" style={{ backgroundImage: "url('/bgHandrawn.svg')", backgroundPosition: "center center", backgroundBlendMode: "multiply", backgroundRepeat: "no-repeat", backgroundSize: "contain" }}>
                        <div className="w-full sm:w-1/2 p-4">
                            <img className="w-full sm:h-[70vh] mx-auto aspect-auto object-contain" src="/chapter1.svg" alt="" />
                        </div>
                        <div className="w-full sm:w-1/2 p-4 flex flex-col space-y-4 sm:space-y-12">
                            <div className="w-full flex flex-col text-[#6667AB]" style={{ fontFamily: "'Delius Unicase', cursive" }}>
                                <div className="text-md sm:text-xl font-bold">Chapter 1</div>
                                <div className="text-sm sm:text-lg font-regular">What&apos;s happening to our children!?</div>
                            </div>
                            <div className="text-sm sm:text-lg font-regular text-[#1E2330]" style={{ fontFamily: "'Gaegu', cursive" }}>We are two working mothers who completely love and feast on our children’s cheeks. But as the pandemic hit, we saw our little ones getting addicted and defending screens to the point of total breakdowns. We wondered what was happening! Every day became a struggle filled with negotiation on screen time and we started spending our time painfully (sometimes creatively) looking for other alternatives. Was there something away from screens that kids loved and was good for them and could give us parents the much needed guilt-free break too!</div>
                        </div>
                    </div>

                    {/* Chapter 2 */}
                    <div className="flex-shrink-0 w-[70vw] flex flex-col sm:flex-row-reverse space-y-2 sm:space-y-0 sm:items-center overflow-visible" style={{ backgroundImage: "url('/bgHandrawn.svg')", backgroundPosition: "center center", backgroundBlendMode: "multiply", backgroundRepeat: "no-repeat", backgroundSize: "contain" }}>
                        <div className="w-full sm:w-1/2 p-4">
                            <img className="w-full sm:h-[70vh] mx-auto aspect-auto object-contain" src="/chapter2.svg" alt="" />
                        </div>
                        <div className="w-full sm:w-1/2 p-4 flex flex-col space-y-4 sm:space-y-12">
                            <div className="w-full flex flex-col text-[#00A7B7]" style={{ fontFamily: "'Delius Unicase', cursive" }}>
                                <div className="text-md sm:text-xl font-bold">Chapter 2</div>
                                <div className="text-sm sm:text-lg font-regular">Our Escape..oops..Escapade begins!</div>
                            </div>
                            <div className="text-sm sm:text-lg font-regular text-[#1E2330]" style={{ fontFamily: "'Gaegu', cursive" }}>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahblah blah blahblah blah blah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blah blah blah blah blah blah blahblah blah blah.</div>
                        </div>
                    </div>

                    {/* Chapter 3 */}
                    <div className="flex-shrink-0 w-[70vw] flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:items-center overflow-visible" style={{ backgroundImage: "url('/bgHandrawn.svg')", backgroundPosition: "center center", backgroundBlendMode: "multiply", backgroundRepeat: "no-repeat", backgroundSize: "contain" }}>
                        <div className="w-full sm:w-1/2 p-4">
                            <img className="w-full sm:h-[70vh] mx-auto aspect-auto object-contain" src="/chapter3.svg" alt="" />
                        </div>
                        <div className="w-full sm:w-1/2 p-4 flex flex-col space-y-4 sm:space-y-12">
                            <div className="w-full flex flex-col text-[#6667AB]" style={{ fontFamily: "'Delius Unicase', cursive" }}>
                                <div className="text-md sm:text-xl font-bold">Chapter 3</div>
                                <div className="text-sm sm:text-lg font-regular">The Birth of Vobble</div>
                            </div>
                            <div className="text-sm sm:text-lg font-regular text-[#1E2330]" style={{ fontFamily: "'Gaegu', cursive" }}>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahblah blah blahblah blah blah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blah blah blah blah blah blah blahblah blah blah.</div>
                        </div>
                    </div>

                    {/* Chapter 4 */}
                    <div className="flex-shrink-0 w-[70vw] flex flex-col sm:flex-row-reverse space-y-2 sm:space-y-0 sm:items-center overflow-visible" style={{ backgroundImage: "url('/bgHandrawn.svg')", backgroundPosition: "center center", backgroundBlendMode: "multiply", backgroundRepeat: "no-repeat", backgroundSize: "contain" }}>
                        <div className="w-full sm:w-1/2 p-4">
                            <img className="w-full sm:h-[70vh] mx-auto aspect-auto object-contain" src="/chapter4.svg" alt="" />
                        </div>
                        <div className="w-full sm:w-1/2 p-4 flex flex-col space-y-4 sm:space-y-12">
                            <div className="w-full flex flex-col text-[#00A7B7]" style={{ fontFamily: "'Delius Unicase', cursive" }}>
                                <div className="text-md sm:text-xl font-bold">Chapter 4</div>
                                <div className="text-sm sm:text-lg font-regular">What are we doing now?</div>
                            </div>
                            <div className="text-sm sm:text-lg font-regular text-[#1E2330]" style={{ fontFamily: "'Gaegu', cursive" }}>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahblah blah blahblah blah blah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blah blah blah blah blah blah blahblah blah blah.</div>
                        </div>
                    </div>

                    {/* Chapter 5 */}
                    <div className="flex-shrink-0 w-[70vw] flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:items-center overflow-visible" style={{ backgroundImage: "url('/bgHandrawn.svg')", backgroundPosition: "center center", backgroundBlendMode: "multiply", backgroundRepeat: "no-repeat", backgroundSize: "contain" }}>
                        <div className="w-full sm:w-1/2 p-4">
                            <img className="w-full sm:h-[70vh] mx-auto aspect-auto object-contain" src="/chapter5.svg" alt="" />
                        </div>
                        <div className="w-full sm:w-1/2 p-4 flex flex-col space-y-4 sm:space-y-12">
                            <div className="w-full flex flex-col text-[#6667AB]" style={{ fontFamily: "'Delius Unicase', cursive" }}>
                                <div className="text-md sm:text-xl font-bold">Chapter 5</div>
                                <div className="text-sm sm:text-lg font-regular">Be a Vobbler Parent! Join the cause!</div>
                            </div>
                            <div className="text-sm sm:text-lg font-regular text-[#1E2330]" style={{ fontFamily: "'Gaegu', cursive" }}>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahblah blah blahblah blah blah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blah blah blah blah blah blah blahblah blah blah.</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Curved divider */}
            <img className="w-full -scale-x-100" src="/testCurve-purple.svg" alt="" />

            {/* Testimonials Section */}
            <div className="px-8 md:px-8 lg:px-24 pt-16 mb-8 sm:mb-16">
                <div className="flex flex-col sm:flex-row-reverse space-x-0 sm:space-x-4 sm:space-x-reverse space-y-2 sm:space-y-0 items-end sm:items-center mb-8">
                    <img className="h-8 sm:h-14 w-auto" src="/testimonialIcon.svg" alt="" />
                    <div className="w-full flex flex-col text-right text-[#6667AB]" style={{ fontFamily: "'Delius Unicase', cursive" }}>
                        <div className="text-xl sm:text-4xl font-bold">Still not convinced?</div>
                        <div className="text-sm sm:text-xl font-regular">Hear it from the kids & their parents themselves</div>
                    </div>
                </div>

                <div className="w-full flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:items-center">
                    {/* <div className="w-full sm:w-1/2 sm:pr-4 pr-0 overflow-visible">
                        <div className="w-full" style={{ backgroundImage: "url('/bgHandrawn.svg')", backgroundPosition: "center center", backgroundBlendMode: "multiply", backgroundRepeat: "no-repeat", backgroundSize: "contain" }}>
                        </div>
                    </div> */}
                    <div className="w-full sm:w-1/2 sm:pr-4 pr-0">
                        <img className="w-full sm:h-[70vh] mx-auto aspect-auto object-contain" src="/tm1.svg" alt="" />
                    </div>
                    <div className="w-full sm:w-1/2 sm:pr-4 pr-0 flex flex-col space-y-4 sm:space-y-12">
                        <div className="text-sm sm:text-xl font-regular text-[#1E2330]" style={{ fontFamily: "'Gaegu', cursive" }}>“blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahblah blah blahblah blah blah blahblah blahblah blahblah blahblah blahblah blahblah blahblah blah blah blah blah blah blah blahblah blah blah.”</div>
                        <div className="flex flex-row space-x-2 items-center">
                            <img className="h-14 sm:h-14 w-auto" src="/tm1-parent.svg" alt="" />
                            <div className="w-full flex flex-col text-[#6667AB]" style={{ fontFamily: "'Delius Unicase', cursive" }}>
                                <div className="text-md font-bold">Nicole Cariappa</div>
                                <div className="text-sm font-regular">Super-kid Hariharan&apos;s super-mom</div>
                            </div>
                        </div>
                        <div className="flex flex-row space-x-3 items-center">
                            <div className="flex flex-row space-x-1">
                                <img className="h-8 w-auto" src="/leftArrow.svg" alt="" />
                                <img className="h-8 w-auto" src="/rightArrow.svg" alt="" />
                            </div>
                            <div className="text-md font-bold text-[#1E2330]" style={{ fontFamily: "'Delius Unicase', cursive" }}>1 of 3</div>
                        </div>
                    </div>
                </div>
            </div>

            <NewFooter />
        </div>
    )
}