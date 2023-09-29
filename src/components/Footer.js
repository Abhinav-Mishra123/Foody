import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white p-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
          <Link className="navbar-brand logo" to="/">F<span className="text-danger">oo</span>dy</Link>
            {/* Your Logo */}
          </div>
          <div className="col-md-3">
            <h5>Important Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <div className="d-flex">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/128/174/174855.png" width="40px" height="40px" alt="Instagram" className="me-3" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" width="40px" height="40px" alt="linkedIn" className="me-3" />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/128/174/174883.png" width="40px" height="40px" alt="Youtube" className="me-3" />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/128/733/733547.png" width="40px" height="40px" alt="Facebook" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
