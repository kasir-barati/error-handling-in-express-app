//@ts-check
const { ForeignKeyConstraintError } = require('sequelize');

const ErrorResponse = require('../error-response.component');

class WrongProductIdAsForeignKey extends ForeignKeyConstraintError {
	/**
	 *
	 * @param {ForeignKeyConstraintError} error
	 */
	constructor(error) {
		super(error);
		error.name = 'E_WRONG_PRODUCT_ID';
		throw new ErrorResponse(error, 404);
	}
}

module.exports = WrongProductIdAsForeignKey;
