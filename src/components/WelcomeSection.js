import React, { useEffect, useState } from 'react';
import { ref, get } from 'firebase/database';
import { auth, database } from './firebase';

const WelcomeSection = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            const user = auth.currentUser;
            if (user) {
                try {
                    const userRef = ref(database, 'users/' + user.uid);
                    const snapshot = await get(userRef);
                    if (snapshot.exists()) {
                        setUserData(snapshot.val());
                    } else {
                        setError('No user data found');
                    }
                } catch (error) {
                    setError('Failed to fetch user data');
                }
            }
            setLoading(false);
        };

        fetchUserData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    if (!userData) {
        return null;
    }

    return (
        <div className="welcome-section">
            <div className="basic-info">
                <p>Name: {userData.name}</p>
                <p>Email: {userData.email}</p>
                <p>Address: {userData.address}</p>
                <p>Phase Number: {userData.phase}</p>
                <p>House Number: {userData.houseNumber}</p>
            </div>
        </div>
    );
};

export default WelcomeSection;
