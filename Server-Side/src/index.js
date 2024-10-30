const http = require('http')
const users = require('./mock/users')

const server = http.createServer((request,response)=>{
  console.log(`Request Method ${request.method} | Endpoint ${request.url}`)

if(request.url === "/users" && request.method === "GET"){
  response.writeHead(200,{"Content-Type": "application/json"})
  response.end(JSON.stringify(users))
}


  else{
    response.writeHead(200,{'Content-Type': 'text/html'})
  response.end("<h2> Rota Padrão</h2>")
  }
})

server.listen(3000,()=>console.log('servidor on-line porta 3000'))