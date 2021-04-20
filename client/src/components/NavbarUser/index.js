import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Navbar() {

    const { user_id } = useParams();

    // const [userInfo, setUserInfo] = useState({});


    // const getUserId = async () => {
    //     const user_url = `/api/users/${user_id}`
    //     const response = await fetch(user_url);
    //     const responseJson = await response.json();

    //     setUserInfo(responseJson)
    // }

    // Logout function
    async function logout() {

        document.querySelector('#logout-btn')

        try {
            const response = await fetch('/api/users/logout', {
                method: 'post',
                headers: { 'Content-type': 'application/json' }
            });

            if (response.ok) {
                console.log(response);
                localStorage.clear();
                document.location.replace('/')
            } else {
                alert(response.status);
            }
    
            console.log(response);

        } catch (err) {
            console.log(err.message);
        }
    }

    // const handleLogout = () => {
    //     localStorage.clear();
    //   };

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse navbar-css" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/home" className="nav-link">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="" className="nav-link">
                        Link-Two
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={`/settings/${user_id}`} className="nav-link">
                        Settings
                    </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" onClick={logout}>Logout</Link>
                </li>
            </ul>
        </div>
        </nav>

    );
}

export default Navbar;