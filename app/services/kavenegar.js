import { KavenegarApi } from "kavenegar";

const api = KavenegarApi({
    apikey: process.env.NEXT_PUBLIC_KAVENEGAR_API,
});

const sendSMS = ({ message, receptor }) => {
    api.Send(
        {
            message: message,
            sender: process.env.NEXT_PUBLIC_SMS_SENDER,
            receptor: receptor,
        },
        function (response, status) {
            // console.log(response);
            // console.log(status);
        }
    );
};

const sendOTP = (setFormStatus, token, token2 = "", token3 = "") => {
    api.VerifyLookup(
        {
            receptor: process.env.NEXT_PUBLIC_OTP_RECEPTOR,
            token: token,
            token2: token2,
            token3: token3,
            template: process.env.NEXT_PUBLIC_OTP_TEMPLATE,
        },
        function (response, status) {
            if (status === 200) setFormStatus(status);
            else setFormStatus(status);
            // console.log("response: ", response);
            // console.log("status: ", status);
        }
    );
};

export { sendSMS, sendOTP };
