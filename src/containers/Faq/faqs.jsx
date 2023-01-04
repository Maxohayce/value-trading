import React from "react";

import Faq from "../../components/faq/faq";
import Layout from "../../components/Layout/layout";
import "./faqs.css";


let faqItems = [
  {
      id: 1,
      question: "Are you a legitimate company ?",
      answer: "Yes, we are incorporated as LTD company named: 'Digitalbull Market.' The company has registration number is 11976602 and it is located at 5.14 Paintworks, Bath Road, Bristol, England, BS4 3EH.",
  },
  {
      id: 2,
      question: "How to join Digitalbull Market and is it free ?",
      answer: "Please register, fill in the form and proceed to sign-in here.* Registration process is completely free and quick.",
  },
  {
      id: 3,
      question: "How can I invest with Digitalbull Market ?",
      answer: "To make a investment you must first become a member of Digitalbull Market . Once you are signed up, you can make your first deposit. All deposits must be made through the Members Area. You can login using the member username and password you receive when signup.",
  },
  {
      id: 4,
      question: "What is the Minimum / Maximum amount allowed for deposit ?",
      answer: "You can add new deposits starting with $100 and up to $5000000 for a single active deposit.* You can have multiple active deposit at the same time. .",
  },
  {
      id: 5,
      question: "Which e-currencies do you accept?",
      answer: "We accept Bitcoin & Ethereum.",
  },
  {
      id: 6,
      question: "How can I withdraw funds?",
      answer: "Login to your account using your username and password and check the Withdraw section.",
  },
  {
      id: 7,
      question: "How long does it take for my deposit to be added to my account?",
      answer: "Your account will be updated as fast, as you deposit."
  }
]



const Faqs = () => {
  return (
    <Layout>
    <div className="faqs">
      <div className="faq_top">
          <p>FAQ</p>
          <h1>Frequently Asked Questions</h1>
      </div>
      <div className="faq_bottom">
        {faqItems.map(({id, question, answer}) => (
          <Faq key={id} question={question} answer={answer} />
        ))}
      </div>
    </div>
    </Layout>
  );
}

export default Faqs;