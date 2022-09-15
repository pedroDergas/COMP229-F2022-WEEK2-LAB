/*const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    const queryObject = url.parse(req.url, true).query;

    Logger(); // this is my first middleware


    if (queryObject['a'] === 'html') {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Hello from NodeJS Application');
    } else {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.end('Hello from NodeJS Application as json');
        console.log(queryObject);
    }


}).listen(3000);

function Logger() {
    console.log('Received a request');
}*/

const connect = require('connect');
const app = connect();

function threeThousand(req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello from NodeJS Application');
};

function hellohtml(req, res, next) {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1> Hello from NodeJS Application as html</h1>');
};

function goodbyeWorld(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.json({
        message: "Hello from NodeJS Application as json"
    }
    );
};

app.use('/html', hellohtml);
app.use('/json', goodbyeWorld);
app.use('/', threeThousand);



app.listen(3000);
