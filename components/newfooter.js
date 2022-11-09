import React from 'react'
import Link from 'next/link'

class NewFooter extends React.Component {
    render() {
        return (
            <div style={{ WebkitTapHighlightColor: 'transparent', fontFamily: "'Karla', sans-serif" }}>
                <div
                    className="w-full px-8 md:px-8 lg:px-24 py-16 mt-auto flex flex-col sm:flex-row bg-[#6667AB] text-sm items-start"
                >
                    <div className="w-full sm:w-1/2 flex flex-col space-y-6">
                        {/* <Link href="/" passHref> */}
                        <img
                            className="w-16 h-auto object-cover"
                            src="/logo1-white.png"
                        />
                        {/* </Link> */}
                        <div className="text-white/50">vobble — Where audio comes alive!<br />© 2022 Avie-Vinson Entertainment Pvt. Ltd. All rights (and lefts) reserved.</div>
                        <div className="flex flex-row flex-wrap justify-start items-center">
                            <a href="mailto:contact@vobble.co" className="group font-semibold text-[#FFB100] transition duration-300 pr-2 cursor-pointer">
                                Contact
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#FFB100]"></span>
                            </a>
                            <div className='pr-2 text-[#FFB100]'>·</div>
                            <a href="https://instagram.com/instagram/" target="_blank" rel="noopener noreferrer" className="group font-semibold text-[#FFB100] transition duration-300 pr-2 cursor-pointer">
                                Instagram
                                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-[#FFB100]"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewFooter