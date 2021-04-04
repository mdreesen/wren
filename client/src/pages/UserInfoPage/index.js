import React from 'react';

import UserInfo from '../../components/UserInfo';
import MidwifeCard from '../../components/MidwifeCard';
// import Navbar from '../../components/Navbar';

function UserInfoPage() {
    return(

        <div>
            {/* <Navbar /> */}
            <UserInfo />
            <MidwifeCard />
        </div>
    );
}

export default UserInfoPage;