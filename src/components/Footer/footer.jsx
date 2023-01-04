import React from "react";

import "./footer.css";
import Logo from "../../images/logo.png";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer_top">
            <div className="footer_contact">
                <img className="logo" src={Logo} alt="logo" />
                <p>+447943444353</p>
                <p>@contact valuetrading -<br/>market.com</p>
                <p>address in England</p>
            </div>
            <div className="footer_about">
                <h3>About</h3>
                <ul>
                    <li>About Company</li>
                    <li>News & Update</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className="footer_support">
                <h3>Support</h3>
                <ul>
                    <li>Contact Us</li>
                    <li>Terms of Use</li>
                    <li>UK registered</li>
                </ul>
            </div>
        </div>
        <div className="footer_bottom">
            <p>© 2021 Value Trading Market. All rights reserved.</p>
        </div>
    </div>
  );
}

export default Footer;