import React from 'react'
import { jwtStorage, } from '../../storage/simpleApi'

export default function Admin({ history, }) {

    React.useEffect(() => {
        const jwt = jwtStorage.get()
        if(!jwt) {
            history.push("/")
        }
    }, [])

    return (
        <div>
            <h1>Admin</h1>
        </div>
    )
}
