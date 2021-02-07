//@ts-check
const ErrorResponse = require('../error-response.component');

class WrongProductIdAsPrimaryId {
	/**
	 *
	 * @param {Error} error
	 */
	constructor(error) {
		error.name = 'E_WRONG_PRODUCT_ID';
		throw new ErrorResponse(error, 404);
	}
}

module.exports = WrongProductIdAsPrimaryId;
