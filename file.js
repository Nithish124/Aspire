const http=require('http')
const {readFileSync}=require('fs')
const home=readFileSync('./ind.html')
const page=readFileSync('./ind.css')
const server=http.createServer((req,res)=>{
    const url=req.url
    if(url==='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(home)
        res.end()
    }
    else if(url==='/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(page)
        res.end()
    }
})
server.listen(5000);