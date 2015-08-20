var express = require('express');
var app = express();
var apiPort = process.env.PORT || 3036;

app.set('view engine', 'ejs'); // set up ejs for templating

app.use(express.static(process.cwd()+ '/../dist') );

app.listen(apiPort);
console.log('Server started.');