/*
- grab the user's email and password and some additional infos from req.body 
- create post api because post let's us send something to the api | this is just to check 
    - do an initial check if the user exists by checking if its email exists in our database 
        - true: grab the other info of the user including password,etc.
        - false: return an error response 
    - compare the user's hashed password from the database to the input field's password 
        - hash the input field's password first then start comparing 
    - password is correct 
        - true: 
            - create a jwt by using jwt.sign (jwt is used as a substitute password, to verify that the user is who they say they are)
            - insert all of the user's info into this jwt 
            - create a new file called .env (for environment variables or values that we don't want anyone else to see)
                - store JWT_SECRET inside this .env file 
            - pass the JWT_SECRET as an argument in jwt.sign 
            - this would produce a signed jwt unique to that user as a response of this api
        - false:
            - return an error response
*/
import { pool } from "../db";
export const logInRoute = {
    path = "/api/login",
    method = "post",
    handler = async(req,res) =>{
        const { email, password } = req.body; 

        // check if user exists
        const userExists = pool.query();
        if (!userExists) {
            res.sendStatus(409)
        }

        // find the info of the user from the database 
        const user = pool.query();

        //firstname, lastname, username, address, email, password, startingInfo, isVerified

    }
}