import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <div className="footer-logo">
                        <img src="/logo-main.svg" alt="SolarSquare" style={{ height: '40px', filter: 'brightness(0) invert(1)' }} />
                        <span>SolarSquare</span>
                    </div>
                    <p>
                        India's reliable solar advisor. We are committed to accelerating
                        the adoption of solar energy across the nation.
                    </p>
                </div>

                <div className="footer-links">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="#">Solar Calculator</a></li>
                        <li><a href="#">Customer Stories</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p>Email: hello@solarsquare.in</p>
                    <p>Phone: +91 98765 43210</p>
                    <div className="social-icons">
                        {/* Add social icons later if needed */}
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; 2024 SolarSquare Energy Pvt Ltd. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
