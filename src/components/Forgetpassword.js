import React, { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './firebase'; // Import Firebase authentication
import Header from './Header';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [resetSuccessful, setResetSuccessful] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmail(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setSubmitted(true);
                setError('');
            })
            .catch((error) => {
                setError('Failed to send password reset email.');
                setSubmitted(false);
            });
    };

    return (
        <div className="forgot-password-section">
            <Header />
            <div className="forgot-password-background">
                <h2>Forgot Password</h2>
                {!submitted ? (
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
                        {error && <p className="error-message">{error}</p>}
                        <button type="submit" className="submit-button">Submit</button>
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
