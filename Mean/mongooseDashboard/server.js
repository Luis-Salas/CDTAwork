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
app.get('/mongoose_form', (request, response) => {
  response.render('create')
})
app.post('/create', (request, response) =>{
  console.log(request.form)
})



app.listen(5000, () => console.log("listening on port 5000"));
