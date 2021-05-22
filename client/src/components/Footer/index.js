import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {

    return(
<nav className="footer navbar-expand-lg">
    {/* <a className="navbar-brand" href="#">Hidden brand</a> */}
    <div className="icon-left">
        <ul className="icon-column">
            <li>icon left</li>
            <li>icon left</li>
            <li>icon left</li>
            <li><Link to="/worker-login">worker login</Link></li>
        </ul>
    </div>
    <div className="icon-right">
        <ul className="icon-column">
            <a>icon1</a>
            <a>icon2</a>
            <a>icon3</a>
        </ul>
    </div>
</nav>


    );
}

export default Footer;