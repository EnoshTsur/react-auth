import React from 'react';
import { jwtStorage, } from './storage/api'
import Login from './components/Login/Login'
import { storage, } from './storage/simpleApi'

function App() {

    const [isLogin, setLogin ] = React.useState(false)

    const eliStorgae = storage("Eli")
  

     

    React.useEffect(() => {
        const isExist = jwtStorage.getMapping(jwt => jwt ? jwt.length > 0 : false)
        setLogin(isExist)
    })

    return (
        <div>
            { isLogin ? (<h1>Hi dear guest! :) </h1>) : (<Login /> )}
        </div>
    );
}

export default App;
