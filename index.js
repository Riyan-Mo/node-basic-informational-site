const http = require('http');
const fs = require('fs/promises')

http.createServer((req,res)=>{
    const {url} = req;

    if(url=="/"){
        res.writeHead(200, {"Content-Type": "text/html"})
        readFile('index.html').then(content=>{
            res.write(content)
            res.end()
        })
    }
    else if(url=="/about"){
        res.writeHead(200, {"Content-Type": "text/html"})
        readFile('about.html').then(content=>{
            res.write(content)
            res.end()
        })
    }
    else if(url=='/contact-me'){
        res.writeHead(200, {"Content-Type": "text/html"})
        readFile('contact-me.html').then(content=>{
            res.write(content)
            res.end()
        })
    }
    else{
        res.writeHead(404, {"Content-Type": "text/html"})
        readFile('404.html').then(content=>{
            res.write(content)
            res.end()
        })
    }
}).listen(8080);

async function readFile(fileName){
    try{
        const content = await fs.readFile(`./${fileName}`, {encoding: 'utf8'});
        return content;
    }
     catch(error){
        console.log(error);
     }
} 