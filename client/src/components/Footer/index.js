import React from 'react';

function Footer() {

    return(
<nav className="footer navbar-expand-lg">
    {/* <a className="navbar-brand" href="#">Hidden brand</a> */}
    <div className="icon-left">
        <ul>
            <li>icon left</li>
            <li>icon left</li>
            <li>icon left</li>
            <li><a href="/worker-login">worker login</a></li>
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