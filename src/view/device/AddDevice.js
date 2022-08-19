import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { db } from "../../firebase";
const AddDevice = () => {
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
  const addDevice = async () => {
    // uploadSoundUsVocabulary();
    // await uploadSoundUkVocabulary();
    axios
      .post(`http://192.168.1.7:8080/device`, { ...deviceAdd })
      .then((res) => {
        window.location.reload();
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
                ></input>
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
      </div>
    </>
  );
};
export default AddDevice;
