import React from "react";
import classes from "./Navbar.module.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import HelpIcon from "@mui/icons-material/Help";
import AppsIcon from "@mui/icons-material/Apps";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.wrapper}>
        <div className={classes.search}>
          <SearchIcon />
          <input type="text" placeholder="Search..." />
        </div>
        <div className={classes.iconItems}>
          <div className={classes.item}>
            <NavLink to="add">
              {" "}
              <button>Add device</button>
            </NavLink>
          </div>
          <div className={classes.item}>
            <AppsIcon />
          </div>
          <div className={classes.item}>
            <HelpIcon />
          </div>
          <div className={classes.item}>
            <PersonIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
