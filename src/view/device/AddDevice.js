import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { db } from "../../firebase";
import Alert from "@mui/material/Alert";
import isEmpty from "validator/lib/isEmpty";
import { useNavigate } from "react-router-dom";
const AddDevice = () => {
  const device = useNavigate();
  const [inputName, setInputName] = useState("");
  const [inputComment, setInputComment] = useState("");
  const [inputCpu, setInputCpu] = useState("");
  const [inputConnection, setInputConnection] = useState("");
  const [inputIpAddress, setInputIpAddress] = useState("");
  const [inputLastBackup, setInputLastBackup] = useState("");
  const [inputRam, setInputRam] = useState("");
  const [inputService, setInputService] = useState("");
  const [inputSize, setInputSize] = useState("");
  const [inputVersion, setInputVersion] = useState("");
  const [inputProtection, setInputProtection] = useState("");
  const [myAlert, setMyAlert] = useState(false);
  const [myError, setMyError] = useState(false);
  const [valid, setValid] = useState({});

  const handelValueName = (event) => {
    setInputName(event.target.value);
  };
  const handelValueComment = (event) => {
    setInputComment(event.target.value);
  };
  const handelValueCpu = (event) => {
    setInputCpu(event.target.value);
  };
  const handelValueConnection = (event) => {
    setInputConnection(event.target.value);
  };
  const handelValueIpAddress = (event) => {
    setInputIpAddress(event.target.value);
  };
  const handelValueLastBackup = (event) => {
    setInputLastBackup(event.target.value);
  };
  const handelValueRam = (event) => {
    setInputRam(event.target.value);
  };
  const handelValueService = (event) => {
    setInputService(event.target.value);
  };
  const handelValueSize = (event) => {
    setInputSize(event.target.value);
  };
  const handelValueVersion = (event) => {
    setInputVersion(event.target.value);
  };
  const handelValueProtection = (event) => {
    setInputProtection(event.target.value);
  };

  const validateAll = () => {
    const msg = {};
    if (isEmpty(inputName)) {
      msg.name = "Please input  name device";
    }
    if (isEmpty(inputCpu)) {
      msg.cpu = "Please input  cpu device";
    }
    if (isEmpty(inputIpAddress)) {
      msg.ipAddress = "Please input ip address device";
    }
    if (isEmpty(inputVersion)) {
      msg.version = "Please input version device";
    }
    if (isEmpty(inputSize)) {
      msg.size = "Please input size device";
    }
    if (isEmpty(inputRam)) {
      msg.ram = "Please input ram device";
    }
    if (isEmpty(inputService)) {
      msg.service = "Please input service device";
    }
    if (isEmpty(inputLastBackup)) {
      msg.lastBackup = "Please input last backup device";
    }
    if (isEmpty(inputComment)) {
      msg.comment = "Please input comment device";
    }
    if (isEmpty(inputProtection)) {
      msg.protection = "Please input protection device";
    }
    setValid(msg);
    if (Object.keys(msg).length > 0) return false;
    return true;
  };

  const addDevice = async () => {
    // uploadSoundUsVocabulary();
    // await uploadSoundUkVocabulary();
    const isValidation = validateAll();
    if (!isValidation) return;
    axios
      .post(`http://192.168.1.7:8080/device`, { ...deviceAdd })
      .then((res) => {
        setMyAlert(true);
        // window.location.reload();
        device("/");
      });
  };
  const deviceAdd = {
    name: inputName,
    comments: inputComment,
    cpu: inputCpu,
    ip_address: inputIpAddress,
    last_backup: inputLastBackup,
    protection: inputProtection,
    ram: inputRam,
    service: inputService,
    size: inputSize,
    version: inputVersion,
    connection: true,
    id_device: uuidv4(),
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "20px",
          fontSize: "30px",
          fontWeight: "bold",
        }}
      >
        {" "}
        Add device
      </div>{" "}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            flex: "5",
            padding: "5px",
          }}
        >
          <form>
            <div>
              {" "}
              <div
                style={{
                  padding: "10px",
                }}
              >
                <Typography style={{ color: "black", padding: "10px" }}>
                  Name device:
                </Typography>
                <input
                  onChange={handelValueName}
                  type="text"
                  placeholder="Input name device..."
                  required
                  style={{
                    border: "1px solid black",
                    width: "90%",
                    height: "40px",
                  }}
                ></input>
                <Typography
                  style={{
                    color: "red",
                    fontSize: "15px",
                    paddingTop: "5px",
                    marginLeft: "15px",
                  }}
                >
                  {valid.name}
                </Typography>
              </div>
              <div
                style={{
                  padding: "10px",
                }}
              >
                <Typography style={{ color: "black", padding: "10px" }}>
                  CPU:
                </Typography>
                <input
                  onChange={handelValueCpu}
                  type="text"
                  placeholder="Input cpu device..."
                  required
                  style={{
                    border: "1px solid black",
                    width: "90%",
                    height: "40px",
                  }}
                ></input>
                <Typography
                  style={{
                    color: "red",
                    fontSize: "15px",
                    paddingTop: "5px",
                    marginLeft: "15px",
                  }}
                >
                  {valid.cpu}
                </Typography>
              </div>
              <div
                style={{
                  padding: "10px",
                }}
              >
                <Typography style={{ color: "black", padding: "10px" }}>
                  Ip address:
                </Typography>
                <input
                  onChange={handelValueIpAddress}
                  type="text"
                  placeholder="Input ip address device..."
                  required
                  style={{
                    border: "1px solid black",
                    width: "90%",
                    height: "40px",
                  }}
                ></input>
                <Typography
                  style={{
                    color: "red",
                    fontSize: "15px",
                    paddingTop: "5px",
                    marginLeft: "15px",
                  }}
                >
                  {valid.ipAddress}
                </Typography>
              </div>
              <div
                style={{
                  padding: "10px",
                }}
              >
                <Typography style={{ color: "black", padding: "10px" }}>
                  Version:
                </Typography>
                <input
                  onChange={handelValueVersion}
                  type="text"
                  placeholder="Input version device..."
                  required
                  style={{
                    border: "1px solid black",
                    width: "90%",
                    height: "40px",
                  }}
                ></input>
                <Typography
                  style={{
                    color: "red",
                    fontSize: "15px",
                    paddingTop: "5px",
                    marginLeft: "15px",
                  }}
                >
                  {valid.version}
                </Typography>
              </div>
              <div
                style={{
                  padding: "10px",
                }}
              >
                <Typography style={{ color: "black", padding: "10px" }}>
                  Size:
                </Typography>
                <input
                  onChange={handelValueSize}
                  type="text"
                  placeholder="Input size device..."
                  required
                  style={{
                    border: "1px solid black",
                    width: "90%",
                    height: "40px",
                  }}
                ></input>
                <Typography
                  style={{
                    color: "red",
                    fontSize: "15px",
                    paddingTop: "5px",
                    marginLeft: "15px",
                  }}
                >
                  {valid.size}
                </Typography>
              </div>
            </div>
          </form>{" "}
        </div>

        <div
          style={{
            flex: "5",
            padding: "5px",
          }}
        >
          <form>
            <div>
              {" "}
              <div
                style={{
                  padding: "10px",
                }}
              >
                <Typography style={{ color: "black", padding: "10px" }}>
                  Ram:
                </Typography>
                <input
                  onChange={handelValueRam}
                  type="text"
                  placeholder="Input ram device..."
                  required
                  style={{
                    border: "1px solid black",
                    width: "90%",
                    height: "40px",
                  }}
                ></input>{" "}
                <Typography
                  style={{
                    color: "red",
                    fontSize: "15px",
                    paddingTop: "5px",
                    marginLeft: "15px",
                  }}
                >
                  {valid.ram}
                </Typography>
              </div>
              <div
                style={{
                  padding: "10px",
                }}
              >
                <Typography style={{ color: "black", padding: "10px" }}>
                  Service:
                </Typography>
                <input
                  onChange={handelValueService}
                  type="text"
                  placeholder="Input service device..."
                  required
                  style={{
                    border: "1px solid black",
                    width: "90%",
                    height: "40px",
                  }}
                ></input>
                <Typography
                  style={{
                    color: "red",
                    fontSize: "15px",
                    paddingTop: "5px",
                    marginLeft: "15px",
                  }}
                >
                  {valid.service}
                </Typography>
              </div>
              <div
                style={{
                  padding: "10px",
                }}
              >
                <Typography style={{ color: "black", padding: "10px" }}>
                  Last backup:
                </Typography>
                <input
                  onChange={handelValueLastBackup}
                  type="text"
                  placeholder="Input last backup device..."
                  required
                  style={{
                    border: "1px solid black",
                    width: "90%",
                    height: "40px",
                  }}
                ></input>
                <Typography
                  style={{
                    color: "red",
                    fontSize: "15px",
                    paddingTop: "5px",
                    marginLeft: "15px",
                  }}
                >
                  {valid.lastBackup}
                </Typography>
              </div>
              <div
                style={{
                  padding: "10px",
                }}
              >
                <Typography style={{ color: "black", padding: "10px" }}>
                  Comment:
                </Typography>
                <input
                  onChange={handelValueComment}
                  type="text"
                  placeholder="Input comment device..."
                  required
                  style={{
                    border: "1px solid black",
                    width: "90%",
                    height: "40px",
                  }}
                ></input>
                <Typography
                  style={{
                    color: "red",
                    fontSize: "15px",
                    paddingTop: "5px",
                    marginLeft: "15px",
                  }}
                >
                  {valid.comment}
                </Typography>
              </div>
              <div
                style={{
                  padding: "10px",
                }}
              >
                <Typography style={{ color: "black", padding: "10px" }}>
                  Protection:
                </Typography>
                <input
                  onChange={handelValueProtection}
                  type="text"
                  placeholder="Input protection device..."
                  required
                  style={{
                    border: "1px solid black",
                    width: "90%",
                    height: "40px",
                  }}
                ></input>
                <Typography
                  style={{
                    color: "red",
                    fontSize: "15px",
                    paddingTop: "5px",
                    marginLeft: "15px",
                  }}
                >
                  {valid.protection}
                </Typography>
              </div>
            </div>
          </form>{" "}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <button
          onClick={addDevice}
          style={{
            width: "350px",
            height: "50px",
            fontSize: "20px",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "blue",
            color: "white",
          }}
        >
          Add device
        </button>
        {myAlert && <Alert severity="success">Add device successfully</Alert>}
        {myError && <Alert severity="error">Can't add device!</Alert>}
      </div>
    </>
  );
};
export default AddDevice;
