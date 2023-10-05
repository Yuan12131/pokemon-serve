const http = require('http');
const fs = require('fs');
const { setTimeout } = require('timers/promises');

const server = http.createServer(function(request, response){
  response.writeHead(200, {"Content-Type" : "text/html"});

  if(request.url === "/"){
    
    setTimeout(2000, function(){
      location.href="http://localhost:8019/sub";
    })

    let doc = '<!DOCTYPE html> <head> <meta charset="UTF-8"> </head> <body> <a href = "http://localhost:8019/sub"> 서브로이동하기 </a> </body> </html>'

    response.end(doc);
  }
  
  if(request.url === "/sub"){
    fs.readFile("./class_setTimeOut.html", function(err, data){
      if (err){
        console.error("파일을 읽지 못했습니다.");
      } else {
        response.end(data);
      }
    })
  }

});

server.listen(8019);