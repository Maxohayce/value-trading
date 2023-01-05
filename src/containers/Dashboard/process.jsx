import React from "react";
import Layout from "./layout";
import "./dashboard.css";

const Deposit = () => {
  return (
    <Layout>
      <div className="dashboard_right">
        <div>
          <h3>Deposit Confirmation:</h3>
        </div>
        <div>
          <div>
            <h3>Follow these steps to complete your deposit</h3>
            <div>
              <ol>
                <li>
                  {" "}
                  Copy the Company Usdt wallet address below and pay the amount
                  you entered to deposit, into the Usdt wallet address which is
                  below.
                </li>
                <li>
                  {" "}
                  Once you have sent it click on the 'SAVE' button below.
                </li>
              </ol>
            </div>
          </div>
          <div>
            <p>USDT Erc20 wallet: 0xEAC3ce292F95d779732e7a26c95c57A742cf5119</p>
          </div>
        </div>
        <table className="dashboard_table">
          <tr>
            <td>Plan:</td>
            <td>Basic Plan</td>
          </tr>
          <tr>
            <td>Profit:</td>
            <td>5.50%s</td>
          </tr>
          <tr>
            <td>Principal Return:</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Principal Withdraw:</td>
            <td>Available</td>
          </tr>
          <tr>
            <td>Credit Amount:</td>
            <td>Maria Anders</td>
          </tr>
          <tr>
            <td>Deposit Fee:</td>
            <td>Maria Anders</td>
          </tr>
          <tr>
            <td>Debit Amount:</td>
            <td>Maria Anders</td>
          </tr>
        </table>
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

export default Deposit;
