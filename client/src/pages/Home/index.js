import React from 'react';

// import components
import NavbarUser from '../../components/NavbarUser';
import Auth from '../../utils/auth';

function Home() {
    return(
        <div>
            <NavbarUser/>
            {Auth.loggedIn() ? (
                <>
                <div>loggedIn users should see this text</div>
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