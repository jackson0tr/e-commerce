import React, { useState } from "react";
import "./Register.scss";

const Register = () =>{

    const[firstName, setfirstName] = useState('');
    const[lastName, setlastName] = useState('');
    const[email, setemail] = useState('');
    const[password, setpassword] = useState('');

    const registerHandle = () =>{
        console.table(firstName,email,lastName, password)
    }

    return(
        <div className="cover">
            <div className="login">
                <form>
                <h1>Register</h1>

                <div className="input-box">
                    <input type="name" placeholder="First name" required value={firstName} onChange={(e)=>setfirstName(e.target.value)}/>
                </div>

                <div className="input-box">
                    <input type="name" placeholder="Last name" required value={lastName} onChange={(e)=>setlastName(e.target.value)}/>
                </div>

                <div className="input-box">
                    <input type="email" placeholder="Email" required value={email} onChange={(e)=>setemail(e.target.value)}/>
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Password" required value={password} onChange={(e)=>setpassword(e.target.value)}/>
                </div>

                <button onClick={registerHandle} type="submit" className="btn-login">Register</button>

                <div className="register-link">
                    <p>I have an account<a href="/Login"> Login</a> </p>
                </div>

                </form>
            </div>
        </div>
    )
}

export default Register;