import React from 'react';

function LoginMidwife() {

    async function workerLoginFormHandler(event) {
        event.preventDefault();

        const workerEmail = document.querySelector('#workerEmail').value.trim();
        const workerPassword = document.querySelector('#workerPassword').value.trim();

        if (!workerEmail || !workerPassword) {
            return window.alert('need email and password')
        }

        else if (workerEmail && workerPassword) {

            try {
                const response = await fetch('/wpi/worker/login',{
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
                            <input type="email" className="form-control" id="workerEmail" aria-describedby="emailInput" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputWorkerPassword">Password</label>
                            <input className="form-control" id="workerPassword" placeholder="Password" />
                        </div>
                        <button onClick={workerLoginFormHandler} type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
       </div>
    );
}

export default LoginMidwife;