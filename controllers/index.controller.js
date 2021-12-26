const fs = require('fs');
const path = require('path');

const getContentType = (url) => {
    switch(path.extname(url)) {
        case '.html':
            return 'text/html';
        case '.css':
            return 'text/css';
        case '.js':
            return 'text/javascript';
        case '.json':
            return 'application/json';
        default:
            return 'application/octate-stream';
    }

}

const getIndex = async (url, contentType, res) => {
    const file = path.join(`${__dirname}/../swagger/${url}`);
    const extension = getContentType(url);
    if(!extension) {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'Route Not Found' }));
    }else{
    fs.readFile(file, (err, content) => {
        if(err){
            res.writeHead(404);
            res.write('file not found');
            res.end();
        }else {
            res.writeHead(200, {'Content-type': extension});
            res.write(content);
            res.end();
        }
    })
    }
};

module.exports = {getIndex};
