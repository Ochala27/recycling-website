import React, { useState } from 'react';
import Header from './Header';
import ForgotPassword from './Forgetpassword'; // Import the ForgotPassword component

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState('');
    const [showForgotPassword, setShowForgotPassword] = useState(false); // State to handle view switch

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
        return passwordRegex.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validatePassword(formData.password)) {
            setLoggedIn(true);
            setError('');
            setFormData({ email: '', password: '' }); // Clear form fields
        } else {
            setError('Invalid password. It must be at least 8 characters long, contain one uppercase letter, and one symbol.');
        }
    };

    const handleForgotPassword = () => {
        setShowForgotPassword(true); // Show forgot password form
    };

    const isFormValid = formData.email && formData.password;

    if (showForgotPassword) {
        return <ForgotPassword />;
    }

    return (
        <div className="login-section">
            <Header />
            <div className="login-background">
                <h2>Login</h2>
                {!loggedIn ? (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email Address:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        <div className="button-group">
                            <button type="submit" disabled={!isFormValid} className="submit-button">Submit</button>
                            <button type="button" className="forgot-password-button" onClick={handleForgotPassword}>Forgot Password?</button>
                        </div>
                    </form>
                ) : (
                    <div className="confirmation-message">
                        <h3>Welcome back!</h3>
                        <p>You have successfully logged in.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
