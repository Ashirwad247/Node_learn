const http = require('http');
const server = http.createServer((req, res)=>{
    // console.log(req)
    if(req.url === '/'){
        res.end('Welcome to out home page')
    }
    if(req.url ==='/about'){
        res.end('lorem')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>Cannot find the page</p>
        <a href="/">home</a>
    `)
    
})

server.listen(9000)