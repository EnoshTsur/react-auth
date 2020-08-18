import React from 'react'
import { useRedirectByJwt, } from '../../hooks/useAuth'
import useNameFromJwt from '../../hooks/useNameFromJwt'

export default function Company({ history, }) {
   
    useRedirectByJwt(history)

    const name = useNameFromJwt()

    return (
        <div>
            <h1>Hello { name }</h1>
        </div>
    )
}
