const express = require('express');
const app = express();
const port = 3000;
const user = require('./user.json');
app.get('/', (req, res) => res.send('Hello World!'));

app.get("/user", (req, res) => {
    res.send(user);
});
app.listen(port);

