import { FaInstagram } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { RiMailOpenFill } from "react-icons/ri";
import Image from "next/image";

const Home = () => {
    return (
        <div id="home" className="carousel-item h-full bg-secondary-content">
            <div className='container mx-auto mb-16 px-4 flex flex-col justify-center items-center gap-8'>
                {/* <Image src={'/assets/images/logotypefa.png'} className="mb-8" alt="logo" width={300} height={105} /> */}
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h1 className="card-title">راه های ارتباطی</h1>
                        <div className="mt-4">برای ثبت سفارش طراحی سایت و اپلیکیشن می توانید
                            &nbsp;
                            <a href="#" className="link link-secondary">
                                از این فرم
                            </a>
                            &nbsp;
                            استفاده کنید .
                        </div>
                        <p className="my-4">همچنین برای ارتباط با ما می توانید از لینک های زیر استفاده کنید‌ :</p>
                        <div className="flex flex-col gap-4">
                            <a href='https://instagram.com/narenj.web' className='btn btn-outline btn-primary'>
                                <FaInstagram className="text-2xl" />
                                اینستاگرام
                            </a>
                            <a href='https://t.me/narenj_web' className='btn btn-outline btn-primary'>
                                <FaTelegramPlane className="text-2xl" />
                                تلگرام
                            </a>
                            <a href='tel:+981144422984' className='btn btn-outline btn-primary'>
                                <FaPhoneFlip className="text-xl" />
                                تماس
                            </a>
                            <a href='mailto:narenj.official@gmail.com' className='btn btn-outline btn-primary'>
                                <RiMailOpenFill className="text-2xl" />
                                ایمیل
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home