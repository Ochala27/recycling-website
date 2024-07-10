import React, { useState } from 'react';

const RequestPickup = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        date: '',
        time: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleBackToHome = () => {
        // logic to navigate back to the home section
        window.location.href = '/'; // Assuming '/' is the route to the home section
    };

    return (
        <div className="request-pickup-section">
            <div className="request-pickup-background">
                <h2>Request Pick Up</h2>
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
                        <button type="submit">Submit</button>
                    </form>
                ) : (
                    <div className="confirmation-message">
                        <h3>Thank you for your request!</h3>
                        <p>We have received your pickup request. Here are the details:</p>
                        <p><strong>Customer Name:</strong> {formData.name}</p>
                        <p><strong>Email Address:</strong> {formData.email}</p>
                        <p><strong>Address:</strong> {formData.address}</p>
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
