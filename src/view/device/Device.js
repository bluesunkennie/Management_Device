import React, { useState, useEffect } from "react";
import classes from "./Device.module.css";
import DeviceDetail from "./Device_detail";
import { deviceRows } from "../../datatablesource";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import WarningIcon from "@mui/icons-material/Warning";
import HomeIcon from "@mui/icons-material/Home";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  TableHead,
  TablePagination,
  TableFooter,
  Checkbox,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import LaptopWindowsIcon from "@mui/icons-material/LaptopWindows";
import DeviceInfor from "./Device_Infor";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
const Device = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const devicesCollectionRef = collection(db, "device");
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [deviceDetail, setDeviceDetail] = useState(true);
  const [id, setId] = useState([]);
  const [iddetail, setIdDetail] = useState("");
  const getDevice = async () => {
    setLoading(true);
    axios.get(`http://192.168.1.7:8080/device`).then((res) => {
      let devices = [];
      res.data.forEach((device) => {
        devices.push({
          comments: device.comments,
          connection: device.connection,
          cpu: device.cpu,
          id_device: device.id_device,
          ip_address: device.ip_address,
          last_backup: device.last_backup,
          name: device.name,
          ram: device.ram,
          service: device.service,
          size: device.size,
          version: device.version,
          protection: device.protection,
        });
      });
      setDevices(devices);
    });
    setLoading(false);
  };
  useEffect(() => {
    getDevice();
  }, []);

  let navigate = useNavigate();
  function handleClickDetail(id) {
    navigate(`deviceInfor/${id}`);
    console.log(id);
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (event) => {
    setOpen(true);
    setId(event);
    console.log(event);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickDevDetail = (e) => {
    setIdDetail(e);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const deleteDevice = () => {
    handleClose();
    axios.delete(`http://192.168.1.7:8080/device?id=${id}`).then((res) => {
      window.location.reload();
      console.log(res);
      console.log(res.data);
    });
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className={classes.detailContent}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingBottom: "20px",
            }}
          >
            {" "}
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <HomeIcon style={{ marginLeft: "20px", marginRight: "10px" }} />{" "}
              <ArrowForwardIosIcon
                style={{ fontSize: "12px", color: "gray", marginRight: "10px" }}
              />
              <Typography style={{ fontSize: "15px", color: "gray" }}>
                Device
              </Typography>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingRight: "20px",
              }}
            >
              {" "}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: "20px",
                }}
              >
                <CreateNewFolderIcon style={{ marginRight: "10px" }} />
                <Typography>New folder</Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: "20px",
                }}
              >
                <DriveFileMoveIcon style={{ marginRight: "10px" }} />
                <Typography>Move to</Typography>
              </div>
            </div>
          </div>
          <TableContainer
            component={Paper}
            className={classes.tableContainer}
            style={{ width: "100%" }}
          >
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Checkbox inputProps={{ "aria-label": "controlled" }} />
                  </TableCell>
                  <TableCell className={classes.tableHeaderCell}>
                    Name
                  </TableCell>
                  <TableCell className={classes.tableHeaderCell}>
                    Protection
                  </TableCell>
                  <TableCell className={classes.tableHeaderCell}>
                    Connection
                  </TableCell>
                  <TableCell className={classes.tableHeaderCell}>
                    Last backup
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {devices
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((device) => (
                    <TableRow>
                      {" "}
                      <TableCell>
                        <Checkbox inputProps={{ "aria-label": "controlled" }} />
                      </TableCell>
                      <TableCell
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <LaptopWindowsIcon style={{ margin: "10px" }} />
                        {device.name}
                      </TableCell>
                      <TableCell>
                        <Typography
                          style={{
                            color: "black",
                            fontSize: "15px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          {" "}
                          <Typography>
                            {device.protection === "Ok" && (
                              <CheckCircleIcon
                                style={{
                                  width: "18px",
                                  marginRight: "5px",
                                  color: "green",
                                }}
                              />
                            )}{" "}
                            {device.protection === "error" && (
                              <ErrorIcon
                                style={{
                                  width: "18px",
                                  marginRight: "5px",
                                  color: "red",
                                }}
                              />
                            )}
                            {device.protection === "warning" && (
                              <WarningIcon
                                style={{
                                  width: "18px",
                                  marginRight: "5px",
                                  color: "yellow",
                                }}
                              />
                            )}
                          </Typography>
                          {device.protection}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          style={{
                            color: "black",
                            fontSize: "15px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Typography
                            style={{
                              backgroundColor:
                                (device.connection === true && "green") ||
                                (device.connection === false && "red"),
                              width: "8px",
                              height: "8px",
                              borderRadius: "40px",
                              marginRight: "5px",
                            }}
                          ></Typography>
                          {(device.connection === true && "Online") ||
                            (device.connection === false && "Offline")}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          style={{
                            fontSize: "14px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          {" "}
                          <Typography
                            style={{
                              fontWeight: "bold",
                              fontSize: "14px",
                              marginRight: "5px",
                            }}
                          >
                            {device.last_backup}
                          </Typography>{" "}
                          10:30
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-around",
                          }}
                        >
                          {" "}
                          <RemoveRedEyeIcon
                            onClick={() => handleClickDetail(device.id_device)}
                          />
                          <DeleteIcon
                            style={{ color: "red" }}
                            onClick={() => handleClickOpen(device.id_device)}
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
              <TableFooter>
                <TablePagination
                  rowsPerPageOptions={[10, 20, 25]}
                  count={deviceRows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableFooter>
            </Table>
          </TableContainer>
        </div>
        {/* <hr />
        <div className={classes.rightName}>
          {deviceDetail && <DeviceInfor />}
        </div> */}
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you want to delete?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This vocabulary will be remove from database.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} style={{ color: "blue" }}>
            No
          </Button>
          <Button onClick={deleteDevice} style={{ color: "red" }} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default Device;
