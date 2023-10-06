const http = require("http")

const server = http.createServer(function(request, response){
  console.log(request.url);

  function docMaker(title, href, text){
    return '<!DOCTYPE html> <head> <meta charset="UTF-8"> <title> ${title} </title> </head> <body> <a href = "${href}"> ${text} </a> </body> </html>';
  }

  if (request.url === '/'){
    let doc = docMaker("메인페이지", "/sub", "서브페이지로 이동!")
    response.writeHead(200, {"Content-Type" : "text/html" });
    response.end(doc);
  }

  if (request.url === '/sub'){
    let doc = docMaker("서브페이지", "/sub", "메인페이지로 이동!")
    response.writeHead(200, {"Content-Type" : "text/html" });
    response.end(doc);
  }
});
server.listen(8019)