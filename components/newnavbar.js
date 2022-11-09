import React from 'react'
import Link from 'next/link'
import AllowedUIDs from "../allowed-uid"
import { useRouter } from "next/router"

export default function NewNavbar() {
    var allowed = ""
    allowed = AllowedUIDs()
    const router = useRouter()
    const uid = router.query.uid


    return (
        <div style={{ WebkitTapHighlightColor: 'transparent', fontFamily: "'Gaegu', cursive" }}>
            <header
                className="py-3 px-8 md:px-8 lg:px-24 border-b-2 border-b-white bg-white backdrop-blur-lg flex flex-wrap items-center fixed z-40 top-0 w-full"
            >

                <div className="flex-1 flex justify-between items-center">
                    {/* <Link href="/" passHref> */}
                    <img className='sm:block hidden h-7 w-auto object-contain' src={'/logo1-beta-header.png'} />
                    <img className='sm:hidden block h-7 w-auto object-contain' src={'/icon1.png'} />
                    {/* </Link> */}
                </div>

                <div className="flex items-center w-auto" id="menu">
                    <nav>
                        <ul
                            className="flex items-center space-x-4 justify-between py-1"
                        >
                            <li className={"text-sm"} id="home">
                                <Link href={'/newindex'} passHref>
                                    <a className="block text-[#6667AB] hover:text-[#00A7B7] rounded-xl font-medium">
                                        What is Vobble?
                                    </a>
                                </Link>
                            </li>
                            <li className={"text-sm"} id="content">
                                <Link href={'/newindex'} passHref>
                                    <a className="block text-[#6667AB] hover:text-[#00A7B7] rounded-xl font-medium">
                                        About Us
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