function start(res) {
    let Body = '<head><meta charset ="UTF-8"/></head>'
    body += '<body><div>Hello, world! <br> I am in the cloud class.</div>';
    body += '<div><a href="\hello">hello 페이지</a></div>' //클릭하면 hello로 가는거
    body += '<div><a href="\wait">5초 대기 페이지</a></div>' //클릭하면 hello로 가는거
    body += '</body>'
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(Body);
    res.end();
}

function hello(res) {
    let Body = 'This is my first web server.';
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(Body);
    res.end();
}

function wait(res) {
    setTimeout(function() {
        let Body = 'This is my first web server.';
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(Body);
        res.end();
    }, 5000); // 5초뒤에 실행해라
}

exports.start = start;
exports.wait = wait;
exports.hello = hello;