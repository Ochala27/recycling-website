// PickupHistory.js
import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { database } from './firebase'; // Adjust the import path as needed
import Headerr from './Headerr';

function PickupHistory() {
    const [pickups, setPickups] = useState([]);

    useEffect(() => {
        const pickupsRef = ref(database, 'pickups');
        onValue(pickupsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const pickupsList = Object.values(data);
                setPickups(pickupsList);
            }
        });
    }, []);

    return (
        <div className="pickup-history-section">
            <Headerr />
            <h2>Pickup History</h2>
            <ul className="pickup-log">
                {pickups.map((pickup, index) => (
                    <li key={index}>
                        Pick-Up on {pickup.date} at {pickup.time} - 
                        <span>{pickup.name} ({pickup.houseNumber}, {pickup.phase})</span>, 
                        <span> Address: {pickup.address}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PickupHistory;
