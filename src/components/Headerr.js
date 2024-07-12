import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Clean4Saver Recycling</h1>
            
            <nav>
                <ul>
                    <li><Link to="/mainpage">Dashboard</Link></li>
                    <li><Link to="/accountsettings">Account Settings</Link></li>
                    <li><Link to="/req">Request Pick Up</Link></li>
                    <li><Link to="/pickupHistory">pick-up History </Link></li>
                    <li><Link to="/Logout">Logout</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
