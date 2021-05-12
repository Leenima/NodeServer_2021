function start(res) {
    let body = '<head><meta charset ="UTF-8"/></head>'
    body += '<body><div>Hello, world! <br> I am in the cloud class.</div>';
    body += '<div><a href="\hello">hello 페이지</a></div>' //클릭하면 hello로 가는거
    body += '<div><a href="\wait">5초 대기 페이지</a></div>' //클릭하면 wait로 가는거
    body += '<div><a href="\randomWait">무작위 대기 페이지</a></div>' //클릭하면 randomWait로 가는거
    body += '</body>'
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(body);
    res.end();
}

function hello(res) {
    let body = 'This is my first web server.';
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(body);
    res.end();
}

function wait(res) {
    setTimeout(function() {
        let body = 'This is my first web server.';
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(body);
        res.end();
    }, 5000); // 5초뒤에 실행해라
}

function randomWait(res) {
    let waitTime = Math.round(Math.random() * 10000.)
    setTimeout(function() {
        let body = 'Thank you for waiting for ' + waitTime + ' ms.';
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(body);
        res.end();
    }, waitTime); // 5초뒤에 실행해라
}
exports.start = start;
exports.wait = wait;
exports.randomWait = randomWait;
exports.hello = hello;