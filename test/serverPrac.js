import http from 'http'

const server = http.createServer(function(request, response){
  response.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
  response.end('<div>Hello server</div>');
})
server.listen(2080,function(){
    console.log('서버 정상 작동함')
})
