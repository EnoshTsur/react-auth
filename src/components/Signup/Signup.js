import React from 'react'
import { jwtStorage, } from '../../storage/simpleApi'

async function createNewCompany({ name, email, password, }) {
    const data = await fetch('http://localhost:8080/company/signup', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password, })
    })
    return await data.json()
}

export default function Signup({ history, }) {

    const [name, setName,] = React.useState('')
    const [email, setEmail,] = React.useState('')
    const [password, setPassword,] = React.useState('')

    return (
        <div>
            <input
                type="text"
                placeholder="name"
                onChange={e => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="email"
                onChange={e => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="password"
                onChange={e => setPassword(e.target.value)}
            />
            <button
                onClick={() => createNewCompany({ name, email, password, })
                    .then(({ content, success, }) => {
                        if(success) {
                            jwtStorage.set(content)
                            history.push('/company')
                            return
                        }
                        history.push('/error')
                    })
                    .catch(err => {
                        console.log(err)
                        history.push('/error')
                    })
                }
            >
                Send
            </button>
        </div>
    )
}
