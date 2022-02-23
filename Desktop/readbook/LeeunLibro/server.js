//install express server
const express = require('express');
const path = require('path');

const app = express();

// serve only the static files form the disc directory
app.use(express.static('./dist/LeeunLibro'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {
        root: 'dist/angular-heroku/'
    }),
);

// Start the app by listening on the default heroku port

app.listen(process.env.PORT || 8080);