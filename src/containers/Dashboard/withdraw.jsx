import React from "react";
import Layout from "./layout";

const Withdraw = () => {
  return (
    <Layout>
      <div className="dashboard_right">
        <div className="deposit_container_header">
          <h4>Ask for Withdrawal</h4>
        </div>
        <div className="withdrawal_balance">
            <div className="withdrawal_balance_info">
                <span>Account Balance:</span>
                <span>$200000</span>
            </div>
            <div className="withdrawal_balance_info">
                <span>Pending:</span>
                <span>$20000</span>
            </div>
        </div>
        <ul className="responsive-table">
          <thead className="table-header">
            <div className="col col-1">Processing</div>
            <div className="col col-2">Available</div>
            <div className="col col-3">Pending</div>
            <div className="col col-4">Account</div>
          </thead>
          <li className="table-row">
            <div className="col col-1" data-label="Job Id">
              42235
            </div>
            <div className="col col-2" data-label="Customer Name">
              John Doe
            </div>
            <div className="col col-3" data-label="Amount">
              $350
            </div>
            <div className="col col-4" data-label="Payment Status">
              Pending
            </div>
          </li>
          <li className="table-row">
            <div className="col col-1" data-label="Job Id">
              42442
            </div>
            <div className="col col-2" data-label="Customer Name">
              Jennifer Smith
            </div>
            <div className="col col-3" data-label="Amount">
              $220
            </div>
            <div className="col col-4" data-label="Payment Status">
              Pending
            </div>
          </li>
          <li className="table-row">
            <div className="col col-1" data-label="Job Id">
              42257
            </div>
            <div className="col col-2" data-label="Customer Name">
              John Smith
            </div>
            <div className="col col-3" data-label="Amount">
              $341
            </div>
            <div className="col col-4" data-label="Payment Status">
              Pending
            </div>
          </li>
          <li className="table-row">
            <div className="col col-1" data-label="Job Id">
              42311
            </div>
            <div className="col col-2" data-label="Customer Name">
              John Carpenter
            </div>
            <div className="col col-3" data-label="Amount">
              $115
            </div>
            <div className="col col-4" data-label="Payment Status">
              Pending
            </div>
          </li>
        </ul>
        <div>
          <h2>Required Information</h2>
          <div>
            <p>Username</p>
            <p>Transaction ID/Hash</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Withdraw;
