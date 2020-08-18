import React from 'react';
import { Router, Route, Switch, } from 'react-router-dom'
import { createBrowserHistory, } from 'history'
import Home from './components/Home/Home'
import Admin from './components/Admin/Admin'
import Company from './components/Company/Company'
import Error from './components/Error/Error'
import Signup from './components/Signup/Signup'



function App() {

    const history = createBrowserHistory()

    return (
            <Router history={history}>
                <Switch>
                    <Route
                        path="/admin"
                        render={() => <Admin history={history}/>}
                    />
                    <Route
                        path="/company"
                        render={() => <Company history={history}/>}
                    />
                    <Route
                        exact path="/error"
                        render={() => <Error />}
                    />
                    <Route
                        exact path="/signup"
                        render={() => <Signup history={history} />}
                    />
                    <Route
                        exact path="/"
                        render={() => <Home history={history}/>}
                    />
                </Switch>
            </Router>
    );
}

export default App;

// export const jwtStorage = storage("jwt")
