import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/logo.png';
import netflix_spinner from '../../assets/netflix_spinner.gif';
import { logIn, signUp } from '../../../Firebase';
import { useSearchParams } from 'react-router-dom';

function Login() {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (signState === "Sign In") {
      await logIn(email, password);
    } else {
      // Validate before signing up
      if (!validateUsername(name)) {
        setError("Username should be at least 3 characters");
        setLoading(false);
        return;
      }

      if (!validateEmail(email)) {
        setError("Invalid email format.");
        setLoading(false);
        return;
      }

      if (!validatePassword(password)) {
        setError("Password 6 characters,one symbol, one uppercaseone digit.");
        setLoading(false);
        return;
      }

      await signUp(name, email, password);
    }

    setLoading(false);
  };

 
  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

 
  const validateUsername = (username) => {
    return /^[a-zA-Z]{3,}$/.test(username); 
  };

 
  const validatePassword = (password) => {
    return /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/.test(password);
  };

  return (
    loading ? (
      <div className="login-spinner">
        <img src={netflix_spinner} alt="" />
      </div>
    ) : (
      <div className='login'>
        <img src={logo} alt="login-logo" className='login-logo'/>
        <div className="login-form">
          <h1>{signState}</h1>
          <form>
            {signState === "Sign Up" && (
              <>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Your Name'
                />
           
              </>
              // jhdvjdstat
            )}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
            />
            {error && <p className="error-message">{error}</p>}

            <button onClick={user_auth} type='submit'>{signState}</button>
            <div className="form-help">
              <div className="remember">
                <input type="checkbox" />
                <label htmlFor="">Remember Me</label>
              </div>
              <p>Need Help ?</p>
            </div>
          </form>
          <div className="form-switch">
            {signState === "Sign In" ? (
              <p>New To Netflix ? <span onClick={() => setSignState("Sign Up")}>Sign Up Now</span></p>
            ) : (
              <p>Already have an account ? <span onClick={() => setSignState("Sign In")}>Sign In Now</span></p>
            )}
          </div>
        </div>
      </div>
    )
  );
}

export default Login;
