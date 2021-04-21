const http = require('http');

const hostname = 'localhost';
const port = 8000;
const baseUrl = 'http://' + hostname + ':' + port;

function start() {
    function onRequest(req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('Hello, Wolrd!');
        res.end();
    }

    server = http.createServer(onRequest);
    server.listen(port, hostname);
    console.log(`Server is running at` + baseUrl);
}

exports.start = start; //index가 MyServer를 읽어오기 위한 사전작업?