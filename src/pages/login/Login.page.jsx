import React from 'react';

import './Login.style.scss';

function Login() {
    return (
        <div className="login">>
           <input className="Login-email" type="email" placeholder="Email" value="" /> 
           <input className="Login-password" type="password" placeholder="Password" value="" />
           <button className="login-button">Login</button>
           <p>Don't have an account. <span>Register</span> here</p>
        </div>
    )
}

export default Login;
