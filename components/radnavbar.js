import Link from 'next/link'
import VButton from "../components/vButton"

export default function RadNavbar() {
    function menuBtnClick() {
        if (typeof window !== 'undefined') {
            let mOpen = document.getElementById("menuOpen")
            let mClose = document.getElementById("menuClose")
            let mContent = document.getElementById("menuContent")

            if (mOpen.classList.contains('block')) {
                mOpen.classList.remove('block')
                mOpen.classList.add('hidden')
                mClose.classList.remove('hidden')
                mClose.classList.add('block')
                mContent.classList.remove('hidden')
            } else if (mClose.classList.contains('block')) {
                mClose.classList.remove('block')
                mClose.classList.add('hidden')
                mOpen.classList.remove('hidden')
                mOpen.classList.add('block')
                mContent.classList.add('hidden')
            }
        }
    }

    function menuItemClick() {
        if (typeof window !== 'undefined') {
            let mOpen = document.getElementById("menuOpen")
            let mClose = document.getElementById("menuClose")
            let mContent = document.getElementById("menuContent")

            mClose.classList.remove('block')
            mClose.classList.add('hidden')
            mOpen.classList.remove('hidden')
            mOpen.classList.add('block')
            mContent.classList.add('hidden')
        }
    }

    return (
        <>
            <div id='radnavbar' className="hidden py-2 px-12 bg-white md:flex flex-row justify-between items-center font-light fixed z-50 top-0 w-full" style={{ fontFamily: "'Karla', sans-serif" }}>
                <img id='radlogo' className='pl-1 h-8 w-auto object-contain' src={'/logo1-base.png'} />
                <div id='radnavcontent' className="flex flex-row">
                    <a href='#section2' className="rounded-xl px-4 py-2 bg-transparent hover:bg-[#E5E5E5] cursor-pointer">Why Audio</a>
                    <a href='#section3' className="rounded-xl px-4 py-2 bg-transparent hover:bg-[#E5E5E5] cursor-pointer">Meet Vobble</a>
                    <a href='#section4' className="rounded-xl px-4 py-2 bg-transparent hover:bg-[#E5E5E5] cursor-pointer">Vobblers&apos; Voice</a>
                    <a href='#section5' className="rounded-xl px-4 py-2 bg-transparent hover:bg-[#E5E5E5] cursor-pointer">About Us</a>
                </div>
                {/* <button
                    id='radnavbutton'
                    className='w-auto px-4 py-2 font-medium bg-[#6667AB] hover:bg-[#00A7B7] text-white border border-transparent hover:border-white rounded-lg transition ease-in-out delay-45 cursor-pointer'
                >
                    Join the Waitlist
                </button> */}
                {/* <VButton id='radnavbutton' buttonText="Join the Waitlist" buttonBgColor="#6667AB" buttonTextColor="white" buttonBorderColor="black" /> */}
            </div>

            <div className='md:hidden flex flex-col fixed z-50 top-0 w-full' style={{ fontFamily: "'Karla', sans-serif" }}>
                <div id='radnavbar-m' className="py-2 px-4 sm:px-16 bg-white flex flex-row justify-between items-center font-light">
                    <Link href="/" passHref>
                        <img id='radlogo-m' className='pl-1 h-8 w-auto object-contain' src={'/logo1-base.png'} />
                    </Link>
                    <div className="flex flex-row space-x-2">
                        {/* <VButton id='radnavbutton-m' buttonText="Join the Waitlist" buttonBgColor="#6667AB" buttonTextColor="white" buttonBorderColor="black" /> */}
                        {/* <button
                            id='radnavbutton-m'
                            className='w-auto px-4 py-2 text-sm sm:text-base font-medium bg-[#6667AB] hover:bg-[#00A7B7] text-white border border-transparent hover:border-white rounded-lg transition ease-in-out delay-45 cursor-pointer'
                        >
                            Join the Waitlist
                        </button> */}
                        <button onClick={menuBtnClick} className="p-2 rounded-xl bg-transparent hover:bg-[#E5E5E5]">
                            <svg id='menuOpen' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 block">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                            </svg>
                            <svg id='menuClose' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 hidden">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div id='menuContent' className='hidden bg-white h-screen'>
                    <a href='#section2' onClick={menuItemClick} className='border-b border-[#1E2330] bg-[#FFB100] font-bold text-xl flex flex-row justify-between items-center py-6 px-5 sm:px-16'>
                        <div className=''>Why Audio</div>
                        <div className='p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </a>
                    <a href='#section3' onClick={menuItemClick} className='border-b border-[#1E2330] bg-[#6667AB] font-bold text-xl flex flex-row justify-between items-center py-6 px-5 sm:px-16'>
                        <div className=''>Meet Vobble</div>
                        <div className='p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </a>
                    <a href='#section4' onClick={menuItemClick} className='border-b border-[#1E2330] bg-[#00A7B7] font-bold text-xl flex flex-row justify-between items-center py-6 px-5 sm:px-16'>
                        <div className=''>Vobblers&apos; Voice</div>
                        <div className='p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </a>
                    <a href='#section5' onClick={menuItemClick} className='border-b border-[#1E2330] bg-[#FFB100] font-bold text-xl flex flex-row justify-between items-center py-6 px-5 sm:px-16'>
                        <div className=''>About Us</div>
                        <div className='p-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}