const express = require('express');
const morgan = require('morgan');
const { default: helmet } = require('helmet');
const compression = require('compression');
const app = express();

// init middlewares
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());

// init databases
require('./databases/init.mongodb');
const { checkOverload } = require('./helpers/check.connect');
checkOverload();

// init rounters

// handling error

module.exports = app;
