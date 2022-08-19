import React from "react";
import classes from "./TypeDevice.module.css";
import FolderIcon from "@mui/icons-material/Folder";
const TypeDevice = ({ type }) => {
  let data;
  switch (type) {
    case "china":
      data = {
        title: "China",
        quantity: "50",
        link: "See all...",
      };
      break;
    case "germany":
      data = {
        title: "Germany",
        quantity: "50",
        link: "See all...",
      };
      break;
    case "japan":
      data = {
        title: "Japan",
        quantity: "50",
        link: "See all...",
      };
      break;
    case "vietNam":
      data = {
        title: "VietNam",
        quantity: "50",
        link: "See all...",
      };
      break;
    default:
      break;
  }
  return (
    <>
      <div className={classes.widget}>
        <div className={classes.left}>
          <div className={classes.iconFolder}>
            <FolderIcon />
          </div>
          <span className={classes.title}>{data.title}</span>
          <span  className={classes.countfile}>{data.link}</span>
        </div>
        <div className={classes.right}>
          <div className={classes.speed}>{data.quantity}</div>
        </div>
      </div>
    </>
  );
};
export default TypeDevice;
