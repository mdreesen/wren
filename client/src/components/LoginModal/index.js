import React, { useState } from 'react';
// import Auth from '../../utils/'
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../../utils/mutations';


const LoginModal = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);
  
    // update state based on form input changes
    const handleChange = event => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value
      });
    };
  
    // submit form
    const loginFormHandler = async event => {
      event.preventDefault();
  
      try {
        const { data } = await login({
          variables: { ...formState }
        });

        console.log(data)
  
        // Auth.login(data.login.token);
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
        <div>
            {/* Button trigger modal */}
            <button type="button" id="loginBtn" className="btn" data-toggle="modal" data-target="#loginModal">
                Login
            </button>
            {/* Modal */}
            <div className="modal fade" id="loginModal" tabIndex={-1} role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="loginModalLabel">Login</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        {/* Modal Body (inputs and buttons) */}
                        <div className="modal-body">
                        <form>
                            <div>
                                <label id="usernameLabel" htmlFor="login-username">email</label>
                                <div><input id="login-email-input" name="email" value={formState.email} onChange={handleChange} autoComplete="on" /></div>
                            </div>
                            <div>
                            <br />
                            <div>
                                <label id="passwordLabel" htmlFor="login-password">Password</label>
                                <div><input id="login-password-input" type="password" name="password" autoComplete="on" value={formState.value} onChange={handleChange} /></div>
                            </div>
                            </div>
                        </form>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" id="loginModalBtn" className="btn btn-primary" onClick={loginFormHandler}>Login</button>
                        </div>
                        {error && <div>Please Try Again</div>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;