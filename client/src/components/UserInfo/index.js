import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME_BASIC } from '../../utils/queries';
import Auth from '../../utils/auth';

function UserInfo() {
    
    const { data: userData } = useQuery(QUERY_ME_BASIC);

    const loggedIn = Auth.loggedIn();

    return(
        <div>
        {loggedIn && userData ? (
            <>
                <h1>{userData.me.username}'s profile</h1>
                <div className="radio-btn-container">
                <p>Trying To Conceive</p>
                    <button type="button" className="btn" id="ttc-btn">
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