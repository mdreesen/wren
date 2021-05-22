import React, { useEffect } from 'react';

// import components
import NavbarUser from '../../components/NavbarUser';
import Mood from '../../components/Mood';
import Auth from '../../utils/auth';
import Footer from '../../components/Footer';

function Home() {

    // const quotes = async () => {
    //     const url = 'https://zenquotes.io/api/today'
    //     const response = await fetch(url);
    //     const responseJson = await response.json();
    //     console.log(responseJson);

    //     // setGetUser(responseJson)
    // }

    // useEffect(() => {
    //     quotes()
    // }, [])


    return(
        <div>
            <NavbarUser/>
            {Auth.loggedIn() ? (
                <>
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