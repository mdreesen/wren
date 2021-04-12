import React, { useState, useEffect } from 'react';

import UserInfo from '../../components/UserInfo';
import MidwifeCard from '../../components/MidwifeCard';
import NavbarUser from '../../components/NavbarUser';

function UserInfoPage() {

    // using useState to set the midwife card
    // if there is nothing, return an empty array -> useState([]);
    const [midwifeCard, setMidwifeCard] = useState([]);

    // midwifeSearch function to get all midwife data from the database
     const midwifeSearch = async () => {
        const url = "/wpi/worker"
        const response = await fetch(url);
        const responseJson = await response.json();
        // console.log(responseJson);

        setMidwifeCard(responseJson)
    }

    useEffect(() => {
        midwifeSearch();
    }, [])

    return(

        <div>
            <NavbarUser />
            <UserInfo />
            <div className="row-container">
                <div className='row'>
                    <MidwifeCard midwifeCard={midwifeCard}/>
                </div>
            </div>
        </div>
    );
}

export default UserInfoPage;