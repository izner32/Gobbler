/* 
- creating a private route that returns a route which could only be accessed if you're an authorized user 
- if there is no value for user meaning no one is logged in, redirect them back to login page
- use this higher order component to wrap private pages 
*/

import { useRouter } from "next/router";
import { useUser } from "./useUser";

// we gonna wrap private pages with this higher order component
const PrivateRoute = Component => {
    // returning a function so we could grab its props 
    const Auth = props => {
    
    const user = useUser();
    const router = useRouter();

    // validate if user exists
    if(!user){
        return router.push("/login");
    }
    // return the page if user is authorized
    return <Component {...props} />
    }
}

export default PrivateRoute;