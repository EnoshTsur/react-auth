import React from 'react'
import { useRedirectByJwt, } from '../../hooks/useAuth'

export default function Admin({ history, }) {

    useRedirectByJwt(history)

    return (
        <div>
            <h1>Admin</h1>
        </div>
    )
}
