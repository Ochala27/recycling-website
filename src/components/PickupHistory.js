// Import modules from React and Firebase
import React, { useEffect, useState } from 'react'; // Import React, useEffect, and useState from 'react'
import { ref, onValue } from 'firebase/database'; // Import ref and onValue from 'firebase/database'
import { database } from './firebase'; // Import database from your Firebase configuration file
import Headerr from './Headerr'; // Import Headerr component

function PickupHistory() {
    // State to store the list of pickups
    const [pickups, setPickups] = useState([]); // Initialize pickups state as an empty array

    useEffect(() => {
        // Reference to the 'pickups' node in the database
        const pickupsRef = ref(database, 'pickups'); // Create a reference to the 'pickups' node in the Firebase database
        
        // Set up a listener to fetch data from the 'pickups' node
        onValue(pickupsRef, (snapshot) => {
            const data = snapshot.val(); // Get the data snapshot
            if (data) { // If data exists
                const pickupsList = Object.values(data); // Convert data object to an array
                setPickups(pickupsList); // Update the pickups state with the fetched data
            }
        });
    }, []); // Empty dependency array means this effect runs once when the component mounts

    return (
        <div className="pickup-history-section">
            <Headerr /> {/* Render Headerr component */}
            <h2>Pickup History</h2>
            <ul className="pickup-log">
                {/* Iterate over the pickups array and render each pickup as a list item */}
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

export default PickupHistory; // Export PickupHistory component
