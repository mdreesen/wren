import session from 'express-session';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function UserInfo() {
    // URL params of the user
    const { user_id } = useParams();

   const [userOption, setOptionUser] = useState(false);
   const [getUser, setGetUser] = useState({});

           const getUserInfo = async () => {
            const url = `/api/users/${user_id}`
            const response = await fetch(url);
            const responseJson = await response.json();
            console.log(responseJson);
    
            setGetUser(responseJson)
        }


    async function updateTTCUser(event) {
        event.preventDefault();

        const ttc = document.querySelector('#ttc-btn').value;
        // const pregnant = document.querySelector('#pregnant-btn');
        // const postpartum = document.querySelector('#pp-btn');

        const userUpdateUrl = `/api/settings/${user_id}`
        //|| pregnant || postpartum

            try {
                const response = await fetch(userUpdateUrl, {
                    method: 'put',
                    body: JSON.stringify({
                        ttc
                    }),
                    headers: { 'Content-Type': 'application/json' },
                })
                console.log(session.sid)
                console.log(session.Cookie)
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

        // midwifeSearch function to get all midwife data from the database
        // const updateTTCUser = async () => {
        //     const url = `/api/posts/${user_id}`
        //     const response = await fetch(url);
        //     const responseJson = await response.json();
        //     console.log(responseJson);
    
        //     setOptionUser(responseJson)
        // }

        useEffect(() => {
            getUserInfo();
        }, [])


    return(
        <div>
        <h4>Update your profile</h4>
        <h1>Route params - { user_id }</h1>
        <p>This helps us better understand how we can help you</p>
        <div className="radio-btn-container">
            <p>Trying To Conceive</p>
                <button type="button" onClick={updateTTCUser} className="btn" id="ttc-btn">
                    Update
                </button>
            <div className="form-check">
                <p>Pregnant</p>
                <button type="button"className="btn" id="pregnant-btn">
                    Update
                </button>
            </div>
            <div className="form-check">
                <p>Postpartum</p>
                <button type="button" className="btn" id="pp-btn">
                    Update
                </button>
            </div>
        </div>
      </div>
    );
}

export default UserInfo;