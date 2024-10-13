import React from "react";
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer text-center text-lg-start bg-light text-muted">
      <hr />
      <div className="footer-text text-center p-4">
        © 2024 Rui Barreto. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
