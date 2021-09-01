/* 
- creating a private route that returns a route which could only be accessed if you're an authorized user 
*/
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = props => {
    // validate if user exists

    return <Route {...props} />
}

export default PrivateRoute;
