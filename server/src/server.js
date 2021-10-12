/*
- compiles every routes into this file
*/

import express from "express";
import { signUpRoute } from "./routes/signUpRoute.js"; // return all of the file route from the routes directory in an array 
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors())

app[signUpRoute.method](signUpRoute.path, signUpRoute.handler);
// iterate thru all of the routes 
// routes.forEach( (route) => {
//     app[route.method](route.path, route.handler);
// });