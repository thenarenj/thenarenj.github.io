import { FaInstagram } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { RiMailOpenFill } from "react-icons/ri";
import OrderModal from "../modal/OrderModal";
import Link from "next/link";

const Home = () => {
    return (
        <div id="home" className="carousel-item h-full bg-secondary-content">
            <div className='container mx-auto mb-16 px-4 flex flex-col justify-center items-center gap-8'>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="mt-4 leading-9">برای مشاوره و ثبت سفارش طراحی سایت و اپلیکیشن می توانید از
                            &nbsp;
                            <OrderModal className="btn btn-sm btn-secondary" title="این فرم" />
                            &nbsp;
                            استفاده کنید .
                        </div>
                        <h1 className="card-title my-4">راه های ارتباطی</h1>
                        <div className="flex flex-col gap-4">
                            <Link href='https://instagram.com/narenj.web' className='btn btn-outline btn-secondary'>
                                <FaInstagram className="text-2xl" />
                                اینستاگرام
                            </Link>
                            <Link href='https://t.me/narenj_web' className='btn btn-outline btn-secondary'>
                                <FaTelegramPlane className="text-2xl" />
                                تلگرام
                            </Link>
                            <Link href='tel:+981144422984' className='btn btn-outline btn-secondary'>
                                <FaPhoneFlip className="text-xl" />
                                تماس
                            </Link>
                            <Link href='mailto:narenj.official@gmail.com' className='btn btn-outline btn-secondary'>
                                <RiMailOpenFill className="text-2xl" />
                                ایمیل
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home