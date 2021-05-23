import React, { useState } from 'react';
import Auth from '../../utils/auth';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../../utils/mutations';

// import conditionals

const SignupModal = () => {
    const [formState, setFormState] = useState({ username: '', firstname: '', lastname: '', email: '', password: '' });
    const [addUser, { error }] = useMutation(ADD_USER);

    const handleFormSubmit = async event => {
        event.preventDefault();
    
        // if the user is created successfully, then they will be redirected to the "/home" page
        try {
            const { data } = await addUser({
                variables: { ...formState }
            });
            Auth.userLogin(data.addUser.token)
            console.log(data);
        } catch(e) {
            console.log(e)
        }
    };

    // update state based on form input changes
    const handleChange = event => {
        const { name, value } = event.target;
    
        console.log({ name, value })
        // console.log(setFormState({ ...formState, [name]: value }))

        setFormState({

          ...formState,
          [name]: value
        });
      };


    
    return(
        <div>
            {/* Button trigger modal */}
            <button type="button" className="btn" data-toggle="modal" data-target="#signUpModal">
                Signup
            </button>

            {/* Sign-up Modal */}
            <div className="modal fade" id="signUpModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span id="signupCloseBtn" aria-hidden="true">×</span>
                    </button>
                </div>
                {/* Modal Body (username, email, password, and button) */}
                <div className="modal-body" type="text">
                    <form>
                        <div>
                            <label id="signupUsernameLabel" htmlFor="signup-username">Username</label>
                            <div><input value={formState.username} onChange={handleChange} id="signup-username-input" name="username" placeholder="Required" /></div>
                        </div>
                        <br />
                        <div>
                            <label id="signupFirstNameLabel" htmlFor="signup-firstName">First Name</label>
                            <div><input value={formState.firstname} onChange={handleChange} id="signup-firstname-input" name="firstname" placeholder="Required" /></div>
                        </div>
                        <br />
                        <div>
                            <label id="signupLastNameLabel" htmlFor="signup-lastName">Last Name</label>
                            <div><input value={formState.lastname} onChange={handleChange} id="signup-lastname-input" name="lastname" placeholder="Required" /></div>
                        </div>
                        <br />
                        <div>
                            <label id="signupEmailLabel" htmlFor="signup-email">Email</label>
                            <div><input value={formState.email} onChange={handleChange} id="signup-email-input" name="email" placeholder="Required" /></div>
                        </div>
                        <br />
                        <div>
                            <label id="signupPasswordLabel" htmlFor="signup-password">Password (minimum of 4 characters)</label>
                            <div><input value={formState.password} onChange={handleChange} id="signup-password-input" type="password" name="password" placeholder="Required" autoComplete="on"/></div>
                        </div>
                        <br />
                        <div>
                            <label id="signupConfirmPasswordLabel" htmlFor="signup-confirm-password">Confirm Password (minimum of 4 characters)</label>
                            <div><input id="signup-confirm-password-input" type="password" name="signup-confirm-password" placeholder="Required" autoComplete="on"/></div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="click" id="signupModalBtn" className="btn btn-primary" onClick={handleFormSubmit} >Signup</button>
                </div>
                {error && <div>Please Try Again</div>}
                </div>
            </div>
            </div>
        </div>
    );
};

export default SignupModal;