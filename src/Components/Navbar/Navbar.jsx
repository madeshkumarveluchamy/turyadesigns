// src/components/Navbar/Navbar.js
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file for styling
import { useTranslation } from 'react-i18next';

const NavBar = ({ className }) => {

  const { t} = useTranslation('global'); 

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${className}`}>
      <div className="navbar-container">
        <div className="navbar-logo"><a href="https://www.vishwakarmadesignstudio.in/">{t('VISHWAKARMA')}</a></div>
        <div className={`navbar-links-container ${isOpen ? 'active' : ''}`}>
          <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="https://www.vishwakarmadesignstudio.in/">{t('Home')}</Link>
            <Link to="https://www.vishwakarmadesignstudio.in/about">{t('About')}</Link>
            <Link to="https://www.vishwakarmadesignstudio.in/Team">{t('Team')}</Link>
            <Link to="https://www.vishwakarmadesignstudio.in/services">{t('Services')}</Link>
            <Link to="https://www.vishwakarmadesignstudio.in/projectmain">{t('Projects')}</Link>
            <Link to="/">{t('Turya')}</Link>
            <Link to="https://www.vishwakarmadesignstudio.in/journal">{t('Journal')}</Link>
            <Link to="https://www.vishwakarmadesignstudio.in/contact">{t('Contact')}</Link>
          </div>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
