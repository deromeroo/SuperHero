import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    return (
        <Router>
            <div>

                <Switch>
                    <Route exact path="/login" component={ PublicRoute } />

                    <Route path="/" component={ PrivateRoute } />
                    
                </Switch>

            </div>
        </Router>
    )
}
