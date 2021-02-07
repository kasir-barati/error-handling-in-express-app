//@ts-check
const { Model, DataTypes } = require('sequelize');

const { getSequelize } = require('./sequelize');

class Product extends Model {
	static col = {
		id: 'id',
		title: 'title',
		brandId: 'brandId',
	};
}

Product.init(
	{
		[Product.col.id]: {
			type: DataTypes.UUID,
			primaryKey: true,
		},
	},
	{
		sequelize: getSequelize(),
	},
);

module.exports = Product;
