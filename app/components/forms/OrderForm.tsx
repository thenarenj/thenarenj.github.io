'use client'
import { sendOTP } from "@/app/services/kavenegar"
import { zodResolver } from "@hookform/resolvers/zod"
import { digitsFaToEn, phoneNumberValidator } from "@persian-tools/persian-tools"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"


enum Category {
    WEBSITE = "Website",
    APPLICATION = "Application",
}

type FormData = {
    name: string,
    phone: string,
    category: Category
}

const schema = z.object({
    name: z.string().min(3, { message: 'نام باید حداقل شامل ۳ حرف باشد' }),
    phone: z.string().refine((num) => phoneNumberValidator(digitsFaToEn(num)), 'شماره موبایل وارد شده صحیح نیست'),
    category: z.string()
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
        sendOTP(
            setFormStatus,
            data.name,
            data.phone,
            data.category
        )
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
            <div className="w-full max-w-xs">
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
                    <option value="" disabled>انتخاب کنید</option>
                    <option value="WEBSITE">طراحی سایت</option>
                    <option value="APPLICATION">طراحی اپلیکیشن</option>
                </select>
            </div>
            {formStatus !== 200 &&
                <button type="submit" className="btn btn-primary" disabled={formStatus === 'loading'} >
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