import React from "react";
import "./PersonalInformationModalContent.css";
import { useState } from "react";
import axios from "axios";
import { showToastMessage } from "../../../Toast/Toast";
import { useLocation } from "react-router-dom";
const PersonalInformationModalContent = () => {
  const location=useLocation();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState(
    JSON.parse(localStorage.getItem("user")).email
  );
  const [Phone, setPhone] = useState("");
  const handlePersonalInfoUpdate = (props) => {
    axios
      .put(
        `${process.env.REACT_APP_UserINFO_API}/Information`,
        {
          email:Email,
          name:Name,
          Phone:Phone
        },
        {
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        }
      )
      .then(function (response) {
        props.close_modal();
        showToastMessage("Information is Successfully Updated","positive");
        localStorage.setItem("user",response.data.user);
        location.reload()
      })
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
