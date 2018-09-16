/**
	@author Xavier Collantes
	@date 09/14/2018
	@purpose Run local server for JS

*/
var http = require("http");

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end("Hello World!! ");
}).listen(8000);

console.log("Server is running at http://127.0.0.1:8000/");