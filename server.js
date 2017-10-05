// new code:
var session = require('express-session');
var express=require('express');
// original code:
var app = express();
// more new code:
app.use(session({secret: 'codingdojorocks'}));  // string for encryption

var counter=0;
app.get('/', function(request, response){
 response.write("this page has been visited "+ counter + " times!")
    response.end();
   counter = counter+1;
})
app.get('/doubletrouble', function(request, response){
    response.write("this page has been visited "+ counter + " times!")
    response.end();
   counter = counter+2;
})
app.get('/reset', function(request, response){

counter=0;
response.redirect('/')
})
app.listen(8000, function() {
    console.log("listening on port 8000");
  });