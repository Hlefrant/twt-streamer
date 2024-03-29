const request = require("request");
const splitter = require("./splitter");
const filterClub = require("./filterClub");

const httpStream = request.get(`${process.env.TWITTER_API_STREAM_URL}/statuses/filter.json?track=ligue1`, {
    oauth: {
        consumer_key: process.env.TWITTER_API_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_API_CONSUMER_SECRET,
        token: process.env.TWITTER_API_TOKEN,
        token_secret: process.env.TWITTER_API_TOKEN_SECRET
    }
})


const tweetStream = httpStream
    .pipe(splitter)
    .pipe(filterClub)
module.exports = tweetStream;



