//@ts-check
const { Model } = require('sequelize');

class Product extends Model {
	static col = {
		id: 'id',
		title: 'title',
		brandId: 'brandId',
	};
}

module.exports = Product;
