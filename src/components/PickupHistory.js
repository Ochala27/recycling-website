import React from 'react';
import Headerr from './Headerr';

function PickupHistory() {
  return (
    <div className="pickup-history-section">
      <Headerr />
      <h2>Pickup History</h2>
      <ul className="pickup-log">
        <li>Pick-Up on 2024-07-08 - <span>10 lbs of plastic</span></li>
        {/* More pick-up history */}
      </ul>
    </div>
  );
}

export default PickupHistory;
