import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Auth from '../../utils/auth';
import { QUERY_WORKER_BASIC } from '../../utils/queries';

import NavbarWorker from '../../components/NavbarWorker';

function WorkerHome() {

    const { data: workerData } = useQuery(QUERY_WORKER_BASIC);
    console.log('worker data', workerData);

    return(
        <div>
            <NavbarWorker />
            <p>This is the worker page</p>
            {workerData && Auth.loggedIn() ? (
                <>
                <p>This is the worker page</p>
                </>
            ) : (
                <h5>Please log in to to be a part of our community!</h5>
            )}
        </div>
    );
}

export default WorkerHome;