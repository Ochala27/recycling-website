import React from 'react';

const Header = () => {
    return (
        <header>
            <h1>Welcome to the Recycling Home Page</h1>
            <nav>
                <ul>
                    <li><button onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' })}>Home</button></li>
                    <li><button onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}>Services</button></li>
                    <li><button onClick={() => document.getElementById('request-pickup').scrollIntoView({ behavior: 'smooth' })}>Request Pick Up</button></li>
                    <li><button onClick={() => document.getElementById('customer-care').scrollIntoView({ behavior: 'smooth' })}>Customer Care</button></li>
                    <li><button onClick={() => document.getElementById('faq').scrollIntoView({ behavior: 'smooth' })}>FAQ</button></li>
                    <li><button onClick={() => document.getElementById('login').scrollIntoView({ behavior: 'smooth' })}>Login</button></li>
                    <li><button onClick={() => document.getElementById('signup').scrollIntoView({ behavior: 'smooth' })}>Sign Up</button></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
