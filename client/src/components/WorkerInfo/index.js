import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_WORKER_BASIC } from '../../utils/queries';
import Auth from '../../utils/auth';

function UserInfo() {
    
    const { data: workerData } = useQuery(QUERY_WORKER_BASIC);

    const loggedIn = Auth.loggedIn();

    return(
        <div>
        {loggedIn && workerData ? (
            <>
                <h1>{}'s profile</h1>
                <div className="radio-btn-container">
                <p>Your Settings</p>
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