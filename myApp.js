let express = require('express');
const res = require('express/lib/response');
let app = express();
require('dotenv').config();

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

app.use('/public', express.static(__dirname + '/public'));
const path = __dirname + '/views/index.html';
app.get("/", (req, res,) => {
    res.sendFile(path);
})
app.get('/json', (req, res) => {
    let message = "Hello json";
    const msgStyle = process.env.MESSAGE_STYLE;
    if (msgStyle === 'uppercase') {
        message = message.toUpperCase();
    };
    res.json({ message });
})
app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next()
},
    function (req, res) {
        res.json({ time: req.time })
    }
)


































module.exports = app;
