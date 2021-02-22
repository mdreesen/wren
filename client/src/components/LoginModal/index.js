import React from 'react';

function LoginModal() {
    return(
        <div>
            {/* Button trigger modal */}
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#loginModal">
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
                            <div>
                                <label id="usernameLabel" htmlFor="login-username">Username</label>
                                <div><input id="login-username-input" name="Username" /></div>
                            </div>
                            <div>
                            <br />
                            <div>
                                <label id="passwordLabel" htmlFor="login-password">Password</label>
                                <div><input id="login-password-input" type="password" name="login-password" /></div>
                            </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" id="loginModalBtn" className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;