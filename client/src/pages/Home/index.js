import React, { useEffect } from 'react';

// import components
import NavbarUser from '../../components/NavbarUser';
import Mood from '../../components/Mood';
import AssociatedBWList from '../../components/AssociatedBWList';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../../utils/queries';
// import Footer from '../../components/Footer';

function Home() {
    const { data: userData } = useQuery(QUERY_ME);
    console.log(userData)

    return(
        <div>
            <div>
            <NavbarUser/>
                {userData && Auth.loggedIn() ? (
                    <>
                    <Mood />
                    <AssociatedBWList 
                        username={userData.me.username}
                        birthworkerCount={userData.me.birthworkerCount}
                        associateWithWorker={userData.me.associateWithWorker}
                    />
                    </>
                ) : (
                    <>
                    <h5>Please log in to to be a part of our community!</h5>
                    </>
                )}
            </div>
        </div>
    );
}

export default Home;