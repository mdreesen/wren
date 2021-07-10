import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_BIRTHWORKERS } from '../../../utils/queries';
import Auth from '../../../utils/auth';

import MidwifeCard from '../../../components/MidwifeCard';
import NavbarUser from '../../../components/NavbarUser';

function AllBirthworkers() {

    // getting the data from the query
    const { loading, data } = useQuery(QUERY_BIRTHWORKERS);
    // console.log({ data })

    // if no birthworkers then bring back an empty array
    const birthworkers = data?.birthworkers || [];

    if (loading) {
        return <div>Loading birthworkers</div>
    }

    if (!birthworkers) {
        return <div>No Midwives Yet</div>
    }

    return(

        <div>
            <NavbarUser />
            {Auth.loggedIn() ? (
                <div>
                <Link to="/settings">back</Link>
                    <div className="row-container">
                        <div className='row'>
                            <MidwifeCard midwifeCard={birthworkers} />
                        </div>
                    </div>
                </div>

            ) : (
                <h5>Please log in to to be a part of our community!</h5>
            )}
        </div>
    );
}

export default AllBirthworkers;