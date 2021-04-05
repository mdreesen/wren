import React from 'react';
import session from 'express-session';


// TODO
// Midwife login form not working for logging in. getting error:
// UnhandledPromiseRejectionWarning: Error: WHERE parameter "email" has invalid "undefined" value
// it is switching to other pages after email and password is put in, but need to handle this better

function LoginMidwife() {

    async function workerLoginFormHandler(event) {
        event.preventDefault();

        const workerEmail = document.querySelector('#worker-login-email').value.trim();
        const workerPassword = document.querySelector('#worker-login-password').value.trim();

        const workerUrl = "/wpi/worker/login"

        if (!workerEmail || !workerPassword) {
            return window.alert('need email and password')
        }

        if (workerEmail && workerPassword) {

            try {
                const response = await fetch(workerUrl,{
                    method: 'post',
                    body: JSON.stringify({
                        workerEmail,
                        workerPassword
                    }),
                    headers: { 'Content-Type': 'application/json' },
                })

                if (response.ok && session) {
                    console.log('success');
                    document.location.replace('/user-info')
                } else {
                    console.log('what went wrong?')
                    console.log(response.statusCode)
                    // console.log(response.statusText === true)
                }
            } catch (err) {
                console.error(err.message);
            }
        }
    }

    return(
        <div className="workerPage">
            <div className="workerFormContainer">
            <div className="formContainer">
                <form className="midwifeForm">
                    <h3>Login</h3>
                    <div className="form-group">
                        <label for="workerEmail" htmlFor="inputWorkerEmail">Email address</label>
                        <input type="email" className="form-control" id="worker-login-email" aria-describedby="emailInput" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label for="workerPassword" htmlFor="inputWorkerPassword">Password</label>
                        <input className="form-control" id="worker-login-password" placeholder="Password" />
                    </div>
                    <div className="button-container">
                        <a href="/" className="btn btn-primary">back</a>
                        <button onClick={workerLoginFormHandler} type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
   </div>
    );
}

export default LoginMidwife;