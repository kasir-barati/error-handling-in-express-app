//@ts-check
const { ForeignKeyConstraintError } = require('sequelize');

const WrongProductIdAsPrimaryId = require('../component/custom-express-error/wrong-pk-product-id.component');
const WrongProductIdAsForeignKey = require('../component/custom-express-error/wrong-fk-product-id.component');

/**@type {import('express').RequestHandler} */
function primaryKey(req, res, next) {
	let error = new Error(
		'Entered product id as PK does not exists in database.',
	);
	next(new WrongProductIdAsPrimaryId(error));
}

/**@type {import('express').RequestHandler} */
function foreignKey(req, res, next) {
	let error = new ForeignKeyConstraintError({
		message:
			'Entered product id as FK does not exists in database',
		fields: ['productId'],
		index: '',
		parent: new Error(),
		table: 'Product',
	});
	next(new WrongProductIdAsForeignKey(error));
}

module.exports = {
	primaryKey,
	foreignKey,
};
