import React, { useState } from 'react';
// Import the sendPasswordResetEmail function from Firebase Authentication
import { sendPasswordResetEmail } from 'firebase/auth';
// Import the Firebase authentication instance
import { auth } from './firebase'; 
// Import the Header component
import Header from './Header';

const ForgotPassword = () => {
    // Define state variables
    const [email, setEmail] = useState(''); // State for the email input
    const [submitted, setSubmitted] = useState(false); // State to track form submission
    const [error, setError] = useState(''); // State for error messages
    const [resetSuccessful, setResetSuccessful] = useState(false); // State to track successful password reset

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmail(value); // Update the email state
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        // Send password reset email using Firebase Authentication
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setSubmitted(true); // Set submitted state to true on success
                setError(''); // Clear any existing errors
            })
            .catch((error) => {
                setError('Failed to send password reset email.'); // Set error message on failure
                setSubmitted(false); // Ensure submitted state is false on failure
            });
    };

    return (
        <div className="forgot-password-section">
            <Header /> {/* Render the Header component */}
            <div className="forgot-password-background">
                <h2>Forgot Password</h2>
                {!submitted ? (
                    // Render the form if the email has not been submitted
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email Address:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleChange} // Update the email state on change
                                required
                            />
                        </div>
                        {error && <p className="error-message">{error}</p>} {/* Display error message if any */}
                        <button type="submit" className="submit-button">Submit</button>
                    </form>
                ) : (
                    // Render confirmation message if the email has been submitted
                    <div className="confirmation-message">
                        <h3>Check your email</h3>
                        <p>If the email you provided is associated with an account, you will receive a password reset link.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ForgotPassword; // Export the ForgotPassword component
