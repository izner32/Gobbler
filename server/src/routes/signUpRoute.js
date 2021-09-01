/* 
- grab the user's email and password and some additional infos from req.body 
- create put api thats lets you add user's email and password to the database 
    - connect to database [UNFINISHED]
    - check if the user exists already [UNFINISHED]
    - add additional security by salting and peppering the password 
        - for pepper, create an env file for creating secured keys 
    - hash the user's password before sending it into the database 
    - create a verification string [UNFINISHED]
    - create a default info of some users that is to be passed along with the password,email,etc.
    - insert user's email,password,starting info into the database 
        - after inserting to the database, grab the id of the user (id is automatically generated when creating a new object in mongodb)
    - create a jwt by using jwt.sign (jwt is used as a substitute password, to verify that the user is who they say they are) | we would only do this step because we want the user to be logged in after signing up
        - insert all of the user's info into this jwt 
        - create a new file called .env (for environment variables or values that we don't want anyone else to see)
            - store JWT_SECRET inside this .env file 
        - pass the JWT_SECRET as an argument in jwt.sign 
        - this would produce a signed jwt unique to that user as a response of this api
*/
import bcrypt from "bcrypt"; // for hashing password  
import { v4 as uuid } from 'uuid'; // for salting the password | salting and peppering is for adding additional security
import { pool } from "../db"; // for querying to postgres


// creatign an object, send this object to the server file
export const signUpRoute = {
    path: "/api/signup",
    method: "put", 
    handler: async (req,res) => {
        const { firstName, lastName, username, email, password } = req.body; // grabbing the info we would send to the database 

        // connect to database 

        // check if the user exists 

        // salt and pepper the password
        const salt = uuid(); // uuid generates a random key string 
        const pepper = process.env.PEPPER_STRING; // grab the value of pepper string from .env file 

        // hash the user's password - this is an async function 
        const passwordHash = await bcrypt.hash(salt + password + pepper, 10); // encrypt it into 10 digits 

        // default info for user 
        const startingInfo = {
            image = "",
        }

        // inserting into database - haven't setup database yet so imma use generic name such as tableName 
        pool.query(
            `INSERT INTO tableName(firstname, lastname, username, address, email, password, startingInfo, isVerified)
            VALUES(
                ${firstName}, 
                ${lastName}, 
                ${username}, 
                ${email}, 
                ${password}, 
                ${startingInfo},
                "false" // isVerified = false, because user needs to verify their email first 
            )`,
            (err, res) => {
                console.log(err, res);
                pool.end();
            }
        );

        // grabbing the user's id 
        const newId = pool.query(`SELECT curvval(user_id_seq)`); // curvval is for grabbing the last newly inserted id 

        // creating a jwt that we would store to the user's browser to keep them logged in 
        jwt.sign({
            // use these info for the basis of jwt token
            id: newId,
            email,
        },
        process.env.JWT_SECRET, // signing token with a jwt secret from our .env file 
        {
            expiresIn: '8760', // this jwt's gonna expire in a year 
        },
        (err, token) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).json({ token }); // return the generated token 
        });
    }
}