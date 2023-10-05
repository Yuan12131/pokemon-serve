const http = require('http');

const server = http.createServer(function(require, response){
  console.log(typeof(response));
  response.writeHead(200, {"Content-Type" : "text/html"});

  let doc = '<html> <head> </head> <body> <input type="submit"> </body> </html>'
  response.end(doc)
});

server.listen(8019);