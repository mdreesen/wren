import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_BIRTHWORKERS } from '../../utils/queries';
import Auth from '../../utils/auth';

import UserInfo from '../../components/UserInfo';
// import MidwifeCard from '../../components/MidwifeCard';
import NavbarUser from '../../components/NavbarUser';

function UserSettings() {

    // getting the data from the query
    const { loading, data } = useQuery(QUERY_BIRTHWORKERS);
    // console.log({ data })

    // if no birthworkers then bring back an empty array
    const birthworkers = data?.birthworkers || [];

    if (loading) {
        return <div>Loading birthworkers</div>
    }

    return(

        <div>
            <NavbarUser />
            {Auth.loggedIn() ? (
                <div>
                    <UserInfo />
                    <div>
                        <Link to="/all-workers">See all workers</Link>
                    </div>
                </div>

            ) : (
                <h5>Please log in to to be a part of our community!</h5>
            )}
        </div>
    );
}

export default UserSettings;