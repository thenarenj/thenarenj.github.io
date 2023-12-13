import Link from "next/link";
import { RiHome5Line } from "react-icons/ri";
import { RiGuideLine } from "react-icons/ri";
import { RiInformationLine } from "react-icons/ri";
// import { RiGalleryLine } from "react-icons/ri";


const Footer = () => {
    return (
        <footer className="absolute bottom-0 right-0 left-0 z-10 pb-16 px-4">
            <div className='container mx-auto flex items-center justify-center'>
                <ul className="menu menu-horizontal bg-secondary-content border border-secondary rounded-box">
                    <li>
                        <Link href='#home' className="tooltip tooltip-top flex flex-col items-center" data-tip="خانه">
                            <RiHome5Line className="text-2xl " />
                            {/* خانه */}
                        </Link>
                    </li>
                    <li>
                        <Link href='#guide' className="tooltip tooltip-top flex flex-col items-center" data-tip="راهنمای ثبت سفارش">
                            <RiGuideLine className="text-2xl " />
                        </Link>
                    </li>
                    {/* <li>
                        <Link href='#portfolio' className="tooltip tooltip-top flex flex-col items-center" data-tip="نمونه کار">
                            <RiGalleryLine className="text-2xl " />
                        </Link>
                    </li> */}
                    <li>
                        <Link href='#about' className="tooltip tooltip-top flex flex-col items-center" data-tip="درباره">
                            <RiInformationLine className="text-2xl " />
                            {/* درباره */}
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer