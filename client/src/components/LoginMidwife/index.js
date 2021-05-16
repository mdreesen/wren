import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_BIRTHWORKER } from '../../utils/mutations';


// TODO
// Midwife login form not working for logging in. getting error:
// UnhandledPromiseRejectionWarning: Error: WHERE parameter "email" has invalid "undefined" value
// it is switching to other pages after email and password is put in, but need to handle this better

function LoginMidwife() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [loginBirthWorker, { error }] = useMutation(LOGIN_BIRTHWORKER);

  // update state based on form input changes
  const handleChange = event => {
    const { name, value } = event.target;

    console.log({ name, value })

    setFormState({
      ...formState,
      [name]: value
    });
  };

  // submit form
  const loginFormHandler = async event => {
    event.preventDefault();

    try {
      const { data } = await loginBirthWorker({
        variables: { ...formState }
      });
      console.log(data)
      console.log(data.loginWorker)
      Auth.workerLogin(data.loginBirthworker.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: ''
    });
  };

    return(
        <div className="workerPage">
            <div className="workerFormContainer">
            <div className="formContainer">
                <form className="midwifeForm">
                    <h3>Worker Login</h3>
                    <div className="form-group">
                        <label for="workerEmail">Email address</label>
                        <input type="email" name="email" value={formState.email} onChange={handleChange} className="form-control" id="worker-login-email" aria-describedby="emailInput" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label for="workerPassword">Password</label>
                        <input type="password" name="password" value={formState.password} onChange={handleChange} className="form-control" id="worker-login-password" placeholder="Password" />
                    </div>
                    <div className="button-container">
                        <Link to="/" className="btn btn-primary">back</Link>
                        <button type="submit" className="btn btn-primary" onClick={loginFormHandler}>Login</button>
                    </div>
                    {error && <div>Incorrect Login</div>}
                </form>
            </div>
        </div>
   </div>
    );
}

export default LoginMidwife;