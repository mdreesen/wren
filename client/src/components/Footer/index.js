import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {

    return(
<nav className="footer navbar-expand-lg">
    {/* <a className="navbar-brand" href="#">Hidden brand</a> */}
    <div className="icon-left">
        <ul className="icon-column">
            <a className="footer-link"><Link to="">About</Link></a>
            <a><Link to="/worker-login">worker login</Link></a>
            <a className="footer-link"><Link to="/"/></a>

            <li className="footer-link">copyright of Wren&copy;</li>
        </ul>
    </div>
    <div className="icon-right">
        <ul className="icon-column">
            <a className="footer-link"><Link to="/" class="fab fa-instagram fa-lg"></Link></a>
            <a className="footer-link"><Link to="/" className="fab fa-facebook fa-lg" /></a>
            <a className="footer-link"><Link to="/" className="fab fa-twitter fa-lg" /></a>
        </ul>
    </div>
</nav>


    );
}

export default Footer;