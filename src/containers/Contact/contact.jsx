import React from "react";
import Layout from "../../components/Layout/layout";

import "./contact.css";


const Contact = () => {
  return (
    <Layout>
    <form className="support">
      <div className="support_top">
        <p>Support</p>
        <h1>Get in touch with Us</h1>
      </div>
      <div className="support_bottom">
        <div className="contact_detail">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
        </div>
        <div className="contact_message">
          <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
        </div>
        <div className="support_button">
          <button className="contact_button"> Send </button>
        </div>
      </div>
    </form>
    </Layout>
  );
}


export default Contact;