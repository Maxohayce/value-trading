import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator } from "@fortawesome/free-solid-svg-icons";
import "./cards.css";

const investCard = ({icon, plan, planTime, minimumAmt, maximumAmt, activeInvestorsCount, Term}) => {
    return(
        <div className="invest_card">
            <div className="invest_card_top">
                <div className="invest_card_icons">
                    <FontAwesomeIcon icon={icon}/>
                    {/* <FontAwesomeIcon icon={faCalculator} /> */}
                </div>
                <h3>{plan}</h3>
                <p>{planTime}</p>
            </div>
            <div className="invest_card_bottom">
                <div className="invest_detail">
                    <p>Minimum Deposit</p>
                    <p>{minimumAmt}</p>
                </div>
                <div className="invest_detail">
                   <p> Maximum Deposit</p>
                   <p>{maximumAmt}</p>
                </div>
                <div className="invest_detail">
                    <p>Active Investors</p>
                    <p>{activeInvestorsCount}</p>
                </div>
                <div className="invest_detail">
                    <p>Term</p>
                    <p>{Term}</p>
                </div>
            </div>
        </div>
    )
}

export default investCard;