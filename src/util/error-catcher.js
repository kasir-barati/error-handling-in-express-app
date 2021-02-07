/**
 *
 * @param {Error} thrownError
 * @param {object[]} errors
 * @param {Error} errors[].OriginalError
 * @param {Error} errors[].ExpressError
 */
function errorCatcher(thrownError, errors) {
	errors.forEach((error) => {
		if (thrownError instanceof error.OriginalError) {
			throw new error.ExpressError(thrownError);
		}
	});
	throw thrownError;
}

module.exports = errorCatcher;
