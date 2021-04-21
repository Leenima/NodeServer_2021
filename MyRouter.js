function route(pathname, handle, res) {
    console.log('Routing request for ' + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](res);
    } else {
        console.log('No handler for ' + pathname);
        let Body = '404 Not Found';
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write(Body);
        res.end();
    }
}

exports.route = route;