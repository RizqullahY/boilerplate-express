// STARTER
let express = require('express');
let app = express();
// 
const res = require('express/lib/response');
const bodyParser = require('body-parser');
require('dotenv').config();

/** 7) Root-level Middleware - A logger */
//  place it before all the routes !
app.use(bodyParser.urlencoded({ extended: false }))

/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

/** 1) Meet the node console. */
app.use('*', (req, res, next) => {
    console.log('Hello World')
    next()
})

/** 2) A first working Express Server */
//app.get('/', function (req, res) {
//  res.send('Hello Express')
//})

/** 3) Serve an HTML file */
const path = __dirname + '/views/index.html';
app.get("/", (req, res,) => {
    res.sendFile(path);
})

/** 4) Serve static assets  */
app.use('/public', express.static(__dirname + '/public'));

/** 5) serve JSON on a specific route */
/** 6) Use the .env file to configure the app */
app.get('/json', (req, res) => {
    let message = "Hello json";
    const msgStyle = process.env.MESSAGE_STYLE;
    if (msgStyle === 'uppercase') {
        message = message.toUpperCase();
    };
    res.json({ message });
})

/** 8) Chaining middleware. A Time server */
app.get('/now', (req, res, next) => {
    req.time = new Date().toString();
    next()
},
    function (req, res) {
        res.json({ time: req.time })
    }
)

/** 9)  Get input from client - Route parameters */
app.get('/:word/echo', (req, res) => {
    res.json({ echo: req.params.word })
})

/** 10) Get input from client - Query parameters */
//
// /name?first=<firstname>&last=<lastname>
app.get('/name', (req, res) => {
    const firstname = req.query.first
    const lastname = req.query.last
    res.json({ name: `${firstname} ${lastname}` })
});

/** 12) Get data form POST  */
app.post('/name', (req, res) => {
    let name = req.body.first + ' ' + req.body.last;
    res.json({ name: name });
});




























// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------
module.exports = app;
