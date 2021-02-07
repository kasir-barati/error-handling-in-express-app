//@ts-check
const ErrorResponse = require('../component/error-response.component');

/**@type {import('express').ErrorRequestHandler} */
function expectedErrorMiddleware(error, req, res, next) {
	if (error instanceof ErrorResponse) {
		console.error(error);

		res.status(error?.statusCode ?? 500).json({
			success: false,
			error: [error.name],
			data: null,
		});
	} else {
		next();
	}
}

module.exports = expectedErrorMiddleware;
