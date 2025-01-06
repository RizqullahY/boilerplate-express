# Basic Node and Express

This is the boilerplate code for the Basic Node and Express Challenges. Instructions for working on these challenges start at https://www.freecodecamp.org/learn/apis-and-microservices/basic-node-and-express/


kalau mau pakai env require('dotenv').config();

example
app.get('/json', (req, res) => {
    let message = "Hello json";
    const msgStyle = process.env.MESSAGE_STYLE;
    if (msgStyle === 'uppercase') {
        message = message.toUpperCase();
    };
    res.json({ message })
})

simple logger
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});
