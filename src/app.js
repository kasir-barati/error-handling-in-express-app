//@ts-check
const path = require('path');

require('dotenv').config({
	path: path.join(__dirname, '..', '.env'),
});
const express = require('express');

const {
	postgres: { forceDb },
} = require('./config');

const { getSequelize } = require('./model/sequelize');

const productController = require('./controller/product.controller');
const expectedErrorMiddleware = require('./middleware/expected-errors.middleware');
const unExpectedErrorMiddleware = require('./middleware/unexpected-errors.middleware');

const {
	middlewareWrapper,
} = require('./util/try-catch-wrapper');

const app = express();

app.get(
	'/primary-key',
	middlewareWrapper(productController.primaryKey),
);
app.get(
	'/foreign-key',
	middlewareWrapper(productController.foreignKey),
);
app.use(expectedErrorMiddleware);
app.use(unExpectedErrorMiddleware);

getSequelize()
	.sync({ force: forceDb })
	.then(() => {
		app.listen(3000);
	});
