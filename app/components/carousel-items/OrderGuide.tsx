import OrderModal from '../modal/OrderModal'

const OrderGuide = () => {
    return (
        <div id="guide" className="carousel-item h-full bg-secondary text-secondary-content">
            <div className='container mx-auto mb-12 px-4 flex flex-col justify-center items-center gap-8'>
                <h1 className="text-lg">مراحل ثبت سفارش :</h1>
                <ul className="timeline timeline-vertical lg:timeline-horizontal text-secondary">
                    <li>
                        <div className="timeline-start timeline-box">۱ - ثبت درخواست</div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-end timeline-box">۲ - بررسی نیازهای شما</div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-start timeline-box">۳ - تعیین زمان و هزینه</div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-end timeline-box">۴ - عقد قرارداد</div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-start timeline-box">۵ - تحویل به شما در زمان مشخص شده</div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-end timeline-box">۶ - آموزش استفاده و پشتیبانی فنی</div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-start">
                            <OrderModal title='حالا سفارش بده' />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default OrderGuide