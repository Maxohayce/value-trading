import React from "react";
import Layout from "./layout";
import "./dashboard.css";

const Deposit = () => {
  return (
    <Layout>
      <div className="dashboard_right">
        <div className="deposit_container">
          <div className="deposit_container_header">
            <h4>Make a Deposit</h4>
          </div>
          <div className="deposit_container_details">
            <div className="deposit_container_item">
              <p>Your Account Balance</p>
              <input className="deposit_input" value={"$1235566"} disabled />
            </div>
            <div className="deposit_container_item deposit_package">
              <p>Select Package</p>
              <select  className="deposit_input"></select>
            </div>
            <div className="deposit_container_item deposit_package">
              <p>Select Payment Method</p>
              <select className="deposit_input"></select>
            </div>
            <div className="deposit_container_item deposit_package">
              <p>Enter Amount</p>
              <input className="deposit_input" value={"$300"} />
            </div>
          </div>
          <div className="deposit_button_container">
            <button>
              Proceed
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Deposit;
