/** 
Version 1.2 set up node server for HTML5 Applications
Server Module NodeJS
AppBrokerLtd || Ryan McLaughlin
Server.js
**/

var port = 8080;
var serverUrl = "127.0.0.1";
/** Path to HTML, will be as root directory for files, relative to this file **/
var rootUrl = "../"; // Use entire root folder to access version files
 
var connect = require("connect")
  , http = require("http")
  , fs   = require("fs")
  , path = require("path")
  , app
  ;

//Dev Environment Connections
app = connect()
  .use(connect.static("public"))
  .use("/js/lib/requirejs/", connect.static("node_modules/requirejs/"))
  .use("/js/lib/bootstrap/", connect.static("node_modules/bootstrap/dist/js"))
  .use("/js/lib/jquery/", connect.static("node_modules/jquery/dist"))
  .use("/node_modules", connect.static("node_modules"))
  .use('/test', connect.static('test/'))
  .use('/test', connect.static('public'))
  ;
 
//TODO:QA Environment Connections

function start() {
	function onRequest(req, res){
		var now = new Date();
	 
		var filename = req.url || "index.html";
		var ext = path.extname(filename);
		var localPath = path.join(__dirname, rootUrl);
		var validExtensions = {
			".html" : "text/html",			
			".js": "text/javascript", 
			".css": "text/css",
			".txt": "text/plain",
			".jpg": "image/jpeg",
			".gif": "image/gif",
			".png": "image/png",
			".xml": "text/xml",
			".json": "application/json",
			".eot": "application/vnd.ms-fontobject",
			".ttf": "application/x-font-ttf",
			".ttc": "application/x-font-ttf",
			".otf": "font/opentype",
			".woff": "application/x-font-woff",
			".ico": "image/x-icon"
		};
		var isValidExt = validExtensions[ext];
			localPath += filename;
			path.exists(localPath, function(exists) {
				if(exists) {
					console.log("Serving file: " + localPath);
					getFile(localPath, res, isValidExt);
				} else {
					console.log("File not found: " + localPath);
					res.writeHead(404);
					res.end();
				}
			});
	}
	 
	http.createServer(app).listen(port, serverUrl);
	console.log("Starting web server at " + serverUrl + ":" + port);
}

exports.start = start;
 
function getFile(localPath, res, mimeType) {
	fs.readFile(localPath, function(err, contents) {
		if(!err) {
			res.setHeader("Content-Length", contents.length);
			//Important - sets content types in the header, if content type is not set files will not load properly
			res.setHeader("Content-Type", mimeType);
			//console.log("Content-Type: " + mimeType);
			res.statusCode = 200;
			res.end(contents);
		} else {
			res.writeHead(500);
			res.end();
		}
	});
}