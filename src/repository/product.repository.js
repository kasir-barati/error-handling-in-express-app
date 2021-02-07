//@ts-check
const Product = require('../model/product');

const {
	WrongProductIdAsPrimaryId,
} = require('../component/custom-express-error/');

/**
 *
 * @param {string} productId
 * @returns {Promise<Product>}
 */
async function findProductByPk(productId) {
	let product = await Product.findByPk(productId);

	if (!product) {
		let error = new Error('Wrong productId entered.');

		error.name = 'E_WRONG_PRODUCT_ID';

		throw new WrongProductIdAsPrimaryId(error);
	}

	return product;
}

/**
 *
 * @param {object} product
 * @param {string} product.title
 * @param {string} product.brandId
 * @returns {Promise<Product>}
 */
function createProduct(product) {
	return Product.create({
		[Product.col.title]: product.title,
		[Product.col.brandId]: product.brandId,
	});
}

module.exports = {
	findProductByPk,
	createProduct,
};
