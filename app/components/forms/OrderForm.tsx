'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { digitsFaToEn, phoneNumberValidator } from "@persian-tools/persian-tools"
import axios from "axios"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"


enum Category {
    Moshavere = "مشاوره",
    Website = "سایت",
    Application = "اپلیکیشن",
}

type FormData = {
    name: string,
    phone: string,
    category: Category,
    description: string
}

const schema = z.object({
    name: z.string().min(3, { message: 'نام باید حداقل شامل ۳ حرف باشد' }).max(15, { message: 'نام باید حداکثر شامل ۱۵ حرف باشد' }),
    phone: z.string().refine((num) => phoneNumberValidator(digitsFaToEn(num)), 'شماره موبایل وارد شده صحیح نیست'),
    category: z.string().min(1, { message: 'یک موضوع انتخاب کنید' }),
    description: z.string()
})

export default function OrderForm() {
    const [formStatus, setFormStatus] = useState<number | string>('')

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({ resolver: zodResolver(schema) })

    const onSubmit = handleSubmit((data) => {
        setFormStatus('loading');
        axios.post('/api/contact/', {
            name: data.name,
            phone: data.phone,
            category: data.category,
            description: data.description
        })
            .then((res) => setFormStatus(res.status))
            .catch((err) => setFormStatus(err.status))

    })

    // useEffect(() => {
    //     if (formStatus === 200) {
    //         reset()
    //     }
    // }, [formStatus])

    return (
        <form onSubmit={onSubmit}
            className="flex flex-col justify-center items-center"
        >
            <div className="w-full mb-4">
                {formStatus === '' ? null :
                    formStatus === 'loading' ? <div className="w-full p-2 text-sm text-center bg-primary text-secondary-content rounded-lg">لطفا شکیبا باشید ...</div> :
                        formStatus === 200 ? <div className="w-full p-2 text-sm text-center bg-green-600 text-secondary-content rounded-lg leading-loose">
                            اطلاعات شما با موفقیت ارسال شد، کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت.
                        </div> :
                            <div className="w-full p-2 text-sm text-center bg-red-600 text-secondary-content rounded-lg leading-loose">خطا در ارسال اطلاعات، لطفا دقایقی دیگر مجدد تلاش کنید .</div>
                }
            </div>
            <div className="w-full max-w-xs">
                <label htmlFor="name" className="text-sm">
                    نام
                    {errors.name?.message && <span className="mr-2 text-xs text-primary">{errors.name?.message}</span>}
                </label>
                <input
                    disabled={formStatus === 200}
                    id="name"
                    className="input input-bordered input-md w-full max-w-xs mt-2 mb-4"
                    placeholder="نام"
                    {...register("name")}
                />
            </div>
            <div className="w-full max-w-xs">
                <label htmlFor="phone" className="text-sm">
                    شماره تماس
                    {errors.phone?.message && <span className="mr-2 text-xs text-primary">{errors.phone?.message}</span>}
                </label>
                <input
                    disabled={formStatus === 200}
                    id="phone"
                    dir="ltr"
                    className="input input-bordered input-md w-full max-w-xs mt-2 mb-4"
                    placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                    {...register("phone")}
                />
            </div>
            <div className="w-full max-w-xs mb-2">
                <label htmlFor="category" className="text-sm">
                    موضوع
                    {errors.category?.message && <span className="mr-2 text-xs text-primary">{errors.category?.message}</span>}
                </label>
                <select
                    disabled={formStatus === 200}
                    id="category"
                    className="select select-bordered w-full max-w-xs mt-2 mb-4"
                    {...register("category")}
                >
                    <option value="">انتخاب کنید</option>
                    <option value="مشاوره">مشاوره</option>
                    <option value="سایت">طراحی سایت</option>
                    <option value="اپلیکیشن">طراحی اپلیکیشن</option>
                </select>
            </div>
            <div className="w-full max-w-xs mb-2 flex flex-col">
                <label htmlFor="description" className="text-sm">
                    توضیحات
                </label>
                <textarea
                    placeholder="در صورت لزوم، بیشتر توضیح دهید"
                    disabled={formStatus === 200}
                    id="description"
                    className="textarea textarea-bordered mt-2 mb-4"
                    {...register("description")}
                />
            </div>
            {formStatus !== 200 &&
                <button type="submit" className="btn btn-secondary w-full max-w-xs text-secondary-content" disabled={formStatus === 'loading'} >
                    {formStatus === 'loading' ?
                        <span className="loading loading-dots loading-lg"></span>
                        :
                        <span>
                            ارسال
                        </span>

                    }
                </button>
            }
        </form>
    )
}