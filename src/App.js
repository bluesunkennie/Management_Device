import "./App.css";
import { Routes, Switch, Route, BrowserRouter } from "react-router-dom";
import Device from "./view/device/Device";
import Dashboard from "./view/dashboard/Dashboard";
import DeviceDetail from "./view/device/Device_detail";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import React from "react";
import AddDevice from "./view/device/AddDevice";
import classes from "./style/themes.module.css";
import DeviceInfor from "./view/device/Device_Infor";

function App() {
  return (
    <>
      <div class="app">
        {" "}
        <div class="sidebar">
          <Sidebar />
          <div class="navbar">
            {" "}
            <Navbar />
            <Routes>
              {/* <Route path="/"> */}
              {/* <Route index element={<Dashboard />}></Route> */}
              <Route path="/">
                <Route index element={<Device />} />
                {/* <Route path=":id" element={<DeviceDetail />} /> */}
                <Route path="deviceInfor/:id" element={<DeviceInfor />}></Route>
              </Route>

              <Route path="test" element={<DeviceDetail />} />
              <Route path="add" element={<AddDevice />} />
              {/* </Route> */}
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
