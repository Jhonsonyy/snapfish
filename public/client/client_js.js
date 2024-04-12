const Email = document.getElementById('Email');
const Password = document.getElementById('Password')


const button = document.getElementById('loginBtn');



const getValues = async () => {
    
    const data = {
        email: Email.value,
        password: Password.value
    };
    
    // Define the URL of the server
    const url = 'https://localhost/crad/Login'; // Replace with your server URL
    
    // Define the options for the fetch request
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Specify the content type as JSON
        },
        body: JSON.stringify(data) // Convert data to JSON string
    };
    
    // Send the POST request
    fetch(url, options)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Parse the JSON response
        })
        .then(data => {
            // Handle the response data
            console.log('Response:', data);
        })
        .catch(error => {
            // Handle any errors
            console.error('Error:', error);
        });



}


button.addEventListener('click', getValues)
