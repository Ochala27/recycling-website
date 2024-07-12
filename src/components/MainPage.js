import React from 'react';
import WelcomeSection from './WelcomeSection';
import QuickStats from './QuickStats';
import Notifications from './Notifications';
import Headerr from './Headerr'

function MainContent() {
  return (
    <main>
       <section id="headerr" className="section">
        <h2></h2>
        <Headerr />
      </section>
      <section id="overview" className="section">
        <h2>Dashboard Overview</h2>
        <WelcomeSection />
        <section id="quickstats" className="section">
        <h2>QuickStats</h2>
        <QuickStats />
      </section>
      </section>
      <section id="notifications" className="section">
        <h2>Notifications</h2>
        <Notifications />
      </section>
    </main>
  );
}

export default MainContent;
