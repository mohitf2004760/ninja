
// server.js
// load the things we need
var express = require('express');
var app = express();
app.use( express.static( "public" ) ); //All static files must be placed under public folder

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('./index', {
        page_name:'home'
    });
});

app.get('/diary', function(req,res){
    res.render('./diary', {
        page_name:'diary'
    })
});

app.get('/join', function(req,res){
    res.render('./join',{
        page_name:'join'
    })
});

app.get('/pricing', function(req,res){
    res.render('./pricing',{
        page_name:'pricing'
    })
});

app.listen(3000);
console.log('3000 is the magic port');
