import React from 'react';
import { Link } from 'react-router-dom';
// import { useQuery } from '@apollo/react-hooks';
// import { QUERY_BIRTHWORKERS } from '../../utils/queries';
import NavbarUser from '../../components/NavbarUser';
import Auth from '../../utils/auth';


function UserMood() {

    // getting the data from the query
    // const { loading, data } = useQuery(QUERY_BIRTHWORKERS);
    // console.log({ data })

    // if no birthworkers then bring back an empty array
    // const birthworkers = data?.birthworkers || [];

    // if (loading) {
    //     return <div>Loading</div>
    // }

    return(

        <div>
            <NavbarUser />
            {Auth.loggedIn() ? (
                <div>
                    <ul className="list-group list-group-flush">
                        <button className="btn btn-success">awesome</button>
                        <button className="btn btn-primary">eh, alright</button>
                        <button className="btn btn-warning">not great</button>
                        <button className="btn btn-danger">just...no</button>
                    </ul>
                </div>

            ) : (
                <h5>Please log in to to be a part of our community!</h5>
            )}
        </div>
    );
}

export default UserMood;