import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME_BASIC } from '../../utils/queries';
import Auth from '../../utils/auth';

function UserInfo() {

    const { data: userData } = useQuery(QUERY_ME_BASIC);
    console.log(userData?.me)

    const loggedIn = Auth.loggedIn();

    return (
        <div>
            {loggedIn && userData ? (
                <>
                    <h1>{userData.me.username}'s profile</h1>
                    <div className="radio-btn-container">
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