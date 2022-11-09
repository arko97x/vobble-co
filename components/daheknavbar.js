import VButton from "../components/vButton"

export default function DahekNavbar() {
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
            <div id="dahekHeader" className="w-full py-4 px-5 sm:px-10 top-0 fixed z-50 font-light">
                <div className="bg-white min-h-[4.2rem] p-1 border border-black rounded-xl hidden md:flex flex-row justify-between items-center">
                    <img className='px-4 h-8 w-auto object-contain' src={'/logo1-base.png'} />
                    <div className="flex flex-row">
                        <a href='#section2' className="rounded-xl px-4 py-2 bg-transparent hover:bg-[#E5E5E5] cursor-pointer">Why Audio</a>
                        <a href='#section3' className="rounded-xl px-4 py-2 bg-transparent hover:bg-[#E5E5E5] cursor-pointer">Meet Vobble</a>
                        <a href='#section4' className="rounded-xl px-4 py-2 bg-transparent hover:bg-[#E5E5E5] cursor-pointer">Testimonials</a>
                    </div>
                    <VButton buttonText="Join the Waitlist" buttonBgColor="#6667AB" buttonTextColor="white" buttonBorderColor="black" />
                </div>

                <div className="bg-white border border-black rounded-xl md:hidden flex flex-col justify-between items-center">
                    <div className="w-full flex flex-row justify-between items-center p-1 min-h-[4.2rem]">
                        <img className='px-4 h-8 w-auto object-contain' src={'/logo1-base.png'} />
                        <div className="flex flex-row space-x-1">
                            <VButton buttonText="Join the Waitlist" buttonBgColor="#6667AB" buttonTextColor="white" buttonBorderColor="black" />
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

                    <div id='menuContent' className='hidden bg-white h-screen w-full'>
                        <a href='#section2' onClick={menuItemClick} className='border-b border-[#1E2330] bg-[#FFB100] font-bold text-xl flex flex-row justify-between items-center py-6 px-4 sm:px-4'>
                            <div className=''>Why Audio</div>
                            <div className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </a>
                        <a href='#section3' onClick={menuItemClick} className='border-b border-[#1E2330] bg-[#6667AB] font-bold text-xl flex flex-row justify-between items-center py-6 px-4 sm:px-4'>
                            <div className=''>Meet Vobble</div>
                            <div className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </a>
                        <a href='#section4' onClick={menuItemClick} className='border-b border-[#1E2330] bg-[#00A7B7] font-bold text-xl flex flex-row justify-between items-center py-6 px-4 sm:px-4'>
                            <div className=''>Testimonials</div>
                            <div className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}