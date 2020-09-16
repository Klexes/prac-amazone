import React from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'

const Login = () => {
    return (
        <div className="login">
            <Link to="/">
            <img className="login__logo" 
                src="http://pngimg.com/uploads/amazon/amazon_PNG24.png"
                alt=""
            />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input/>
                    <h5>Password</h5>
                    <input/>
                    <button className="login__signInButton">Sign In</button>
                    <p>
                     By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                    </p>
                </form>
                <button className="login__registerButton">Create An Account</button>
            </div>
        </div>
    )
}

export default Login
