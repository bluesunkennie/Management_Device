import React from "react";
import classes from "./Device_detail.module.css";
import FolderIcon from "@mui/icons-material/Folder";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { DataGrid } from "@mui/x-data-grid";
import ImageIcon from "@mui/icons-material/Image";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import AudioFileIcon from "@mui/icons-material/AudioFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
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
} from "@mui/material";
import { deviceSoft } from "../../datatablesource";

const DeviceDetail = () => {
 
  return (
    <>
      <div>
        <Typography
          style={{ fontSize: "25px", fontWeight: "bold", padding: "10px" }}
        >
          Storage
        </Typography>
      </div>
      <div className={classes.detailHeader}>
        <div className={classes.widget}>
          <div className={classes.left}>
            <div className={classes.iconFolder}>
              <FolderIcon style={{ fontSize: "40px" }} />
            </div>
            <span className={classes.title}>Strategy</span>
            <span className={classes.countfile}>20 files</span>
          </div>
          <div className={classes.right}>
            <div className={classes.speed}>654.8 mb</div>
          </div>
        </div>
        <div className={classes.widget}>
          <div className={classes.left}>
            <div className={classes.iconFolder}>
              <FolderIcon style={{ fontSize: "40px" }} />
            </div>
            <span className={classes.title}>Transactions</span>
            <span className={classes.countfile}>37 files</span>
          </div>
          <div className={classes.right}>
            <div className={classes.speed}>2.78 gb</div>
          </div>
        </div>
        <div className={classes.widget}>
          <div className={classes.left}>
            <div className={classes.iconFolder}>
              <FolderIcon style={{ fontSize: "40px" }} />
            </div>
            <span className={classes.title}>Design</span>
            <span className={classes.countfile}>56 files</span>
          </div>
          <div className={classes.right}>
            <div className={classes.speed}>8.92 gb</div>
          </div>
        </div>
        <div className={classes.widget}>
          <div className={classes.left}>
            <div className={classes.iconFolder}>
              <FolderIcon style={{ fontSize: "40px" }} />
            </div>
            <span className={classes.title}>Sprints</span>
            <span className={classes.countfile}>91 files</span>
          </div>
          <div className={classes.right}>
            <div className={classes.speed}>704.7 mb</div>
          </div>
        </div>
      </div>
      <hr />
      <div className={classes.allFiles}>
        <div className={classes.leftTable}>
          <div className={classes.headTable}>
            <div className={classes.allFileText}> All Files</div>
            <div className={classes.calender}>
              <div className={classes.calenderText}>1-28 February</div>
              <CalendarMonthIcon style={{ fontSize: "20px" }} />
            </div>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "5px",
              }}
            >
              {" "}
              <div
                style={{
                  border: "none",
                  margin: "3px",
                  borderRadius: "5px",
                  display: "flex",
                  alignItems: "center",
                  background: "rgb(242, 242, 247)",
                  color: "gray",
                  fontWeight: "bold",
                }}
              >
                <Checkbox />
              </div>
              <div
                style={{
                  border: "none",
                  width: "40%",
                  margin: "3px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderRadius: "5px",
                  padding: "10px",
                  background: "rgb(242, 242, 247)",
                  color: "gray",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                name
                <UnfoldMoreIcon style={{ width: "20px" }} />
              </div>
              <div
                style={{
                  border: "none",
                  width: "25%",
                  margin: "3px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px",
                  borderRadius: "5px",
                  background: "rgb(242, 242, 247)",
                  color: "gray",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                tag
                <UnfoldMoreIcon style={{ width: "20px" }} />
              </div>
              <div
                style={{
                  border: "none",
                  width: "25%",
                  margin: "3px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderRadius: "5px",
                  padding: "10px",
                  background: "rgb(242, 242, 247)",
                  color: "gray",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                size
                <UnfoldMoreIcon style={{ width: "20px" }} />
              </div>
              <div
                style={{
                  border: "none",
                  width: "30%",
                  margin: "3px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderRadius: "5px",
                  padding: "10px",
                  background: "rgb(242, 242, 247)",
                  color: "gray",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                last modified
                <UnfoldMoreIcon style={{ width: "20px" }} />
              </div>
            </div>
            {deviceSoft.map((device) => (
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: "5px",
                  }}
                >
                  <div
                    style={{
                      border: "none",
                      margin: "3px",
                      borderRadius: "5px",
                      display: "flex",
                      alignItems: "center",
                      color: "gray",
                    }}
                  >
                    <Checkbox />
                  </div>
                  <div
                    style={{
                      border: "none",
                      width: "40%",
                      margin: "3px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderRadius: "8px",
                      padding: "10px",
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "12px",
                    }}
                  >
                    {device.name}
                  </div>
                  <div
                    style={{
                      border: "none",
                      width: "25%",
                      margin: "3px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderRadius: "8px",
                      padding: "10px",
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "12px",
                    }}
                  >
                    <div
                      style={{
                        border: "1px solid gray",
                        padding: "5px",
                        borderRadius: "8px",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          border: "1px solid black",
                          borderRadius: "15px",
                          background:
                            (device.tag === "no tag" && "red") ||
                            (device.tag === "UI Kits" && "purple") ||
                            (device.tag === "Design Guides" && "green") ||
                            (device.tag === "University" && "pink"),
                          width: "8px",
                          height: "8px",
                          marginRight: "5px",
                        }}
                      ></div>
                      {device.tag}
                    </div>
                  </div>
                  <div
                    style={{
                      border: "none",
                      width: "25%",
                      margin: "3px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderRadius: "8px",
                      padding: "10px",
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "12px",
                    }}
                  >
                    {device.size}
                  </div>
                  <div
                    style={{
                      border: "none",
                      width: "30%",
                      margin: "3px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderRadius: "8px",
                      padding: "10px",
                      color: "black",
                      fontWeight: "bold",
                      fontSize: "12px",
                    }}
                  >
                    {device.last_modified}
                    <MoreVertIcon style={{ width: "20px" }} />
                  </div>
                </div>
                <hr />
              </div>
            ))}
          </div>
        </div>

        <hr />
        <div className={classes.rightTable}>
          <div className={classes.moreInfor}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignContent: "center",
              }}
            >
              <h3 style={{ paddingBottom: "10px" }}>Space</h3>
              <MoreHorizIcon />
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <div className={classes.circule}>
                {" "}
                <div className={classes.line}>
                  <Typography style={{ fontSize: "20px", fontWeight: "bold" }}>
                    74.7 gb
                  </Typography>
                </div>
                <div className={classes.of}>of 120 gb</div>
              </div>
            </div>
            <div className={classes.inforMore}>
              <div className={classes.imageMore}>
                <ImageIcon
                  style={{
                    background: "rgb(223, 220, 220)",
                    borderRadius: "5px",
                    fontSize: "30px",
                    height: "40px",
                    width: "50px",
                    padding: "5px",
                  }}
                />{" "}
                <div style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Images
                </div>{" "}
                <div style={{ fontSize: "15px", color: "grey" }}>1.04 mb</div>
              </div>
              <div className={classes.imageMore}>
                <VideoCallIcon
                  style={{
                    background: "rgb(223, 220, 220)",
                    borderRadius: "5px",
                    fontSize: "30px",
                    height: "40px",
                    width: "50px",
                    padding: "5px",
                  }}
                />{" "}
                <div style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Videos
                </div>{" "}
                <div style={{ fontSize: "15px", color: "grey" }}>71.5 gb</div>
              </div>
              <div className={classes.imageMore}>
                <AudioFileIcon
                  style={{
                    background: "rgb(223, 220, 220)",
                    borderRadius: "5px",
                    fontSize: "30px",
                    height: "40px",
                    width: "50px",
                    padding: "5px",
                  }}
                />{" "}
                <div style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Audio
                </div>{" "}
                <div style={{ fontSize: "15px", color: "grey" }}>455.8 mb</div>
              </div>
              <div className={classes.imageMore}>
                <DocumentScannerIcon
                  style={{
                    background: "rgb(223, 220, 220)",
                    borderRadius: "5px",
                    fontSize: "30px",
                    height: "40px",
                    width: "50px",
                    padding: "5px",
                  }}
                />{" "}
                <div style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Documents
                </div>{" "}
                <div style={{ fontSize: "15px", color: "grey" }}>357.2 mb</div>
              </div>
              <div className={classes.imageMore}>
                <DevicesOtherIcon
                  style={{
                    background: "rgb(223, 220, 220)",
                    borderRadius: "5px",
                    fontSize: "30px",
                    height: "40px",
                    width: "50px",
                    padding: "5px",
                  }}
                />{" "}
                <div style={{ fontSize: "15px", fontWeight: "bold" }}>
                  Other
                </div>{" "}
                <div style={{ fontSize: "15px", color: "grey" }}>1.27 gb</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DeviceDetail;
