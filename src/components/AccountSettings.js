import React, { useState, useEffect } from 'react';
// Import Firebase functions
import { ref, update, remove, get } from 'firebase/database';
import { deleteUser } from 'firebase/auth';
// Import Firebase configuration
import { auth, database } from './firebase';
// Import the Header component
import Headerr from './Headerr';

function AccountSettings() {
  // Initialize state variables
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phaseNumber, setPhaseNumber] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [userId, setUserId] = useState(null);

  // Fetch user data when the component mounts
  useEffect(() => {
    const user = auth.currentUser; // Get the current authenticated user
    if (user) {
      setUserId(user.uid); // Set the user ID
      // Create a reference to the user's data in the database
      const userRef = ref(database, 'users/' + user.uid);
      // Fetch the user data from the database
      get(userRef).then((snapshot) => {
        if (snapshot.exists()) { // Check if the data exists
          const data = snapshot.val(); // Get the data
          // Set state variables with the fetched data
          setName(data.name);
          setAddress(data.address);
          setPhaseNumber(data.phase);
          setHouseNumber(data.houseNumber);
        }
      }).catch((error) => {
        // Log any errors that occur during the fetch
        console.error("Error fetching user data: ", error);
      });
    }
  }, []);

  // Handle form submission to save changes
  const handleSave = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (userId) {
      // Update the user's data in the database
      update(ref(database, 'users/' + userId), {
        name,
        address,
        phase: phaseNumber,
        houseNumber
      }).then(() => {
        // Show an alert if the update is successful
        alert('Changes saved.');
      }).catch((error) => {
        // Show an alert if the update fails
        alert('Failed to save changes. Please try again.');
      });
    }
  };

  // Handle account deletion
  const handleDeleteAccount = () => {
    // Confirm the user's intention to delete the account
    if (window.confirm('Are you sure you want to delete your account?')) {
      const user = auth.currentUser; // Get the current authenticated user
      if (user) {
        // Remove the user's data from the database
        remove(ref(database, 'users/' + user.uid))
          .then(() => {
            // Delete the user's authentication account
            return deleteUser(user);
          })
          .then(() => {
            // Show an alert if the account deletion is successful
            alert('Account deleted.');
          })
          .catch((error) => {
            // Show an alert if the account deletion fails
            alert('Failed to delete account. Please try again.');
          });
      }
    }
  };

  // Render the component
  return (
    <>
      <Headerr /> {/* Render the Header component */}
      <form onSubmit={handleSave} className="account-settings-form">
        <div className="form-group">
          <label htmlFor="name">Change Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)} // Update the name state
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Change Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)} // Update the address state
          />
        </div>

        <div className="form-group">
          <label htmlFor="phaseNumber">Change Phase Number:</label>
          <input
            type="text"
            id="phaseNumber"
            name="phaseNumber"
            value={phaseNumber}
            onChange={(e) => setPhaseNumber(e.target.value)} // Update the phaseNumber state
          />
        </div>

        <div className="form-group">
          <label htmlFor="houseNumber">Change House Number:</label>
          <input
            type="text"
            id="houseNumber"
            name="houseNumber"
            value={houseNumber}
            onChange={(e) => setHouseNumber(e.target.value)} // Update the houseNumber state
          />
        </div>

        <button type="submit">Save Changes</button> {/* Save changes button */}
        <button type="button" onClick={handleDeleteAccount}>Delete Account</button> {/* Delete account button */}
      </form>
    </>
  );
}

export default AccountSettings; // Export the AccountSettings component
