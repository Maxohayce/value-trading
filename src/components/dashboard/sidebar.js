import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

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

const Sidebar = () => {
  return (
    <div>
      <div className="dashboard_toolbar">
        <div className="right_toolbar">
          {" "}
          <div className="dashboard_toolbar_user">
            <FontAwesomeIcon icon={faUser} />
            <span> Welcome, Nora</span>
          </div>
          <div className="dashboard_toolbar_logout">
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            <span>Logout</span>
          </div>
        </div>
      </div>
      <hr className="dashboard_divider" />
      <div className="dashboard_header">
        <div className="dashboard_avatar">
          {/* <div className="avatar">
            <img src="" alt="" />
            <div className="test_avatar"></div>
            <span>
              <p>Welcome,</p>
              <h6>Nora</h6>
            </span>
          </div> */}
        </div>
        <div className="dashboard_header_info">
          <div className="dash_left">
            <Link to="/deposits">
              <span className="breadcrumb dash_left_top">
                <FontAwesomeIcon
                  className="arrow_left"
                  icon={faArrowLeftLong}
                  color="orange"
                />
                <h4>Dashboard</h4>
              </span>
            </Link>

            <span className="breadcrumb dash_left_bottom">
              <FontAwesomeIcon className="arrow_left" icon={faHouseUser} />
              <p>Dashboard</p>
            </span>
          </div>
          <div className="bal_container">
            <div className="total_bal">
              <div className="bal_left">
                <p>TOTAL BALANCE</p>
                <div className="bal_bottom">
                  <FontAwesomeIcon className="fa_user" icon={faUser} />
                  <h4>$1294024.50</h4>
                </div>
              </div>
              <FontAwesomeIcon
                className="bal_chart"
                icon={faChartSimple}
                color="purple"
              />
            </div>
            <div className="total_bal">
              <div className="bal_left">
                <p>TOTAL BALANCE</p>
                <div className="bal_bottom">
                  <FontAwesomeIcon className="fa_globe" icon={faGlobe} />
                  <h4>$1294024.50</h4>
                </div>
              </div>
              <FontAwesomeIcon
                className="bal_chart"
                icon={faChartSimple}
                color="lightblue"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
