/*
- compiles every routes into this file
*/

import express from "express";
import { routes } from "./routes"; // return all of the file route from the routes directory in an array 

app.use(express.json());

// iterate thru all of the routes 
routes.forEach( (route) => {
    app[route.method](route.path, route.handler);
});