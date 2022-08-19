import React from "react";
import classes from "./Featured.module.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Featured = () => {
  return (
    <>
      <div className={classes.feature}>
        <div className={classes.top}>
          <h1 className={classes.title}>Total Revenue</h1>
          <MoreVertIcon fontSize="small" />
        </div>
        <div className={classes.bottom}>
          <div className={classes.featuredChart}>
            <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
          </div>
          <p className={classes.total}>Total device</p>
          <p className={classes.amount}>200</p>
        </div>
      </div>
    </>
  );
};
export default Featured;
