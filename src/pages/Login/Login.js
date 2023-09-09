import React from "react";
import "./Login.scss";

const Login = () =>{
    return(
        <div className="cover">
            <div className="login">
                <form>
                <h1>Log in</h1>

                <div className="input-box">
                    <input type="email" placeholder="E-mail" required/>
                    <i className="fas fa-user"></i>
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                    <i className="fas fa-lock"></i>
                </div>

                <div className="remember-forgot">
                    <label>
                        <input type="checkbox"/> Remember me!
                        <a href="www.gmail.com"> Forgot password?</a>
                    </label>
                </div>

                <button type="submit" className="btn-login">Login</button>

                <div className="register-link">
                    <p>Create account?<a href="/Register"> Register</a></p>
                </div>

                </form>
            </div>
        </div>
    )
}

export default Login;