import session from 'express-session';
import React from 'react';

function UserInfo() {
    console.log(session.sid)


    // TODO
    // Need to get the user update profile working
    // Getting this error
    /* 
    Converting circular structure to JSON
    --> starting at object with constructor 'HTMLButtonElement'
    |     property '__reactFiber$96543o44sni' -> object with constructor 'FiberNode'
    --- property 'stateNode' closes the circle
    */

    async function updateUser(event) {
        event.preventDefault();

        const ttc = document.querySelector('#ttc-btn');
        const pregnant = document.querySelector('#pregnant-btn');
        const postpartum = document.querySelector('#pp-btn');

        const userUpdateUrl = '/api/posts/:id'
        //|| pregnant || postpartum

        console.log(session)

        if (ttc) {
            try {
                const response = await fetch(userUpdateUrl, {
                    method: 'put',
                    body: JSON.stringify({
                        ttc
                    }),
                    headers: { 'Content-Type': 'application/json' },
                })
                console.log(response)
                if(response) {
                    console.log('success');
                    
                } else {
                    console.log('oops')
                }

            } 
            catch (err) {
                console.log(err.message);
            }
        }

        if (pregnant) {
            try {
                const response = await fetch(userUpdateUrl, {
                    method: 'put',
                    body: JSON.stringify({
                        pregnant
                    }),
                    headers: { 'Content-Type': 'application/json' },
                })
                console.log(response)
                if(response) {
                    console.log('success');
                    
                } else {
                    console.log('oops')
                }

            } 
            catch (err) {
                console.log(err.message);
            }
        }

        if (postpartum) {
            try {
                const response = await fetch(userUpdateUrl, {
                    method: 'put',
                    body: JSON.stringify({
                        postpartum
                    }),
                    headers: { 'Content-Type': 'application/json' },
                })
                console.log(response)
                if(response) {
                    console.log('success');
                    
                } else {
                    console.log('oops')
                }

            } 
            catch (err) {
                console.log(err.message);
            }
        }
    }

    return(
        <div>
        <h4>Update your profile</h4>
        <p>This helps us better understand how we can help you</p>
        <div className="radio-btn-container">
            <p>Trying To Conceive</p>
                <button type="button" onClick={updateUser} className="btn" id="ttc-btn">
                    Update
                </button>
            <div className="form-check">
                <p>Pregnant</p>
                <button type="button" onClick={updateUser} className="btn" id="pregnant-btn">
                    Update
                </button>
            </div>
            <div className="form-check">
                <p>Postpartum</p>
                <button type="button" onClick={updateUser} className="btn" id="pp-btn">
                    Update
                </button>
            </div>
        </div>
      </div>
    );
}

export default UserInfo;