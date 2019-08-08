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
   response.render('index')
});
app.post('/create', (request, response) => {
  console.log(request.body)
  request.session.name = request.body.name
  request.session.location = request.body.location
  request.session.language = request.body.language
  request.session.comment = request.body.comment

  response.redirect('/success')
})
app.get('/success', (request, response) =>{
  // console.log(request.sessio)
  data ={
    name : request.session.name,
    location : request.session.location,
    comment : request.session.comment,
    language : request.session.language,

  }
  response.render('success', data)

})



app.listen(5000, () => console.log("listening on port 5000"));
