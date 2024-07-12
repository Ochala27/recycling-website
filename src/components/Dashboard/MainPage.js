import React from 'react';
import WelcomeSection from './WelcomeSection';
import QuickStats from './QuickStats';
import Notifications from './Notifications';
import AccountSettings from './AccountSettings';
import RecyclingStats from './RecyclingStats';
import PickupHistory from './PickupHistory';

function MainContent() {
  return (
    <main>
      <section id="overview" className="section">
        <h2>Dashboard Overview</h2>
        <WelcomeSection />
        <QuickStats />
      </section>
      <section id="notifications" className="section">
        <h2>Notifications</h2>
        <Notifications />
      </section>
      <section id="account-settings" className="section">
        <h2>Account Settings</h2>
        <AccountSettings />
      </section>
      <section id="recycling-stats" className="section">
        <h2>Recycling Statistics</h2>
        <RecyclingStats />
      </section>
      <section id="pickup-history" className="section">
        <h2>Pick-Up History</h2>
        <PickupHistory />
      </section>
    </main>
  );
}

export default MainContent;
