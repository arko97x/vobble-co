import React from 'react'
import Link from 'next/link'

class Footer extends React.Component {
    render() {
        return (
            <div style={{ WebkitTapHighlightColor: 'transparent' }}>
                <div
                    className="w-full px-8 md:px-8 lg:px-24 py-16 mt-auto flex flex-col sm:flex-row bg-[#6667AB] text-sm items-start"
                >
                    <div className="w-full sm:w-1/2 flex flex-col space-y-6">
                        {/* <Link href="/" passHref> */}
                        <img
                            className="w-20 h-auto object-cover"
                            src="/logo1-beta-footer.png"
                        />
                        {/* </Link> */}
                        <div className="text-white/50">vobble — Listen and Imagine with Joy!<br />© 2022 | All rights (and lefts) reserved.</div>
                        <div className="flex flex-row flex-wrap justify-start items-center">
                            {/* <Link href="/about" passHref>
                                <a className="group font-bold text-[#FFB100] transition duration-300 pr-2">
                                    About
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#FFB100]"></span>
                                </a>
                            </Link>
                            <div className='pr-2 text-[#FFB100]'>·</div> */}
                            <a href="mailto:contact@vobble.co" className="group font-bold text-[#FFB100] transition duration-300 pr-2">
                                Contact
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#FFB100]"></span>
                            </a>
                            {/* <div className='pr-2 text-[#FFB100]'>·</div>
                            <svg className="h-6 w-6 text-[#FFB100]" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="4" y="4" width="16" height="16" rx="4" />  <circle cx="12" cy="12" r="3" />  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" /></svg> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer