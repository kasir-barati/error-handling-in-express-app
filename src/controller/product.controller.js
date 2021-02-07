//@ts-check
const { ForeignKeyConstraintError } = require('sequelize');

const errorCatcher = require('../util/error-catcher');

const productRepository = require('../repository/product.repository');

const {
	WrongProductIdAsPrimaryId,
	WrongProductIdAsForeignKey,
} = require('../component/custom-express-error/');

/**@type {import('express').RequestHandler} */
async function primaryKey(req, res, next) {
	await productRepository
		.findProductByPk()
		.catch((error) => {
			errorCatcher(error, [
				{
					OriginalError: WrongProductIdAsPrimaryId,
					ExpressError: WrongProductIdAsPrimaryId,
				},
			]);
		});
}

/**@type {import('express').RequestHandler} */
async function foreignKey(req, res, next) {
	await productRepository
		.createProduct({
			title: 'p1',
			brandId: '',
		})
		.catch((error) => {
			errorCatcher(error, [
				{
					OriginalError: ForeignKeyConstraintError,
					ExpressError: WrongProductIdAsForeignKey,
				},
			]);
		});
}

module.exports = {
	primaryKey,
	foreignKey,
};
