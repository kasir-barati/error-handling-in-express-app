//@ts-check

function middlewareWrapper(fn) {
	return function (req, res, next) {
		return Promise.resolve(fn(req, res, next)).catch(next);
	};
}

function promiseWrapper(promise) {
	return promise
		.then(function (data) {
			return [null, data];
		})
		.catch(function (error) {
			return [error];
		});
}

module.exports = {
	promiseWrapper,
	middlewareWrapper,
};
