import React from 'react'
import Login from '../Login/Login'
import { Router, Link, } from 'react-router-dom'
import { useRedirectByJwt } from '../../hooks/useAuth'

export default function Home({ history, }) {
    
    useRedirectByJwt(history)
    
    return (
        <div style={{
            display: 'flex',
        }}>
            <div style={{
                flexGrow: '1',
                padding: '0.5rem',
            }}>
                <h1>CouponBook</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, veritatis.
                    Dolorum non, fuga ab quam veritatis asperiores, quibusdam accusamus ea recusandae
                    harum beatae incidunt et ut nam laborum dolores earum?
                </p>
            </div>
            <div style={{
                flexGrow: '1',
                padding: '0.5rem',
                textAlign: 'center',
            }}>
                <Login history={history} />

                <Router history={history}>
                    <Link to="/signup">
                        <button>Signup</button>
                    </Link>
                </Router>
            </div>

        </div>
    )
}
