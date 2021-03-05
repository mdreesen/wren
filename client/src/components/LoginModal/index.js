import React from 'react';

function LoginModal() {

    function loginFormHandler(event) {
        event.preventDefault();

        const email = document.querySelector('#login-email-input').value.trim();
        const password = document.querySelector('#login-password-input').value.trim();

        if (email && password) {

            if (!email && !password) {
                <p>Please enter email and password</p>
            } else {
                try {
                    const response = fetch('/api/users/login',{
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            email,
                            password
                        })
                    })
    
                    if (response.ok) {
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
    }

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
                            <div>
                                <label id="usernameLabel" htmlFor="login-username">email</label>
                                <div><input id="login-email-input" name="Username" /></div>
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
                            <button type="button" id="loginModalBtn" className="btn btn-primary" onClick={loginFormHandler}>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginModal;