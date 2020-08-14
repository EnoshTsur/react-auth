import React from 'react';
import { Router, Route, Switch, } from 'react-router-dom'
import { createBrowserHistory, } from 'history'
import Login from './components/Login/Login'


function App() {

    const history = createBrowserHistory()

    return (
       <Router history={history}>
           
       </Router>
    );
}

export default App;
