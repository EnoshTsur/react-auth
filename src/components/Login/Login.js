import React from 'react'
import { jwtStorage, } from '../../storage/api'


async function getData({ type, email, password, }) {
    const data = await fetch(`http://localhost:8080/${type}/authenticate`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, })
    })
    return await data.json()
}

export default function Login() {

    const [email, setEmail,] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [type, setType] = React.useState('company')


    return (
        <div>
            <h1>Login</h1>
            <input
                type="email"
                placeholder="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />

            <select
                value={type}
                onChange={e => setType(e.target.value)}
            >
                <option value="company">Company</option>
                <option value="admin">Admin</option>
            </select>

            <button
                onClick={() => getData({ type, email, password, })
                    .then(({ content, }) => jwtStorage.set(content))
                    .catch(e => console.log(e))
                }
            >
                Login
            </button>

        </div>
    )
}
