import React, { useState } from 'react';
import Headerr from './Headerr';

function AccountSettings() {
  const [name, setName] = useState('[User Name]');
  const [address, setAddress] = useState('[User Address]');
  const [phaseNumber, setPhaseNumber] = useState('[Phase Number]');
  const [houseNumber, setHouseNumber] = useState('[House Number]');

  const handleSave = (e) => {
    e.preventDefault();
    // Add save logic
    alert('Changes saved.');
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account?')) {
      // Add delete account logic
      alert('Account deleted.');
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
