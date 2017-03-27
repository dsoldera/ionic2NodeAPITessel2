
var tessel = require('tessel');
var http = require('http');
var fs = require('fs');
var url = require('url');

// Configure our HTTP server to respond with "Hello from Tessel!" to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello from Tessel!\n");
});

// Listen on port 8080, IP defaults to 192.168.1.101. Also accessible through [tessel-name].local
server.listen(8080);

// Put a friendly message in the terminal
console.log("Server running at http://192.168.1.101:8080/");


////////////////////////////////////////////////////////////////////////////////////////////////////////
// var server = http.createServer(function (request, response) {
//   var urlParts = url.parse(request.url, true);
//   var ledRegex = /leds/;

//   if (urlParts.pathname.match(ledRegex)) {
//     toggleLED(urlParts.pathname, request, response);
//   } else {
//     showIndex(urlParts.pathname, request, response);
//   }
// });

// server.listen(8080);

// console.log('Server running at http://192.168.1.101:8080/');

// function showIndex (url, request, response) {
//   response.writeHead(200, {"Content-Type": "text/html"});
//   fs.readFile(__dirname + '/index.html', function (err, content) {
//     if (err) {
//       throw err;
//     }

//     response.end(content);
//   });
// }

// function toggleLED (url, request, response) {
//   var indexRegex = /(\d)$/;
//   var result = indexRegex.exec(url);
//   var index = +result[1];

//   var led = tessel.led[index];

//   led.toggle(function (err) {
//     if (err) {
//       console.log(err);
//       response.writeHead(500, {"Content-Type": "application/json"});
//       response.end(JSON.stringify({error: err}));
//     } else {
//       console.log('running toggleLed');
//       response.writeHead(200, {"Content-Type": "application/json"});
//       response.end(JSON.stringify({on: led.isOn}));
//     }
//   });
// }