import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { db, auth } from "./firebase.js";
import logo from "./images/future.png"

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login_logo'
          src= {logo}
          alt=''
        />
      </Link>
      <div className='login_container'>
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='login_signInButton' type='submit' onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          {" "}
          By signing-in you agree to nothing as this is a fake clone done for
          the purposes of making a portfolio piece. No sales or transactions
          will occur.
        </p>

        <button className='login_registerButton' onClick={register}>
          Creat your Future Account
        </button>
      </div>
    </div>
  );
}

export default Login;
