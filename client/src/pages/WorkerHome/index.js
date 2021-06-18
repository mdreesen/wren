import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Auth from '../../utils/auth';
import { QUERY_WORKER_BASIC } from '../../utils/queries';

// import components
import NavbarWorker from '../../components/NavbarWorker';
import AssociatedUserList from '../../components/AssociatedUserList';

function WorkerHome() {

    const { data: workerData } = useQuery(QUERY_WORKER_BASIC);
    console.log('worker data', workerData);

    return(
        <div>
            <NavbarWorker />
            {workerData && Auth.loggedIn() ? (
                <>
                <p>This is the worker page</p>
                <AssociatedUserList/>
                </>
            ) : (
                <h5>Please log in to to be a part of our community!</h5>
            )}
        </div>
    );
}

export default WorkerHome;