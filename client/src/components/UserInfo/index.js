import session from 'express-session';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from '../../utils/queries';

function UserInfo() {
    
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(QUERY_USER, {
        variables: { username: userParam }
    });

    const user = data?.user || {};

    if (loading) {
        return <div>Loading your information</div>
    }


    return(
        <div>
        <h4>Update your profile</h4>
        <h1>PROFILE:{user.username}</h1>
        <p>This helps us better understand how we can help you</p>
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
      </div>
    );
}

export default UserInfo;