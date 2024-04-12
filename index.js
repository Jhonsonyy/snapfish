const express = require('express')
const path = require('path')
const app = express();


app.use(express.static(path.join(__dirname, /public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Route for serving the HTML page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, /public/index.html'));
});

app.post('/crad/Login', (req, res) => {
    const email = req.body.email;
    const Password = req.body.password;
    console.log(`Email: ${email}`)
    console.log(`Password: ${Password}`)
    res.json({message: "Requested"})
})

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
