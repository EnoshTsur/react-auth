import React from 'react'
import { jwtStorage, } from '../../storage/simpleApi'


export default function Company({ history, }) {
   
    React.useEffect(() => {
        const jwt = jwtStorage.get()
        if(!jwt) {
            history.push("/")
        }
    }, [])

    return (
        <div>
            <h1>Company</h1>
        </div>
    )
}
