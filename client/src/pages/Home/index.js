import React from 'react';

// import components
import NavbarUser from '../../components/NavbarUser';
import Mood from '../../components/Mood';
import Auth from '../../utils/auth';

function Home() {
    return(
        <div>
            <NavbarUser/>
            {Auth.loggedIn() ? (
                <>
                <div>Hey Good Lookin'</div>
                <Mood />
                </>
            ) : (
                <>
                <h5>Please log in to to be a part of our community!</h5>
                </>
            )}
        </div>
    );
}

export default Home;