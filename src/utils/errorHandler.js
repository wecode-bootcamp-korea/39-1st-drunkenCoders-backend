const globalErrorHandler = (err, req, res, next) => {
	console.error(err.stack);
	err.statusCode = err.statusCode || 500;
	res.status(err.statusCode).json({ message: err.message });
}

module.exports = { globalErrorHandler }