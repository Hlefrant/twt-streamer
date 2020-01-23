require("dotenv").config();

const twitterStream = require("./lib/twitter");
const { server } = require("./lib/server");

server.listen(process.env.PORT);
