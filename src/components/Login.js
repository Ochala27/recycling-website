import React, { useState } from 'react';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState('');

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
        } else {
            setError('Invalid password. It must be at least 8 characters long, contain one uppercase letter, and one symbol.');
        }
    };

    return (
        <div className="login-section">
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
                        <button type="submit">Submit</button>
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