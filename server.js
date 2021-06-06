const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;
const HOST = '0.0.0.0';

app.use(function(req, res, next) {
    console.log('/' + req.method);
    next();
});

app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname+'/views/home_page.html'));

});

app.get('/lowcarbdiet', (req, res) => {
    res.sendFile(path.join(__dirname+'/views/low_carb_diet.html'));

});

app.use(express.static("public"));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);