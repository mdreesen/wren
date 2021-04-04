import React from 'react';

// import conditionals
import Conditional from '../Conditional'

function SignupModal() {

    async function signupFormHandler(event) {
        event.preventDefault();

        const username = document.querySelector('#signup-username-input').value.trim();
        const firstname = document.querySelector('#signup-firstname-input').value.trim();
        const lastname = document.querySelector('#signup-lastname-input').value.trim();
        const email = document.querySelector('#signup-email-input').value.trim();
        const password = document.querySelector('#signup-password-input').value.trim();
        const confirmPassword= document.querySelector('#signup-confirm-password-input').value.trim();

        const userSignupUrl = '/api/users';
        const userLoginUrl = '/api/users/login';

        const signupFields = username && firstname && lastname && email && password && confirmPassword;

        console.log('button was clicked, yeay!')

        if (!signupFields) {
            console.log('!signupFields')
            return window.alert('All fields must be filled')
        } else {
            if (signupFields) {
                try {
                    const response = fetch(userSignupUrl, {
                        method: 'post',
                        body: JSON.stringify({
                            username,
                            firstname,
                            lastname,
                            email,
                            password
                        }),
                        headers: { 'Content-Type': 'application/json' },
                    })
        
                    console.log(response);
    
                    if (response) {
                        console.log('success');
                        document.location.replace('/user-login')
                    } else {
                        console.log('oops')
                    } 
        
                } catch (err) {
                    console.error(err.message);
                }

                try {
                    const response = fetch(userLoginUrl, {
                        method: 'post',
                        body: JSON.stringify({
                            email,
                            password
                        }),
                        headers: { 'Content-Type': 'application/json' },
                    })
        
                    console.log(response);
    
                    if (response) {
                        console.log('success');
                        document.location.replace('/user-login')
                    } else {
                        console.log('oops')
                    } 
        
                } catch (err) {
                    console.error(err.message);
                }
            } 
        }
    }

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
                            <div><input id="signup-username-input" name="username" placeholder="Required" /></div>
                        </div>
                        <br />
                        <div>
                            <label id="signupFirstNameLabel" htmlFor="signup-firstName">First Name</label>
                            <div><input id="signup-firstname-input" name="firstName" placeholder="Required" /></div>
                        </div>
                        <br />
                        <div>
                            <label id="signupLastNameLabel" htmlFor="signup-lastName">Last Name</label>
                            <div><input id="signup-lastname-input" name="lastName" placeholder="Required" /></div>
                        </div>
                        <br />
                        <div>
                            <label id="signupEmailLabel" htmlFor="signup-email">Email</label>
                            <div><input id="signup-email-input" name="email" placeholder="Required" /></div>
                        </div>
                        <br />
                        <div>
                            <label id="signupPasswordLabel" htmlFor="signup-password">Password (minimum of 4 characters)</label>
                            <div><input id="signup-password-input" type="password" name="signup-password" placeholder="Required" autoComplete="on"/></div>
                        </div>
                        <br />
                        <div>
                            <label id="signupConfirmPasswordLabel" htmlFor="signup-confirm-password">Confirm Password (minimum of 4 characters)</label>
                            <div><input id="signup-confirm-password-input" type="password" name="signup-confirm-password" placeholder="Required" autoComplete="on"/></div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                {Conditional}
                    <button type="click" id="signupModalBtn" className="btn btn-primary" onClick={signupFormHandler}>Signup</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default SignupModal;