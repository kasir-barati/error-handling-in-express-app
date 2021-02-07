//@ts-check

class ErrorResponse {
	/**
	 *
	 * @param {Error} error
	 * @param {number} statusCode
	 */
	constructor(error, statusCode) {
		this.name = error?.name ?? 'E_UNKNOWN';
		this.message = error?.message ?? '';
		this.stack = error?.stack ?? null;
		this.statusCode = statusCode;
	}
}

module.exports = ErrorResponse;
