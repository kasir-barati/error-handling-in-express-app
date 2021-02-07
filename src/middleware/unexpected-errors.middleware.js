//@ts-check

/**@type {import('express').ErrorRequestHandler} */
function unExpectedErrorMiddleware(error, req, res, next) {
	console.error(error);

	res.status(500).json({
		success: false,
		error: ['E_SERVER_ERROR'],
		data: null,
	});
}

module.exports = unExpectedErrorMiddleware;
