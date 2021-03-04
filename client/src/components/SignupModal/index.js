import React from 'react';

function SignupModal() {

    function signupFormHandler(event) {
        event.preventDefault();

        const username = document.querySelector('#signup-username-input').value.trim();
        const email = document.querySelector('#signup-email-input').value.trim();
        const password = document.querySelector('#signup-password-input').value.trim();

        console.log('button was clicked, yeay!')

        if (username && email && password) {
            try {
                const response = fetch('/api/users',{
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        username,
                        email,
                        password
                    })
                })
    
                console.log(response);

                if (response) {
                    console.log('success');
                    document.location.replace('/home')
                } else {
                    console.log('oops')
                }
    
            } catch (err) {
                console.error(err.message);
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
                    <div>
                        <label id="signupUsernameLabel" htmlFor="signup-username">Username</label>
                        <div><input id="signup-username-input" name="username" placeholder="Required" /></div>
                    </div>
                    <br />
                    <div>
                        <label id="signupEmailLabel" htmlFor="signup-email">Email</label>
                        <div><input id="signup-email-input" name="email" placeholder="Required" /></div>
                    </div>
                    <br />
                    <div>
                        <label id="signupPasswordLabel" htmlFor="signup-password">Password (minimum of 4 characters)</label>
                        <div><input id="signup-password-input" type="password" name="signup-password" placeholder="Required" /></div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="click" id="signupModalBtn" className="btn btn-primary" onClick={signupFormHandler}>Signup</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default SignupModal;