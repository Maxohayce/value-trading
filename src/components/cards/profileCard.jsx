import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "./cards.css";

const ProfileCard = ({ expert, title, image}) => {
    return(
        <div className="profile_card">
            <img src={image} alt="" />
            <div className="expert_detail">
                <h4>{expert}</h4>
                <p>{title}</p>
                <FontAwesomeIcon className="msg_icon" icon={faEnvelope}></FontAwesomeIcon>
            </div>
        </div>
    )
}

export default ProfileCard;