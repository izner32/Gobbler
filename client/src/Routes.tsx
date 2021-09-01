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
                <PrivateRoute>
                    {/* authorized page | newsfeed */}
                </PrivateRoute>
            </Switch>
        </Router>
    )
}

export default Routes;
