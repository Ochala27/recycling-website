import React, { useState, useEffect } from 'react';
import { ref, set, get, update } from 'firebase/database';
import { auth, database } from './firebase'; // Import Firebase authentication and database
import Headerr from './Headerr'; // Import Headerr component

const RequestPickup = () => {
    // State to handle form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        date: '',
        time: '',
        phase: '',
        houseNumber: ''
    });

    // State to track form submission status, errors, and request count
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [requestCount, setRequestCount] = useState(0);
    const MAX_REQUESTS = 100; // Maximum allowed requests

    // Fetch the current request count for the logged-in user
    useEffect(() => {
        const fetchRequestCount = async () => {
            const user = auth.currentUser;
            if (user) {
                const userRef = ref(database, `users/${user.uid}`);
                const snapshot = await get(userRef);
                if (snapshot.exists()) {
                    const userData = snapshot.val();
                    setRequestCount(userData.requestCount || 0);
                }
            }
        };

        fetchRequestCount(); // Call the function to fetch the request count
    }, []);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Validate phase number (format: PXX)
    const validatePhaseNumber = (phase) => {
        const phaseRegex = /^P\d{2}$/;
        return phaseRegex.test(phase);
    };

    // Validate house number (format: HXX)
    const validateHouseNumber = (houseNumber) => {
        const houseNumberRegex = /^H\d{2}$/;
        return houseNumberRegex.test(houseNumber);
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validatePhaseNumber(formData.phase)) {
            setError('Phase number must be one capital letter "P" followed by two numbers.');
            return;
        }
        if (!validateHouseNumber(formData.houseNumber)) {
            setError('House number must be one capital letter "H" followed by two numbers.');
            return;
        }

        if (requestCount >= MAX_REQUESTS) {
            setError('You have reached the maximum number of requests allowed.');
            return;
        }

        try {
            // Save the request data in the database
            const pickupsRef = ref(database, 'pickups/' + Date.now()); // Use a timestamp as unique ID
            await set(pickupsRef, formData);

            // Update user bonus and request count
            const user = auth.currentUser;
            if (user) {
                const userRef = ref(database, `users/${user.uid}`);
                const snapshot = await get(userRef);
                if (snapshot.exists()) {
                    const userData = snapshot.val();
                    const newBonus = (userData.bonus || 0) + 100;
                    const newRequestCount = (userData.requestCount || 0) + 1;
                    await update(userRef, { bonus: newBonus, requestCount: newRequestCount });
                    setRequestCount(newRequestCount);
                }
            }

            setSubmitted(true); // Mark form as submitted
            setError(''); // Clear any errors
        } catch (error) {
            setError('Failed to save the request. Please try again.');
        }
    };

    // Handle "Make Another Request" button click
    const handleMakeAnotherRequest = () => {
        setSubmitted(false);
        setFormData({
            name: '',
            email: '',
            address: '',
            date: '',
            time: '',
            phase: '',
            houseNumber: ''
        });
    };

    return (
        <div className="request-pickup-section">
            <Headerr /> {/* Render Headerr component */}
            <div className="request-pickup-background">
                <h2>Request Pick Up</h2>
                {!submitted ? (
                    <form onSubmit={handleSubmit}>
                        {/* Form fields for user input */}
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
                        {requestCount < MAX_REQUESTS && (
                            <button onClick={handleMakeAnotherRequest}>Make Another Request</button>
                        )}
                        {requestCount >= MAX_REQUESTS && (
                            <p>You have reached the maximum number of requests.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RequestPickup; // Export RequestPickup component
