//@ts-check
const { Sequelize } = require('sequelize');

const {
	postgres: { dbHost, dbName, dbPassword, dbPort, dbUser },
} = require('../config');

const _sequelize = new Sequelize({
	dialect: 'postgres',
	username: dbUser,
	password: dbPassword,
	host: dbHost,
	port: dbPort,
	database: dbName,
});

module.exports.getSequelize = () => _sequelize;
