import React from 'react'
import { jwtStorage, } from '../storage/simpleApi'


export function useRedirectByJwt(history){
    
    React.useEffect(() => {
        const jwt = jwtStorage.get()
        if(!jwt) {
            history.push("/")
        }
    }, [])
}