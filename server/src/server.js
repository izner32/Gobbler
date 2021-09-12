import express from "express";
import { routes } from "./routes"; // return all of the file route from the routes directory in an array 
// import { dbConnection } from "./db";

const app = express();

const main = async () => {
	try {
		await createConnection({
			type: 'postgres',
			host: 'localhost',
			port: 5432,
			username: 'renz',
			password: undefined,
			database: 'typeorm',
			entities: [Gobbles, User, UserInfo],
			synchronize: true,
		});
		console.log('Connected to Postgres');

		app.use(express.json());

        app.listen(8080, () => {
			console.log('Now running on port 8080');
		});

		// iterate thru all of the routes 
        routes.forEach( (route) => {
            app[route.method](route.path, route.handler);
        });

	} catch (error) {
		console.error(error);
		throw new Error('Unable to connect to db');
	}
};

main();