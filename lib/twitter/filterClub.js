const {Transform} = require("stream");
const clubs = {
        psg: {
            value: 0
        }
        ,
        Olympique: {
            value: 0
        }
        ,
        Rennes: {
            value: 0
        }
        ,
        Nantes: {
            value: 0
        }
        ,
        Lille: {
            value: 0
        }
        ,
        Montpellier: {
            value: 0
        }
        ,
        Lyon: {
            value: 0
        }
        ,
        Reims: {
            value: 0
        }
        ,
        Monaco: {
            value: 0
        }
        ,
        Angers: {
            value: 0
        }
        ,
        Nice: {
            value: 0
        }
        ,
        Strasbourg: {
            value: 0
        }
        ,
        Bordeaux: {
            value: 0
        }
        ,
        Brest: {
            value: 0
        }
        ,
        ASSE: {
            value: 0
        }
        ,
        Dijon: {
            value: 0
        }
        ,
        Metz: {
            value: 0
        }
        ,
        Amiens: {
            value: 0
        }
        ,
        Nimes: {
            value: 0
        }
        ,
        Toulouse: {
            value: 0
        }
    }
;

const filterClub = new Transform({
    readableObjectMode: true,
    transform(chunk, encoding, callback) {
        let result = JSON.parse(chunk);
        let tweet = result.text;
        const keys = Object.keys(clubs);
        keys.forEach(key => {
            key.toLowerCase();
            if (tweet != undefined) {
                if (tweet.includes(key.toString())) {
                    clubs[key].value += 1;
                    console.log(clubs)
                }
            }
        })
        this.push(clubs)
        callback();
    }
})

module.exports = filterClub;
