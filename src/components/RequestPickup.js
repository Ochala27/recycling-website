import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase'; // Import Firebase authentication
import Header from './Header';
import ForgotPassword from './Forgetpassword';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState('');
    const [showForgotPassword, setShowForgotPassword] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, formData.email, formData.password)
            .then(() => {
                setLoggedIn(true);
                setError('');
                setFormData({ email: '', password: '' });
            })
            .catch((error) => {
                setError('Invalid email or password.');
            });
    };

    const handleForgotPassword = () => {
        setShowForgotPassword(true);
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
                        <button 
                            className="okay-button" 
                            onClick={() => navigate('/mainpage')}
                        >
                            Okay
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
