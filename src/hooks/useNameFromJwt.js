import React from 'react'
import { jwtStorage } from '../storage/simpleApi'
import JwtDecode from 'jwt-decode'

export default function useNameFromJwt() {
    const [ name, setName, ] = React.useState('Guset')

    React.useEffect(() => {
        const jwt = jwtStorage.get()
        if(jwt) {
            const { name } = JwtDecode(jwt)
            setName(name)
        }

    }, [])
    return name
}
