function start(res) {
    let sBody = 'Hello, world! <br> I am in the cloud class.';
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(sBody);
    res.end();
}

function hello(res) {
    let sBody = 'This is my first web server.';
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(sBody);
    res.end();
}

exports.start = start;
exports.hello = hello;