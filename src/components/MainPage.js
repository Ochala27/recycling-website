import React from 'react';
import WelcomeSection from './WelcomeSection';
import Notifications from './Notifications';
import Headerr from './Headerr';

function MainContent() {
  return (
    <main>
      <section id="headerr" className="section">
        <Headerr />
      </section>
      <section id="overview" className="section">
        <h2>Dashboard Overview</h2>
        <WelcomeSection />
      </section>
      <section id="notifications" className="section">
        <h2>Notifications</h2>
        <Notifications />
      </section>
    </main>
  );
}

export default MainContent;
