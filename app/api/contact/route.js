import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { KavenegarApi } from "kavenegar";
import { slugify } from "@/app/utils/utils";

let jobStatus = 200;

const smsApi = KavenegarApi({
    apikey: process.env.KAVENEGAR_API,
});

const sendOTP = async (token, token2 = "", token3 = "") => {
    await smsApi.VerifyLookup(
        {
            receptor: process.env.KAVENEGAR_OTP_RECEPTOR,
            token: token,
            token2: token2,
            token3: token3,
            template: process.env.KAVENEGAR_OTP_TEMPLATE,
        },
        function (response, status) {
            if (status === 200) jobStatus = 200;
            else jobStatus = 400;
            // console.log("response: ", response);
            // console.log("status: ", status);
        }
    );
};

const MAIL_HOST = process.env.MAIL_HOST;
const MAIL_PORT = process.env.MAIL_PORT;
const MAIL_USER = process.env.MAIL_USER;
const MAIL_PASSWORD = process.env.MAIL_PASSWORD;

const transporter = nodemailer.createTransport({
    host: MAIL_HOST,
    port: MAIL_PORT,
    tls: true,
    auth: {
        user: MAIL_USER,
        pass: MAIL_PASSWORD,
    },
});

export async function POST(request) {
    const body = await request.json();
    await transporter
        .sendMail({
            from: process.env.MAIL_SENDER_CONTACT,
            to: process.env.MAIL_RECEIVER,
            subject: "نارنج لینک - درخواست " + body.category,
            html: `
            <div dir="rtl">
                <h2>${body.name}</h2>
                <h3>شماره تماس : <span dir="ltr">${body.phone}</span></h3>
                <h3>موضوع : ${body.category}</h3>
                <p>توضیحات : ${body.description}</p>
            </div>
            `,
        })
        .then((res) => {
            jobStatus = 200;
        })
        .catch((err) => {
            jobStatus = 400;
        });

    sendOTP(slugify(body.name), body.phone, body.category);

    return NextResponse.json("finished", { status: jobStatus });
}
