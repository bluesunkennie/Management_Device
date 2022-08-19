import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import classes from "./Sidebar.module.css";
import SpeedIcon from "@mui/icons-material/Speed";
import DevicesIcon from "@mui/icons-material/Devices";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link, NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div className={classes.sidebar}>
        <div className={classes.header}>
          <ul>
            {/* <NavLink to="/"> */}{" "}
            <li>
              <SpeedIcon className={classes.icon} />
              <span>Overview</span>
            </li>
            {/* </NavLink> */}
            <NavLink to="/">
              {" "}
              <li>
                <DevicesIcon className={classes.icon} />
                <span>Devices</span>
              </li>
            </NavLink>
            <NavLink to="#">
              {" "}
              <li>
                <CloudDownloadIcon className={classes.icon} />
                <span>Backups</span>
              </li>
            </NavLink>
          </ul>
          <ul>
            <li>
              <ManageAccountsIcon className={classes.icon} />
              <span>Manage Account</span>
            </li>
            <li>
              <SettingsIcon className={classes.icon} />
              <span>Settings</span>
            </li>
            <hr></hr>
            <li>
              <ArrowBackIosNewIcon className={classes.icon} />
            </li>
          </ul>
        </div>
        <div className={classes.bottom}></div>
      </div>
    </>
  );
};
export default Sidebar;
