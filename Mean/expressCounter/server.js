const session = require('express-session');
const express = require("express");
const app = express();
app.use(express.static(__dirname +'/static'))
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
const sessionConfig  = {
  saveUninitialized: true,
  resave: false,
  name: 'session',
  secret: 'thisIsSuperSekret'
};
app.use(express.urlencoded({extended: true}));
app.use(session(sessionConfig));

app.get('/', (request, response) => {
    request.session.counter = request.session.counter ? request.session.counter +1: 1 ;
    console.log(request.session.counter)
    counter = request.session.counter
   response.render('index',{counter_val : counter})
});
app.post('/add2', (request, response)=>{
  request.session.counter += 1
  response.redirect("/")
})
app.post('/reset', (request, response)=>{
  request.session.destroy()
  response.redirect("/")
})



app.listen(5000, () => console.log("listening on port 5000"));
