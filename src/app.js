//@ts-check
const express = require('express');

const productController = require('./controller/product.controller');
const expectedErrorMiddleware = require('./middleware/expected-errors.middleware');
const unExpectedErrorMiddleware = require('./middleware/unexpected-errors.middleware');

const app = express();

app.use(expectedErrorMiddleware);
app.use(unExpectedErrorMiddleware);

app.listen(3000);
