const fs = require('fs')
const https = require('https')

https.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => {
        if(err){
            res.writeHead(404);
            res.end(err);
        }
        else{
            res.writeHead(200);
            res.end(data);
        }
    })
}).listen(2000);