//@ts-check
const express = require('express');

const productController = require('./controller/product.controller');
const expectedErrorMiddleware = require('./middleware/expected-errors.middleware');
const unExpectedErrorMiddleware = require('./middleware/unexpected-errors.middleware');

const app = express();

app.get('/primary-key', productController.primaryKey);
app.get('/foreign-key', productController.foreignKey);
app.use(expectedErrorMiddleware);
app.use(unExpectedErrorMiddleware);

app.listen(3000);
