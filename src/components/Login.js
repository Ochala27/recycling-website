import React, { useState } from 'react'; // Import React and useState hook
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom
import { signInWithEmailAndPassword } from 'firebase/auth'; // Import signInWithEmailAndPassword function from Firebase Authentication
import { auth } from './firebase'; // Import Firebase authentication instance
import Header from './Header'; // Import Header component
import ForgotPassword from './Forgetpassword'; // Import ForgotPassword component

const Login = () => {
    // Define state variables
    const [formData, setFormData] = useState({
        email: '', // Initial state for email input
        password: '' // Initial state for password input
    });

    const [loggedIn, setLoggedIn] = useState(false); // State to track if user is logged in
    const [error, setError] = useState(''); // State to store error messages
    const [showForgotPassword, setShowForgotPassword] = useState(false); // State to toggle forgot password form

    const navigate = useNavigate(); // Initialize useNavigate hook for navigation

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, // Spread existing formData
            [name]: value // Update the changed input
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        signInWithEmailAndPassword(auth, formData.email, formData.password) // Sign in with email and password using Firebase
            .then(() => {
                setLoggedIn(true); // Set loggedIn state to true on success
                setError(''); // Clear any existing errors
                setFormData({ email: '', password: '' }); // Reset form fields
            })
            .catch((error) => {
                setError('Invalid email or password.'); // Set error message on failure
            });
    };

    // Handle forgot password click
    const handleForgotPassword = () => {
        setShowForgotPassword(true); // Show forgot password form
    };

    // Validate form
    const isFormValid = formData.email && formData.password; // Check if form inputs are filled

    if (showForgotPassword) {
        return <ForgotPassword />; // Render ForgotPassword component if showForgotPassword is true
    }

    return (
        <div className="login-section">
            <Header /> {/* Render Header component */}
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
                                onChange={handleChange} // Update email state on change
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
                                onChange={handleChange} // Update password state on change
                                required
                            />
                        </div>
                        {error && <p className="error-message">{error}</p>} {/* Display error message if any */}
                        <div className="button-group">
                            <button type="submit" disabled={!isFormValid} className="submit-button">Submit</button>
                            <button type="button" className="forgot-password-button" onClick={handleForgotPassword}>Forgot Password?</button>
                        </div>
                    </form>
                ) : (
                    <div className="confirmation-message">
                        <h3>Welcome back!</h3>
                        <p>You have successfully logged in.</p>
                        <button 
                            className="okay-button" 
                            onClick={() => navigate('/mainpage')} // Navigate to main page on click
                        >
                            Okay
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login; // Export Login component
