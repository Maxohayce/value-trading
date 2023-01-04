import React, { useState} from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import "./faq.css";



const Faq = ({active, question, answer}) => {
    const [toggle, setToggle] = useState(false);

    const toggleFaq = () => { 
        setToggle(!toggle);
    }

    return (
        <div className="faq_container">
            <div className="faq">
                <p>{question}</p>
                <button className="faq_button" onClick={toggleFaq}>
                    {<FontAwesomeIcon icon={ active ? faMinus : faPlus } />}
                </button>
            </div>
            {toggle && <p className="faq_answer">{answer}</p>} 
        </div>
    );
}

export default Faq;
