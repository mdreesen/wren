import React, { useState } from 'react';
import axios from "axios";

function LoginModal() {

    const [user, setUser] = useState()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    // async function loginFormHandler(event) {
    const loginFormHandler = async event => {
        event.preventDefault();

        // const email = document.querySelector('#login-email-input').value.trim();
        // const password = document.querySelector('#login-password-input').value.trim();

        const user = { email, password };


        const userLoginUrl = '/api/users/login'


        // create error message in conditional statement
        if (!email || !password) {
            console.log('should hit this');
        }
        if (email && password) {

            // try {
            //     const response = await fetch(userLoginUrl,{
            //         method: 'post',
            //         body: JSON.stringify({
            //             email,
            //             password
            //         }),
            //         headers: { 'Content-Type': 'application/json' },
            //     })

            //     if (response.ok) {
            //         console.log('success');
            //         localStorage.setItem('id', response.json(session))
            //         console.log(response.json(session))
            //         document.location.replace('/home')
            //     } else {
            //         console.log('what went wrong?')
            //         console.log(response.statusCode)
            //         // console.log(response.statusText === true)
            //     }


            // } catch (err) {
            //     console.error(err.message);
            // }

        const user_url = userLoginUrl
        const response = await axios.post(user_url, 
            user
        );
        // const responseJson = await response.json();
        setUser(response.data)
        localStorage.setItem('user', response.data.user.id)
        console.log(response.data)

        // setUser(responseJson)
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
                        <form>
                            <div>
                                <label id="usernameLabel" htmlFor="login-username" >email</label>
                                <div><input id="login-email-input" name="Username" value={email} onChange={({ target }) => setEmail(target.value)} /></div>
                            </div>
                            <div>
                            <br />
                            <div>
                                <label id="passwordLabel" htmlFor="login-password">Password</label>
                                <div><input id="login-password-input" type="password" name="login-password" autoComplete="on" value={password} onChange={({ target}) => setPassword(target.value)}/></div>
                            </div>
                            </div>
                        </form>
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