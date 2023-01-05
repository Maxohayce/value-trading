import React from "react";
import Layout from "./layout";

const Referral = () => {
  return (
    <Layout>
      <div>
        <div className="deposit_container_header">
          <h4>Your Referral</h4>
        </div>
        <div className="referral_container">
          <div className="referral_container_items">
            <span>Referrals</span>
            <span>1</span>
          </div>
          <div className="referral_container_items">
            <span>Total Referrals Commision</span>
            <span>$1</span>
          </div>
          <div className="referral_container_items">
            <span>Your Referral Links</span>
            <div>
            <span>https://digitalbull-market.com/?a=referals</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Referral;
