const http = require("http");
const fs = require("fs");
const {pipeline} = require("stream");
const ws = require("ws");

const server = http.createServer((request, response) => {
        let file = "./public";
        if (request.url === "/") {

            file += "/index.html";
        } else {
            file += request.url
        }
        const fileStream = fs.createReadStream(file);

        pipeline(
            fileStream,
            response,
            error => {
                if (error) {
                    console.error(error);
                    response.writeHead(500);
                    response.end("an error occured");
                }

                console.log("end of response");
            }
        )
    })
;
const wsServer = new ws.Server({
    server
})

module.exports = {
    server,
    wsServer
};
