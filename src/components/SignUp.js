import React, { useState } from 'react';
import Login from './Login'; // Import the Login component

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        password: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [showLogin, setShowLogin] = useState(false); // State to handle view switch

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validatePassword(formData.password)) {
            setError('Password must be at least 8 characters long, contain one uppercase letter, and one symbol.');
            return;
        }
        setSubmitted(true);
        setError('');
    };

    const handleOkayClick = () => {
        setShowLogin(true);
    };

    if (showLogin) {
        return <Login />;
    }

    return (
        <div className="sign-up-section">
            <div className="sign-up-background">
                <h2>Sign Up</h2>
                {!submitted ? (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Customer Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
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
                            <label htmlFor="address">Address:</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={formData.address}
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
                        <h3>Thank you for signing up!</h3>
                        <p>Here are your details:</p>
                        <p><strong>Customer Name:</strong> {formData.name}</p>
                        <p><strong>Email Address:</strong> {formData.email}</p>
                        <p><strong>Address:</strong> {formData.address}</p>
                        <button onClick={handleOkayClick}>Okay</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SignUp;
