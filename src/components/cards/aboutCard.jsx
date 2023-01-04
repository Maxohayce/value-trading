import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./cards.css";

const aboutCard = ({title, details, icon}) => {
    return(
        <div className="about_card">
            <div className="about_card_top">
            <FontAwesomeIcon icon={icon} />
            <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <div className="about_card_details">
                <h3>{title}</h3>
                <p>{details}</p>
            </div>
        </div>
    )
}

export default aboutCard;