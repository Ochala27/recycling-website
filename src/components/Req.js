// RequestPickup.js
import React, { useState } from 'react';
import { ref, set } from 'firebase/database';
import { database } from './firebase'; // Adjust the import path as needed
import Headerr from './Headerr';

const RequestPickup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        date: '',
        time: '',
        phase: '',
        houseNumber: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validatePhaseNumber = (phase) => {
        const phaseRegex = /^P\d{2}$/;
        return phaseRegex.test(phase);
    };

    const validateHouseNumber = (houseNumber) => {
        const houseNumberRegex = /^H\d{2}$/;
        return houseNumberRegex.test(houseNumber);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validatePhaseNumber(formData.phase)) {
            setError('Phase number must be one capital letter "P" followed by two numbers.');
            return;
        }
        if (!validateHouseNumber(formData.houseNumber)) {
            setError('House number must be one capital letter "H" followed by two numbers.');
            return;
        }
        
        // Save request to Firebase
        const pickupsRef = ref(database, 'pickups/' + Date.now()); // Use a timestamp as unique ID
        set(pickupsRef, formData)
            .then(() => {
                setSubmitted(true);
                setError('');
            })
            .catch((error) => {
                setError('Failed to save the request. Please try again.');
            });
    };

    const handleBackToHome = () => {
        window.location.href = '/';
    };

    return (
        <div className="request-pickup-section">
            <Headerr />
            <div className="request-pickup-background">
                <h2>Request Pick Up</h2>
                {!submitted ? (
                    <form onSubmit={handleSubmit}>
                        {/* Form fields as before */}
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
                            <label htmlFor="date">Preferred Date:</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="time">Preferred Time:</label>
                            <input
                                type="time"
                                id="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        <button type="submit">Submit</button>
                    </form>
                ) : (
                    <div className="confirmation-message">
                        <h3>Thank you for your request!</h3>
                        <p>We have received your pickup request. Here are the details:</p>
                        <p><strong>Customer Name:</strong> {formData.name}</p>
                        <p><strong>Email Address:</strong> {formData.email}</p>
                        <p><strong>Address:</strong> {formData.address}</p>
                        <p><strong>Phase Number:</strong> {formData.phase}</p>
                        <p><strong>House Number:</strong> {formData.houseNumber}</p>
                        <p><strong>Preferred Date:</strong> {formData.date}</p>
                        <p><strong>Preferred Time:</strong> {formData.time}</p>
                        <button onClick={handleBackToHome}>Back to Home</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RequestPickup;
