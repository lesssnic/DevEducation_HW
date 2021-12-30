const URL = require('url');
const {GET_ADZUNA} = require('../constants/route');
const {getAdzuna} = require('../controllers/adzuna.controller');
const {getIndex} = require('../controllers/index.controller');

async function routerHandler(req, res, body) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    let result, error;
    const { method, url } = req;
    const { query, pathname } = URL.parse(url, true);
    switch (true) {
        case (req.method === "OPTIONS"):
            res.statusCode = 200;
            return res.end();
        case (pathname === '/'):
                await getIndex('index.html', 'text/html', res);
            //res.end();
            break;
        case (method ==='GET' && pathname.startsWith(GET_ADZUNA)):
            ({result, error} = await getAdzuna(query, pathname));
            break;
        default:
            await getIndex(pathname, 'text/html', res);
            return ;
            //res.statusCode = 404;
            //return res.end(JSON.stringify({ error: 'Route Not Found' }));
    }
    if (error) {
        res.statusCode = error.status;
        return res.end(JSON.stringify({ error }));
    } else if(result) {
        res.statusCode = result.status;
        res.end(JSON.stringify(result.data));
    }

}
module.exports = {routerHandler};
