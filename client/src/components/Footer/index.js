import React from 'react';

import LoginMidwife from '../../components/LoginMidwife';

function Footer() {

    return(
<nav className="footer navbar-expand-lg">
    {/* <a className="navbar-brand" href="#">Hidden brand</a> */}
    <div className="icon-left">
        <ul>
            <li>icon left</li>
            <li>icon left</li>
            <li>icon left</li>
            <LoginMidwife />
        </ul>
    </div>
    <div className="icon-right">
        <ul>
            <li>social icon</li>
            <li>social icon</li>
            <li>social icon</li>
        </ul>
    </div>
</nav>


    );
}

export default Footer;