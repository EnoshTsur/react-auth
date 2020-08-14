import React from 'react'
import { useRedirectByJwt, } from '../../hooks/useAuth'

export default function Company({ history, }) {
   
    useRedirectByJwt(history)

    return (
        <div>
            <h1>Company</h1>
        </div>
    )
}
