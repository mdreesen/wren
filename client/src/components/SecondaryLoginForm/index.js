import session from 'express-session';
import React from 'react';

function SecondaryLoginForm() {

    async function loginFormHandler(event) {
        event.preventDefault();

        const email = document.querySelector('#secondary-login-email').value.trim();
        const password = document.querySelector('#secondary-login-password').value.trim();

        const userLoginUrl = '/api/users/login'

        if (email && password) {

            try {
                const response = await fetch(userLoginUrl,{
                    method: 'post',
                    body: JSON.stringify({
                        email,
                        password
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
                        <input type="email" className="form-control" id="secondary-login-email" aria-describedby="emailInput" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                        <label for="workerPassword" htmlFor="inputWorkerPassword">Password</label>
                        <input className="form-control" id="secondary-login-password" placeholder="Password" />
                    </div>
                    <div className="button-container">
                        <a href="/" className="btn btn-primary">back</a>
                        <button onClick={loginFormHandler} type="submit" className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
   </div>
    );
}

export default SecondaryLoginForm;