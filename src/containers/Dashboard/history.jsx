import React from "react";
import Layout from "./layout";

const History = () => {
  return (
    <Layout>
      <div className="dashboard_right">
        <div className="history_container">
          {/* Deposit history */}
          <div className="history_table">
            <div className="history_table_header">
              <h4>Deposit History</h4>
            </div>
            <div className="history_table_item">
              <div>
                <p>24/10/2022</p>
                <p>Deposit</p>
              </div>
              <p>Offshore Drilling Plan</p>
              <p>$500</p>
            </div>
            <div className="history_table_item">
              <div>
                <p>24/10/2022</p>
                <p>Deposit</p>
              </div>
              <p>Offshore Drilling Plan</p>
              <p>$500</p>
            </div>
          </div>
          {/* Withdrawal history */}
          <div className="history_table">
            <div className="history_table_header">
              <h4>Withdrawal History</h4>
            </div>
            <div className="history_table_item">
              <div>
                <p>24/10/2022</p>
                <p>Withdrawal</p>
              </div>
              <p>Offshore Drilling Plan</p>
              <p>$500</p>
            </div>
            <div className="history_table_item">
              <div>
                <p>24/10/2022</p>
                <p>Withdrawal</p>
              </div>
              <p>Offshore Drilling Plan</p>
              <p>$500</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default History;
