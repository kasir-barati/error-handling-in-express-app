//@ts-check

const config = {
	postgres: {
		forceDb: Boolean(
			Number(process.env.POSTGRES_FORCE_INIT),
		),
		dbName: process.env.POSTGRES_DB,
		dbUser: process.env.POSTGRES_USER,
		dbPort: Number(process.env.POSTGRES_PORT),
		dbHost: process.env.POSTGRES_HOST,
		dbPassword: process.env.POSTGRES_PASSWORD,
	},
};

if (
	config.postgres.forceDb === undefined ||
	config.postgres.dbHost === undefined ||
	config.postgres.dbName === undefined ||
	config.postgres.dbPassword === undefined ||
	config.postgres.dbPort === undefined ||
	config.postgres.dbUser === undefined
) {
	throw new Error('Unable to read the env file');
}

module.exports = config;
