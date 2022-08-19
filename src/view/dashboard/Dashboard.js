import React from "react";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import TypeDevice from "../type_device/TypeDevice";
import classes from "./Dashboard.module.css";
const Dashboard = () => {
  return (
    <>
      <div className={classes.types}>
        <TypeDevice type="china" />
        <TypeDevice type="germany" />
        <TypeDevice type="japan" />
        <TypeDevice type="vietNam" />
      </div>
      <div className={classes.charts}>
        <Featured />
        <Chart />
      </div>
    </>
  );
};
export default Dashboard;
