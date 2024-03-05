import Link from "next/link"
import { FaChevronLeft } from "react-icons/fa6"

const About = () => {
    return (
        <div id="about" className="carousel-item h-full bg-secondary-content">
            <div className='container mx-auto px-4 flex flex-col justify-center items-center gap-8'>
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">درباره ما</h2>
                        <div className='my-4 text-sm leading-loose'>
                            <p className="mb-2">
                                مجموعه نارنج از سال ۱۳۹۸ کار خود را در محوریت راهکارهای نرم افزاری آغاز کرد و در این مدت با طراحی اپلیکیشن های اختصاصی و همچنین انواع سایت در زمینه های :
                            </p>
                            <p className="flex items-center gap-1">
                                <FaChevronLeft className="text-primary" /> <span>فروشگاهی</span>
                            </p>
                            <p className="flex items-center gap-1">
                                <FaChevronLeft className="text-primary" /> <span>آموزشگاهی</span>
                            </p>
                            <p className="flex items-center gap-1">
                                <FaChevronLeft className="text-primary" /> <span>شرکتی</span>
                            </p>
                            <p className="flex items-center gap-1">
                                <FaChevronLeft className="text-primary" /> <span>شخصی</span>
                            </p>
                            <p className="mt-2">
                                زمینه ساز توسعه بسیاری از کسب و کار ها بوده است . جهت مشاوره و یا ثبت سفارش با ما در ارتباط باشید .
                            </p>
                        </div>
                        <div className="card-actions justify-end">
                            <Link href="#home" className="btn btn-outline btn-secondary">ارتباط با ما</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About