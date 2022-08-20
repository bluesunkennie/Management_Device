import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import GridViewIcon from "@mui/icons-material/GridView";
import InfoIcon from "@mui/icons-material/Info";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import RestoreIcon from "@mui/icons-material/Restore";
import PublicIcon from "@mui/icons-material/Public";
import SettingsIcon from "@mui/icons-material/Settings";
import AndroidIcon from "@mui/icons-material/Android";
import StorageIcon from "@mui/icons-material/Storage";
import ForumIcon from "@mui/icons-material/Forum";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import LaptopWindowsIcon from "@mui/icons-material/LaptopWindows";
import { Typography } from "@mui/material";
import { Link, NavLink, useParams } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import classes from "./Device_infor.module.css";
import { SERVER } from "../../constants/constants";
const DeviceInfor = () => {
  const [loading, setLoading] = useState(false);
  const [devices, setDevices] = useState([]);
  const { id } = useParams();
  const getDevice = async () => {
    setLoading(true);
    axios.get(`${SERVER}/device?id=${id}`).then((res) => {
      let devices;
      devices = {
        comments: res.data.comments,
        connection: res.data.connection,
        cpu: res.data.cpu,
        id_device: res.data.id_device,
        ip_address: res.data.ip_address,
        last_backup: res.data.last_backup,
        name: res.data.name,
        ram: res.data.ram,
        service: res.data.service,
        size: res.data.size,
        version: res.data.version,
        protection: res.data.protection,
      };
      setDevices(devices);
      console.log(res.data.comments);
    });
    setLoading(false);
  };

  useEffect(() => {
    getDevice();
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {" "}
        <div style={{ width: "50vw", padding: "20px" }}>
          {" "}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingBottom: "15px",
              paddingTop: "20px",
            }}
          >
            <AccessTimeIcon />
            <ErrorOutlineIcon />
            <SyncAltIcon />
            <MoreVertIcon />
            <GridViewIcon />
            <InfoIcon />
          </div>
          <hr />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingTop: "20px",
              paddingBottom: "15px",
            }}
          >
            <LaptopWindowsIcon style={{ margin: "10px" }} />
            <Typography style={{ fontWeight: "bold", fontSize: "20px" }}>
              {devices.name}
            </Typography>
          </div>
          <hr />
          <div
            style={{
              paddingTop: "20px",
              paddingBottom: "15px",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <button
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "120px",
                height: "50px",
                borderRadius: "10px",
                backgroundColor: "rgb(119, 127, 235)",
                border: "none",
              }}
            >
              <CloudDownloadIcon
                style={{ marginRight: "10px", color: "white" }}
              />{" "}
              <Typography style={{ color: "white" }}>Backup</Typography>
            </button>
            <button
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "120px",
                height: "50px",
                borderRadius: "10px",
                backgroundColor: "rgb(119, 127, 235)",
                border: "none",
              }}
            >
              <RestoreIcon style={{ marginRight: "10px", color: "white" }} />{" "}
              <Typography style={{ color: "white" }}>Restore</Typography>
            </button>
          </div>
          <hr />
          <div
            style={{
              paddingTop: "20px",
              paddingBottom: "15px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              {" "}
              <PublicIcon style={{ marginRight: "20px" }} />
              <div>
                <Typography style={{ fontSize: "15px", color: "gray" }}>
                  IP address:{" "}
                </Typography>
              </div>
              <div>
                <Typography style={{ fontWeight: "bold", fontSize: "15px" }}>
                  {devices.ip_address}
                </Typography>
              </div>
            </div>
          </div>
          <hr />
          <div
            style={{
              paddingTop: "20px",
              paddingBottom: "15px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              {" "}
              <div>
                <Typography
                  style={{
                    marginLeft: "40px",
                    fontSize: "15px",
                    color: "gray",
                  }}
                >
                  Total size of backups in cloud storage:{" "}
                </Typography>
              </div>
              <div>
                {" "}
                <Typography
                  style={{
                    fontWeight: "bold",
                    marginLeft: "40px",
                    fontSize: "15px",
                  }}
                >
                  {devices.size}
                </Typography>
              </div>
            </div>
          </div>
          <hr />
          <div
            style={{
              paddingTop: "20px",
              paddingBottom: "15px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              {" "}
              <div>
                <Typography
                  style={{
                    marginLeft: "40px",
                    fontSize: "15px",
                    color: "gray",
                  }}
                >
                  Machine token:{" "}
                  <a
                    style={{
                      color: "blue",
                      fontSize: "15px",
                      marginLeft: "40px",
                    }}
                  >
                    Show
                  </a>
                </Typography>
              </div>
            </div>
          </div>
          <hr />
          <div
            style={{
              paddingTop: "20px",
              paddingBottom: "15px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              {" "}
              <SettingsIcon style={{ marginRight: "20px" }} />
              <div>
                <Typography style={{ fontSize: "15px", color: "gray" }}>
                  Agent version:{" "}
                </Typography>
              </div>
              <div>
                {" "}
                <Typography style={{ fontWeight: "bold", fontSize: "15px" }}>
                  12.6.12081 / {devices.version} (64-bit)
                </Typography>
              </div>
            </div>
          </div>
          <hr />
          <div
            style={{
              paddingTop: "20px",
              paddingBottom: "15px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              {" "}
              <AndroidIcon style={{ marginRight: "20px" }} />
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography style={{ fontSize: "15px", color: "gray" }}>
                    Agent version:{" "}
                  </Typography>
                  <Typography style={{ fontWeight: "bold", fontSize: "15px" }}>
                    {devices.version}
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography style={{ fontSize: "15px", color: "gray" }}>
                    CPU:{" "}
                  </Typography>
                  <Typography style={{ fontWeight: "bold", fontSize: "15px" }}>
                    {devices.cpu}
                  </Typography>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography style={{ fontSize: "15px", color: "gray" }}>
                    RAM:{" "}
                  </Typography>
                  <Typography style={{ fontWeight: "bold", fontSize: "15px" }}>
                    {devices.ram}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div
            style={{
              paddingTop: "20px",
              paddingBottom: "15px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              {" "}
              <StorageIcon style={{ marginRight: "20px" }} />
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography style={{ fontSize: "15px", color: "gray" }}>
                    Service quota:{" "}
                  </Typography>
                  {/* <Typography style={{ color: "blue", fontSize: "15px" }}>
                    Change
                  </Typography> */}
                </div>
              </div>
              <div>
                <Typography style={{ fontWeight: "bold", fontSize: "15px" }}>
                  {devices.service}
                </Typography>
              </div>
            </div>
          </div>
          <hr />
          <div
            style={{
              paddingTop: "20px",
              paddingBottom: "15px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "row" }}>
              {" "}
              <ForumIcon style={{ marginRight: "20px" }} />
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography style={{ fontSize: "15px", color: "gray" }}>
                    Comments:{" "}
                  </Typography>
                  {/* <Typography style={{ color: "blue", fontSize: "15px" }}>
                    Add
                  </Typography> */}
                </div>
              </div>
              <div>
                {" "}
                <Typography style={{ fontWeight: "bold", fontSize: "15px" }}>
                  {devices.comments}
                </Typography>
              </div>
            </div>
          </div>
          <hr />
          <div
            style={{
              paddingTop: "20px",
              paddingBottom: "15px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <RemoveRedEyeIcon />
              <NavLink to="/test">
                {" "}
                <Typography
                  style={{
                    color: "blue",
                    fontSize: "15px",
                  }}
                >
                  See all properties
                </Typography>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DeviceInfor;
