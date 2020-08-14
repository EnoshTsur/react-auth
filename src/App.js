import React from 'react';
import { Router, Route, Switch, } from 'react-router-dom'
import { createBrowserHistory, } from 'history'
import Login from './components/Login/Login'
import Admin from './components/Admin/Admin'
import Company from './components/Company/Company'
import Error from './components/Error/Error'


function App() {

    const history = createBrowserHistory()

    return (
        <Router history={history}>
            <Switch>
                <Route
                    path="/admin"
                    render={() => <Admin history={history} />}
                />
                <Route
                    path="/company"
                    render={() => <Company history={history} />}
                />
                <Route
                    exact path="/error"
                    render={() => <Error />}
                />
                <Route
                    exact path="/"
                    render={() => <Login history={history} />}
                />
            </Switch>
        </Router>
    );
}

export default App;

// export const jwtStorage = storage("jwt")
