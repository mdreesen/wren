import React from 'react';

function SignupModal() {
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
                <div className="modal-body">
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
                    <button type="click" id="signupModalBtn" className="btn btn-primary">Signup</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default SignupModal;