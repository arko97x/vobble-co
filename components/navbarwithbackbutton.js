import Link from "next/link"
import VButton from "../components/vButton"

export default function NavbarWithBackButton() {
    return (
        <div className='flex flex-col fixed z-50 top-0 w-full' style={{ fontFamily: "'Karla', sans-serif" }}>
            <div className="py-2 px-4 sm:px-12 bg-white flex flex-row justify-between items-center font-light">
                <a href="https://vobble.co/dahek">
                    <img className='pl-1 h-8 w-auto object-contain' src={'/logo1-base.png'} />
                </a>
                <a href="https://vobble.co/dahek#section5" className="min-h-[2.6rem]">
                    <button className={`px-4 py-1 w-auto bg-white hover:bg-[#f8f8f8] text-vPurple rounded-xl border-black border-l-[2px] border-r-[2px] border-t-[2px] border-b-[5px] hover:border-b-2 font-medium`}>
                        BACK
                    </button>
                </a>
            </div>
        </div>
    )
}