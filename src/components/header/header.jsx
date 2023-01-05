import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { faClock, faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

import "./header.css";

const Header = () => {
    return(
        <div className="header">
            <div className="header-left">
                <FontAwesomeIcon icon={faClock}/>
                <p>May 2, 2019</p>
            </div>
            <div className="header-right">
                <div className="phone">
                    <FontAwesomeIcon icon={faPhone} />
                    <p>+4409282648</p>
                </div>
                <div className="email">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p>contact@value-trading.com</p>
                </div>
                <div className="header-brands">
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter}/>
                    <FontAwesomeIcon icon={faLinkedin}/>
                </div>
            </div>
        </div>
    )
}


export default Header;