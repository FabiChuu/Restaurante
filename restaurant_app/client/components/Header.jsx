import React from 'react';
import './Header.css';
import profilePlaceholder from '../assets/profile-placeholder.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        {/* You can replace this with your actual logo */}
        <img src="https://via.placeholder.com/150x50.png?text=Restaurant+Logo" alt="Logo" />
      </div>
      <div className="header-profile">
        <img src={profilePlaceholder} alt="User Profile" className="profile-pic" />
        <span>Username</span>
      </div>
    </header>
  );
};

export default Header;
