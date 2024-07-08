import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Welcome to Clean4Saver Recycling</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/request-pickup">Request Pick Up</Link></li>
                    <li><Link to="/customer-care">Customer Care</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
