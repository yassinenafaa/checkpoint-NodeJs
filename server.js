const http = require("http");

http
    .createServer((request, response) => {
        response.end("Hello Node !!!");
    })
    .listen(3000);
