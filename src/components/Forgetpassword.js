import React, { useState } from 'react';
import Header from './Header';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [resetSuccessful, setResetSuccessful] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'newPassword') {
            setNewPassword(value);
        } else if (name === 'confirmPassword') {
            setConfirmPassword(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setSubmitted(true);
            setError('');
            // Simulating password reset success (replace with actual logic)
            setTimeout(() => {
                setResetSuccessful(true);
            }, 1000); // Simulating delay before showing success message
        }
    };

    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address.');
            return false;
        }
        if (!passwordRegex.test(newPassword)) {
            setError('Password must be at least 8 characters long, contain one uppercase letter, and one symbol.');
            return false;
        }
        if (newPassword !== confirmPassword) {
            setError('Passwords do not match.');
            return false;
        }
        return true;
    };

    const handleReloadLogin = () => {
        // Reload or navigate to login page
        window.location.reload(); // Reloads the page
    };

    return (
        <div className="forgot-password-section">
            <Header />
            <div className="forgot-password-background">
                <h2>Forgot Password</h2>
                {!submitted || resetSuccessful ? (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email Address:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {!resetSuccessful ? (
                            <>
                                <div className="form-group">
                                    <label htmlFor="newPassword">New Password:</label>
                                    <input
                                        type="password"
                                        id="newPassword"
                                        name="newPassword"
                                        value={newPassword}
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
                                        value={confirmPassword}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                {error && <p className="error-message">{error}</p>}
                                <button type="submit" className="submit-button">Submit</button>
                            </>
                        ) : (
                            <div className="confirmation-message">
                                <h3>Password Reset Successful</h3>
                                <p>Your password has been successfully updated.</p>
                                <button onClick={handleReloadLogin}>Okay</button>
                            </div>
                        )}
                    </form>
                ) : (
                    <div className="confirmation-message">
                        <h3>Check your email</h3>
                        <p>If the email you provided is associated with an account, you will receive a password reset link.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ForgotPassword;
