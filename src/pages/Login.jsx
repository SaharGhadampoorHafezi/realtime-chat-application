import React from 'react'
import add from '../images/addAvatar.png'

const Login = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className='logo'>Lama Chat</span>
            <span className="title">Register</span>
            <form action="">
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password'/>
                <button>Sign ip</button>
            </form>
            <p>You do not have an account? Register</p>
        </div>
    </div>
  )
}

export default Login