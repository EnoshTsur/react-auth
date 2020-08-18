import React from 'react'
import { jwtStorage, } from '../storage/simpleApi'
import jwtDecode from 'jwt-decode'


export function useRedirectByJwt(history){
    
    React.useEffect(() => {
        const jwt = jwtStorage.get()
        if(!jwt) {
            history.push("/")
            return
        }
        const { scope, } = jwtDecode(jwt)
        history.push(`/${scope}`)
    }, [])

}