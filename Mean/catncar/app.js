const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer(function (request, response){
   console.log('client request URL: ', request.url);
   // this is how we do routing:
   if(request.url === '/') {
       fs.readFile('views/cars.html', function (errors, contents){
           response.writeHead(200, {'Content-Type': 'text/html'} );  // send data about response
           response.write(contents);  //  send response body
           response.end(); // finished!
       });
   }
   else if(request.url.match("\.png$")){
       var imagePath = path.join(__dirname, 'images', request.url);
       var fileStream = fs.createReadStream(imagePath);
       response.writeHead(200, {"Content-Type": "image/png"});
       fileStream.pipe(response)
   }
   // request didn't match anything:
   else {
       response.writeHead(40);
       response.end('URL requested is not available.');
   }
});
// tell your server which port to run on
server.listen(7077);
// print to terminal window
console.log("Running in localhost at port 7077");