import React from "react";
import Sidebar from "../../components/dashboard/sidebar";
import { Link } from "react-router-dom";
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

const Layout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <div className="layout_container">
        <div className="dashboard_left">
          <div className="sidenav">
            <Link to="/dashboard" className="sidenav_child">
              <FontAwesomeIcon
                icon={faHouse}
                className={"icon"}
              ></FontAwesomeIcon>
              <p>Dashboard</p>
            </Link>
            <Link to="/deposit" className="sidenav_child">
              <FontAwesomeIcon
                icon={faChartSimple}
                className={"icon"}
              ></FontAwesomeIcon>
              <p>Deposits</p>
            </Link>
            <Link to="/withdraw" className="sidenav_child">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className={"icon"}
              ></FontAwesomeIcon>
              <p>Withdraw</p>
            </Link>
            <Link to="/history" className="sidenav_child">
              <FontAwesomeIcon
                icon={faHistory}
                className={"icon"}
              ></FontAwesomeIcon>
              <p>History</p>
            </Link>
            <Link to="/profile" className="sidenav_child" >
              <FontAwesomeIcon
                icon={faUser}
                className={"icon"}
              ></FontAwesomeIcon>
              <p>Profile</p>
            </Link>
            <Link className="sidenav_child" to='/referral'>
              <FontAwesomeIcon
                icon={faArrowRightFromBracket}
                className={"icon"}
              ></FontAwesomeIcon>
              <p>Referral</p>
            </Link>
          </div>
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
