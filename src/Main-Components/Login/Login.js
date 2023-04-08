import React from 'react'
import {Link} from 'react-router-dom'
import './Login.css'

const Login = () => {
  return (
    <>
      <div className="login">
        <div className='input_field'> 
        <label htmlFor="">Enter email</label><br />
        <input type="text" />
        </div>
        <div className='input_field'> 
        <label htmlFor="">Enter Password</label><br />
        <input type="text" />
        </div>
        
     
        <Link className='btn btn-success' to='/home'>Login</Link>
      </div>
    </>
  )
}

export default Login
