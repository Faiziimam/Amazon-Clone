import React, { useState } from "react";
import { Link,useHistory } from "react-router-dom";
import { auth } from "./firebase";
import "./login.css";
function Login() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState(' ');
    const history=useHistory();
    const signIn=e=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(auth=>{
          if(auth)
          {
            history.push('/')
          }
        })
        .catch(error => alert(error.message))
    }
    const register=e=>{
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
           if(auth)
          {
            history.push('/')
          }
        })
        .catch(error => alert(error.message))
    } 
       
    

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Amazon-Logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-In</h1>
        <form action="">
          <h5>Email</h5>
          <input type="email" value={email} 
              onChange={e=>(setEmail(e.target.value))}
          />
          <h5>Password</h5>
          <input type="password" value={password} onChange={e=>(setPassword(e.target.value))}/>
          <button type="submit" onClick={signIn} className="login_signIn">Sign In</button>
          <p className="login_p">
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>
         <button onClick={register} className="login_Register">Register</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
