const express = require('express');
const userRouter = require('./routers/user');
const serviceRouter = require('./routers/service');
const widgetRouter = require('./routers/widget');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const app = express();

const port = 8080;
require('./db');

const router = express.Router();

app.use(cors());
app.use(express.json());

app.get('/about.json', function(req, res) {
    const filePath = path.join(__dirname, 'about.json');
    fs.readFile(filePath, {encoding: 'utf-8'}, function(err, data) {
        if (!err) {
            res.setHeader('Content-Type', 'application/json');
            res.write(data);
        } else {
            console.log(err);
        }
    });
});

app.use(userRouter);
app.use(serviceRouter);
app.use(widgetRouter);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});
