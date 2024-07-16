import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { auth, database } from './firebase';

const WelcomeSection = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const user = auth.currentUser;
        if (user) {
            const userRef = ref(database, `users/${user.uid}`);
            const unsubscribe = onValue(userRef, (snapshot) => {
                if (snapshot.exists()) {
                    setUserData(snapshot.val());
                } else {
                    setError('No user data found');
                }
                setLoading(false);
            }, (error) => {
                setError('Failed to fetch user data');
                setLoading(false);
            });

            // Cleanup the subscription on unmount
            return () => unsubscribe();
        } else {
            setError('No user is currently logged in');
            setLoading(false);
        }
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
                <p>Bonus: {userData.bonus}</p>
            </div>
        </div>
    );
};

export default WelcomeSection;
