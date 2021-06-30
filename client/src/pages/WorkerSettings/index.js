import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_WORKER_BASIC } from '../../utils/queries';
import Auth from '../../utils/auth';

import WorkerInfo from '../../components/WorkerInfo';
// import MidwifeCard from '../../components/MidwifeCard';
import NavbarWorker from '../../components/NavbarWorker';

function WorkerSettings() {

    // getting the data from the query
    const { loading, data } = useQuery(QUERY_WORKER_BASIC);
    console.log({ data })

    // if no birthworkers then bring back an empty array
    // const users = data?.viewBirthworker?.viewBirthworker || [];

    if (loading) {
        return <div>Loading birthworkers</div>
    }

    return(

        <div>
            <NavbarWorker />
            {Auth.loggedIn() ? (
                <div>
                    <WorkerInfo />
                    <div>
                    </div>
                </div>

            ) : (
                <h5>Please log in to to be a part of our community!</h5>
            )}
        </div>
    );
}

export default WorkerSettings;