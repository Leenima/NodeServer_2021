const fs = require('fs');

const myHandler = require('./MyHandler');


function route(pathname, handle, res) {
    console.log('Routing request for ' + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](res);
    } else {
        pathFile = '.' + pathname + '.html'; //ex) ./page.html 
        if (fs.existsSync(pathFile)) { //파일이 있다면
            handle[pathname](res);
            console.log(pathFile + 'is found.');
            myHandler.htmlFile(res, pathFile);
        } else { //없으면
            console.log('No handler for ' + pathname);
            let Body = '404 Not Found';
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write(Body);
            res.end();
        }
    }
}

exports.route = route;