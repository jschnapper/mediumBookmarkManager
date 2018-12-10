const express = require('express');
const path = require('path');
const app = express();

require('dotenv').config()

var redirectURL = 'https://jschnapper.github.io/mediumBookmarkManager/';

// alias name
app.use('/public', express.static(path.join(__dirname, 'static')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'views', 'home.html'));
});

app.listen(8080);

app.get('/medium', (req, res) => {
    res.redirect("https://medium.com/m/oauth/authorize?client_id=" + process.env.CLIENT_ID +
        "&scope=basicProfile&state=test&response_type=code&redirect_uri=" + redirectURL)
    console.log(res);
});