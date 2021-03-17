import React from 'react';

function UserInfo() {

    // TODO
    // Need to get the user update profile working
    // Getting this error
    /* 
    Converting circular structure to JSON
    --> starting at object with constructor 'HTMLButtonElement'
    |     property '__reactFiber$96543o44sni' -> object with constructor 'FiberNode'
    --- property 'stateNode' closes the circle
    */

    function updateUser(event) {
        event.preventDefault();

        const ttc = document.querySelector('#ttc-btn');
        const pregnant = document.querySelector('#pregnant-btn');
        const postpartum = document.querySelector('#pp-btn');

        if (ttc || pregnant || postpartum) {
            try {
                const response = fetch('/api/users/:id', {
                    method: 'put',
                    body: JSON.stringify({
                        ttc,
                        pregnant,
                        postpartum
                    }),
                    headers: { 'Content-Type': 'application/json' },
                })
                console.log(response)
                if(response) {
                    console.log('success');
                    document.location.replace('/home')
                } else {
                    console.log('oops')
                }

            } catch (err) {
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