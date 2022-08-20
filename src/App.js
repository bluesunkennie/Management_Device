import "./App.css";
import { Routes, Switch, Route, BrowserRouter } from "react-router-dom";
import Device from "./view/device/Device";
import DeviceDetail from "./view/device/Device_detail";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import React from "react";
import AddDevice from "./view/device/AddDevice";
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
              <Route path="/">
                <Route index element={<Device />} />
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
