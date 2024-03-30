const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/generate', (req, res) => {
    const gender = req.body.gender;
    // Generate user info based on the selected gender and other inputs
    // You can use libraries like faker.js to generate random user data
    const userInfo = {
        firstName: 'John',
        lastName: 'Doe',
        gender: gender,
        // Add more user info fields here
    };
    res.json(userInfo);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
