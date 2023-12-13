import OrderForm from "../forms/OrderForm"

interface Props {
    title?: string,
    className?: string
}

const OrderModal = ({ title, className }: Props) => {
    return (
        <>
            {/* The button to open modal */}
            <label htmlFor="order_modal" className={className ? className : "btn btn-primary text-secondary-content"}>{title ? title : "ثبت سفارش"}</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="order_modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h3 className="text-lg font-bold">ثبت سفارش</h3>
                    <p className="py-4 text-sm leading-loose">برای درخواست مشاوره رایگان و یا ثبت سفارش، مشخصات خواسته شده را در فرم زیر ثبت کنید .</p>
                    <OrderForm />
                </div>
                <label className="modal-backdrop" htmlFor="order_modal">Close</label>
            </div>
        </>
    )
}

export default OrderModal