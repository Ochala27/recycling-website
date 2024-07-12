import React, { useState } from 'react';
import Login from './Login'; // Import the Login component
import Header from './Header';

const SignUp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        password: '',
        confirmPassword: '',
        phase: '',
        houseNumber: ''
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

    const validatePhaseNumber = (phase) => {
        const phaseRegex = /^P\d{2}$/;
        return phaseRegex.test(phase);
    };

    const validateHouseNumber = (houseNumber) => {
        const houseNumberRegex = /^H\d{2}$/;
        return houseNumberRegex.test(houseNumber);
    };

    const validateForm = () => {
        if (!validatePassword(formData.password)) {
            setError('Password must be at least 8 characters long, contain one uppercase letter, and one symbol.');
            return false;
        }
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match.');
            return false;
        }
        if (!validatePhaseNumber(formData.phase)) {
            setError('Phase number must be one capital letter "P" followed by two numbers.');
            return false;
        }
        if (!validateHouseNumber(formData.houseNumber)) {
            setError('House number must be one capital letter "H" followed by two numbers.');
            return false;
        }
        setError('');
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setSubmitted(true);
        }
    };

    const handleOkayClick = () => {
        setShowLogin(true);
    };

    if (showLogin) {
        return <Login />;
    }

    return (
        <div>
            <Header />
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
                                <label htmlFor="phase">Phase Number:</label>
                                <input
                                    type="text"
                                    id="phase"
                                    name="phase"
                                    value={formData.phase}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="houseNumber">House Number:</label>
                                <input
                                    type="text"
                                    id="houseNumber"
                                    name="houseNumber"
                                    value={formData.houseNumber}
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
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password:</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
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
                            <p><strong>Phase Number:</strong> {formData.phase}</p>
                            <p><strong>House Number:</strong> {formData.houseNumber}</p>
                            <button onClick={handleOkayClick}>Okay</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SignUp;
