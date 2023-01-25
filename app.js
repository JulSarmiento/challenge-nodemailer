const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const indexRouter = require('./src/router/index');
const errorHandler = require('./src/middlewares/error.middleware');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + 'public'));

app.use('/', indexRouter);

app.use(errorHandler);

module.exports = app;

