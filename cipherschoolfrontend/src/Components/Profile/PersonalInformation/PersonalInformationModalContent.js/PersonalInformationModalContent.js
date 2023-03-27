import React from "react";
import "./PersonalInformationModalContent.css";
import { useState } from "react";
import axios from "axios";
import { showToastMessage } from "../../../Toast/Toast";
const PersonalInformationModalContent = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState(
    JSON.parse(localStorage.getItem("user")).email
  );
  const [Phone, setPhone] = useState("");
  const handlePersonalInfoUpdate = (props) => {
    axios
      .put(
        `${process.env.REACT_APP_AUTH_API}/UpdatePassword`,
        {},
        {
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        }
      )
      .then(function (response) {})
      .catch(function (error) {
        if (error.response.status === 400) {
          showToastMessage(error.response.data.error, "negative");
        } else {
          showToastMessage("Internal Server Error", "negative");
        }
      });
  };
  return (
    <div id="passwordModal">
      <div className="PasswordFields">
        <label for="Name">Name</label>
        <input
          type="text"
          name="name"
          value={Name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="PasswordFields">
        <label for="Email">Email</label>
        <input type="email" name="Email" value={Email} />
      </div>
      <div className="PasswordFields">
        <label for="Phone">Phone</label>
        <input
          type="phone"
          name="Phone"
          value={Phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
      </div>
      <div className="InterstsModalButton">
        <button
          onClick={() => {
            handlePersonalInfoUpdate();
          }}
        >
          SAVE
        </button>
      </div>
    </div>
  );
};

export default PersonalInformationModalContent;
