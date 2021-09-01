/* 
- creating a private route that returns a route which could only be accessed if you're an authorized user 
- if there is no value for user meaning no one is logged in, redirect them back to login page
*/
import { Redirect, Route } from 'react-router-dom';
import { useUser } from "./useUser";

const PrivateRoute = props => {
    // validate if user exists
    const user = useUser();

    if(!user){
        return <Redirect to="/login" />
    }

    return <Route {...props} />
}

export default PrivateRoute;
