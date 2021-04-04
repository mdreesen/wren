import Reacts from 'react';

// TODO
// Midwife login form not working for logging in. getting error:
// UnhandledPromiseRejectionWarning: Error: WHERE parameter "email" has invalid "undefined" value
// it is switching to other pages after email and password is put in, but need to handle this better

function LoginMidwife() {

    async function workerLoginFormHandler(event) {
        event.preventDefault();

        const workerEmail = document.querySelector('#workerEmail').value.trim();
        const workerPassword = document.querySelector('#workerPassword').value.trim();

        const workerUrl = "/wpi/worker/login"

        if (!workerEmail || !workerPassword) {
            return window.alert('need email and password')
        }

        else if (workerEmail && workerPassword) {

            try {
                const response = fetch(workerUrl, {
                    method: 'post',
                    body: JSON.stringify({
                        workerEmail,
                        workerPassword
                    }),
                    headers: { 'Content-Type': 'application/json' },
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
       <div className="workerPage">
            <div className="workerFormContainer">
            <div className="formContainer">
                <form className="midwifeForm">
                <h3>Worker Login</h3>
                        <div className="form-group">
                            <label for="workerEmail" htmlFor="inputWorkerEmail">Email address</label>
                            <input type="email" className="form-control" id="workerEmail" aria-describedby="emailInput" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
                            <label for="workerPassword" htmlFor="inputWorkerPassword">Password</label>
                            <input className="form-control" id="workerPassword" placeholder="Password" />
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