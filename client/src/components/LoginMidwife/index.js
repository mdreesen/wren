import React from 'react';

function LoginMidwife() {

    function workerLoginFormHandler(event) {
        event.preventDefault();

        const workerEmail = document.querySelector('#worker-login-email-input').value.trim();
        const workerPassword = document.querySelector('#worker-login-password-input').value.trim();

        if (workerEmail && workerPassword) {

            try {
                const response = fetch('/wpi/worker/login',{
                    method: 'post',
                    body: JSON.stringify({
                        workerEmail,
                        workerPassword
                    }),
                    headers: { 'Content-Type': 'application/json' },
                })

                console.log("clicked")

                if (response) {
                    console.log('success');
                    document.location.replace('/worker')
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
                <h3>Worker Login</h3>
                        <div className="form-group">
                            <label htmlFor="inputWorkerEmail">Email address</label>
                            <input type="email" className="form-control" id="worker-login-email-input" aria-describedby="emailInput" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputWorkerPassword1">Password</label>
                            <input type="password" className="form-control" id="worker-login-password-input" placeholder="Password" />
                        </div>
                        <button onClick={workerLoginFormHandler} type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
       </div>
    );
}

export default LoginMidwife;