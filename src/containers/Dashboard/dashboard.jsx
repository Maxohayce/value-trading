import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowLeftLong,
  faArrowRightFromBracket,
  faChartSimple,
  faGlobe,
  faHistory,
  faHouse,
  faHouseUser,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import "./dashboard.css";
import Layout from "./layout";

const btnList = [
  {
    id: 1,
    title: "Make a deposit",
  },
  {
    id: 2,
    title: "List Deposit",
  },
  {
    id: 3,
    title: "Deposit history",
  },
  {
    id: 4,
    title: "History's third",
  },
  {
    id: 5,
    title: "Withdrawal history",
  },
  {
    id: 6,
    title: "Edit account",
  },
  {
    id: 7,
    title: "Security",
  },
  {
    id: 8,
    title: "Logout",
  },
];

const Dashboard = () => {
  return (
    <Layout>
        <div className="dashboard_right">
          <div className="dashboard_info_container">
            <h4>Welcome back, Nora</h4>
            <p>
              Digitalbull Get familiar with the market, here are some ways to
              get started.
            </p>
            <ul>
              <li>
                From the deposit page, Choose the package you want to invest
              </li>
              <li>Select the currency you are suitable with.</li>
              <li>
                Your third will be started according to the application
                packages.
              </li>
            </ul>
            <div className="btn_group">
              {btnList.map((item) => {
                return <button className="btn_list">{item.title}</button>;
              })}
            </div>
          </div>
          <div className="total">
            <div className="total_balance balance_card">
              <h4>Total Balance</h4>
              <p></p>
              <h4>$1294024.50</h4>
            </div>
            <div className="total_withdrawal balance_card">
              <h4>Total withdrawal</h4>
              <p></p>
              <h4>$1294024.50</h4>
            </div>
            <div className="pending_withdrawal balance_card">
              <h4>pending withdrawal</h4>
              <p></p>
              <h4>$1294024.50</h4>
            </div>
          </div>
            <div className="table_header">
                <h4>Dashboard</h4>
            </div>
          <table className="dashboard_table">

            <tr>
              <td>Affiliate Link</td>
              <td>Contact</td>
            </tr>
            <tr>
              <td>Total Balance</td>
              <td>Maria Anders</td>
            </tr>
            <tr>
              <td>Total Earning</td>
              <td>Francisco Chang</td>
            </tr>
            <tr>
              <td>Active Deposit</td>
              <td>Contact</td>
            </tr>
            <tr>
              <td>Last Access</td>
              <td>Maria Anders</td>
            </tr>
          </table>
        </div>

    </Layout>
  );
};

export default Dashboard;
