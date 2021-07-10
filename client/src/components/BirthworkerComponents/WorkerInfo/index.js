import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_WORKER_BASIC } from '../../utils/queries';
import Auth from '../../utils/auth';

function UserInfo() {
    
    const { data: viewBirthworker } = useQuery(QUERY_WORKER_BASIC);

    const companyName = viewBirthworker.viewBirthworker.username;
    const companyEmail = viewBirthworker.viewBirthworker.email
    const firstName = viewBirthworker.viewBirthworker.firstname;
    const lastName = viewBirthworker.viewBirthworker.lastname

    const associatedUsers = viewBirthworker.viewBirthworker.associateWithUser.length

    const loggedIn = Auth.loggedIn();

    return(
        <div>
        {loggedIn && viewBirthworker ? (
            <>
                <h1>{companyName}'s profile</h1>
                <div className="radio-btn-container">
                <p>Your Settings</p>
                <p>Email:</p>
                <p>{companyEmail}</p>
                <p>First Name:</p>
                <p>{firstName}</p>
                <p>Last Name:</p>
                <p>{lastName}</p>
                <p>Associated Users:</p>
                <p>{associatedUsers}</p>
                    <button type="button" className="btn" id="ttc-btn">
                        Update
                    </button>
                <div className="form-check">

                </div>
                <div className="form-check">

                </div>
            </div>
        </>
        ) : (
            <>
            <h5>Please log in to to be a part of our community!</h5>
            </>
        )}
      </div>
    );
}

export default UserInfo;