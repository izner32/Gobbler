/* 
compilation of all frontend pages 
*/
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path = "">
                    {/* frontend page | landing page */}
                </Route>
                <PrivateRoute path="/newsfeed" exact> {/* remember that things we pass into private route gets passed into the route too */}
                    {/* authorized page | newsfeed */}
                </PrivateRoute>
            </Switch>
        </Router>
    )
}

export default Routes;
