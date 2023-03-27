import { textAlign } from '@mui/system'
import React from 'react'
import './login.modul.scss'

export default function Login() {
  return (
    <div className='root'>
        {/* <h1>Login</h1> */}
        {/* <label >Username or email address</label> */}
        <input type="text" placeholder='login' />
        <input type="text" placeholder='password'/>
        <button>Sign in</button>
    </div>

  )
}
