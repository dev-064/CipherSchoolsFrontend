import React from "react";
import "./PasswordUpdateModal.css";
import { useState } from "react";
import axios from "axios";
import { showToastMessage } from "../../../Toast/Toast";
const PasswordUpdateModalContent = () => {
  const [Current, setCurrent] = useState("");
  const [New, setNew] = useState("");
  const [Confirm, setConfirm] = useState("");
  const handlePasswordUpdate = (props) => {
    if (New === Confirm) {
      axios
        .put(
          `${process.env.REACT_APP_AUTH_API}/UpdatePassword`,
          {
            email: localStorage.getItem("email"),
            OldPassword: Current,
            NewPassword: New,
          },
          {
            headers: {
              "auth-token": localStorage.getItem("token"),
            },
          }
        )
        .then(function (response) {
          console.log("response", response);
          props.close_modal();
        })
        .catch(function (error) {
          if (error.response.status === 400) {
            showToastMessage(error.response.data.error, "negative");
          } else {
            showToastMessage("Internal Server Error", "negative");
          }
        });
    } else {
      showToastMessage("Confirm Password is not equal to New Password");
    }
  };
  return (
    <div id="passwordModal">
      <div className="PasswordFields">
        <label for="Password">Current Password</label>
        <input
          type="password"
          name="Password"
          value={Current}
          onChange={(e) => {
            setCurrent(e.target.value);
          }}
        />
      </div>{" "}
      <div className="PasswordFields">
        <label for="Password">New Password</label>
        <input
          type="password"
          name="Password"
          value={New}
          onChange={(e) => {
            setNew(e.target.value);
          }}
        />
      </div>{" "}
      <div className="PasswordFields">
        <label for="Password">Confirm Password</label>
        <input
          type="password"
          name="Password"
          value={Confirm}
          onChange={(e) => {
            setConfirm(e.target.value);
          }}
        />
      </div>
      <div className="InterstsModalButton">
        <button
          onClick={() => {
            handlePasswordUpdate();
          }}
        >
          SAVE
        </button>
      </div>
    </div>
  );
};

export default PasswordUpdateModalContent;
