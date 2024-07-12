import React from 'react';

function Header() {
  return (
    <header>
      <div className="header-content">
        <span>Welcome, [User Name]!</span>
        <div className="header-links">
          <a href="#profile">Profile</a>
          <a href="#settings">Settings</a>
          <a href="#logout">Logout</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
