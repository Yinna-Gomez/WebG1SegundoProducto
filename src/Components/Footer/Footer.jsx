import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Powered by <strong>S:P.C.</strong> &copy; {new Date().getFullYear()}</p>
      <div className="footer-links">
        <a href="https://github.com/Yinna-Gomez" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.uniamazonia.edu.co/" target="_blank">Universidad</a>
      </div>
    </footer>
  );
};

export default Footer;