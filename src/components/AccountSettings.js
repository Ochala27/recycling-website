import React, { useState, useEffect } from 'react';
import { ref, update, remove, get } from 'firebase/database';
import { deleteUser } from 'firebase/auth';
import { auth, database } from './firebase'; // Make sure this path is correct
import Headerr from './Headerr';

function AccountSettings() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phaseNumber, setPhaseNumber] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserId(user.uid);
      // Fetch user data and set initial state
      const userRef = ref(database, 'users/' + user.uid);
      get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setName(data.name);
          setAddress(data.address);
          setPhaseNumber(data.phase);
          setHouseNumber(data.houseNumber);
        }
      }).catch((error) => {
        console.error("Error fetching user data: ", error);
      });
    }
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    if (userId) {
      update(ref(database, 'users/' + userId), {
        name,
        address,
        phase: phaseNumber,
        houseNumber
      }).then(() => {
        alert('Changes saved.');
      }).catch((error) => {
        alert('Failed to save changes. Please try again.');
      });
    }
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account?')) {
      const user = auth.currentUser;
      if (user) {
        remove(ref(database, 'users/' + user.uid))
          .then(() => {
            return deleteUser(user);
          })
          .then(() => {
            alert('Account deleted.');
          })
          .catch((error) => {
            alert('Failed to delete account. Please try again.');
          });
      }
    }
  };

  return (
    <>
      <Headerr />
      <form onSubmit={handleSave} className="account-settings-form">
        <div className="form-group">
          <label htmlFor="name">Change Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="address">Change Address:</label>
          <input type="text" id="address" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="phaseNumber">Change Phase Number:</label>
          <input type="text" id="phaseNumber" name="phaseNumber" value={phaseNumber} onChange={(e) => setPhaseNumber(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="houseNumber">Change House Number:</label>
          <input type="text" id="houseNumber" name="houseNumber" value={houseNumber} onChange={(e) => setHouseNumber(e.target.value)} />
        </div>

        <button type="submit">Save Changes</button>
        <button type="button" onClick={handleDeleteAccount}>Delete Account</button>
      </form>
    </>
  );
}

export default AccountSettings;
