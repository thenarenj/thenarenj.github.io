import { KavenegarApi } from "kavenegar";

const api = KavenegarApi({
    apikey: "api key",
});

const sendSMS = ({ message, receptor }) => {
    api.Send(
        {
            message: message,
            sender: "10004346",
            receptor: receptor,
        },
        function (response, status) {
            console.log(response);
            console.log(status);
        }
    );
};

const sendOTP = ({ token, receptor }) => {
    api.VerifyLookup(
        {
            receptor: receptor,
            token: token,
            template: "template-name",
        },
        function (response, status) {
            console.log(response);
            console.log(status);
        }
    );
};

export { sendSMS, sendOTP };
