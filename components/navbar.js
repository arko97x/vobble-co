import React from 'react'
import Link from 'next/link'
import AllowedUIDs from "../allowed-uid"
import { useRouter } from "next/router"

export default function Navbar() {
    var allowed = ""
    allowed = AllowedUIDs()
    const router = useRouter()
    const uid = router.query.uid

    // if (window.location.pathname == '/') {
    //     document.getElementById("home").classList.add('font-bold', 'text-[#00A7B7]')
    // }
    // if (window.location.pathname == '/content') {
    //     document.getElementById("content").classList.add('font-bold', 'text-[#00A7B7]')
    // }

    return (
        <div style={{ WebkitTapHighlightColor: 'transparent' }}>
            <header
                className="py-3 px-8 md:px-8 lg:px-24 border-b bg-white backdrop-blur-lg flex flex-wrap items-center fixed z-40 top-0 w-full"
            >

                <div className="flex-1 flex justify-between items-center">
                    {/* <Link href="/" passHref> */}
                    <img className='h-7 w-auto object-contain' src='/logo1-beta-header.png' />
                    {/* </Link> */}
                </div>

                <div className="flex items-center w-auto" id="menu">
                    <nav>
                        <ul
                            className="flex items-center space-x-6 justify-between py-1"
                        >
                            <li className={"text-sm" + (allowed ? "" : " hidden")} id="home">
                                <Link href={'/' + uid} passHref>
                                    <a className="block text-[#6667AB] hover:text-[#00A7B7] rounded-xl font-medium">
                                        Home
                                    </a>
                                </Link>
                            </li>
                            <li className={"text-sm" + (allowed ? "" : " hidden")} id="content">
                                <Link href={'/' + uid + '/content'} passHref>
                                    <a className="block text-[#6667AB] hover:text-[#00A7B7] rounded-xl font-medium">
                                        Content
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}