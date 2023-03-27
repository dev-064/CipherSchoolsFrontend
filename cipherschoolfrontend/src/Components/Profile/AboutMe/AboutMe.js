import React from "react";
import { useState } from "react";
import axios from "axios";
import { showToastMessage } from "../../Toast/Toast";
import "./AboutMe.css";
const AboutMe = () => {
  const [Desc, setDesc] = useState(
    JSON.parse(localStorage.getItem("user")).Description !== undefined
      ? JSON.parse(localStorage.getItem("user")).Description
      : "Add Something About You!"
  );
  const [EditState, setEditState] = useState(false);
  const [buttonState, setbuttonState] = useState("Edit");
  const handleDescriptionChange = () => {
    axios
      .put(
        `${process.env.REACT_APP_UserINFO_API}/AboutMe`,
        {
          email: localStorage.getItem("email"),
          Description: Desc,
        },
        {
          headers: {
            "auth-token": localStorage.getItem("token"),
          },
        }
      )
      .then(function (response) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        showToastMessage("Description is Successfully Saved", "positive");
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
    <div id="About">
      <div className="header">
        <h2>About Me</h2>
        <button
          onClick={() => {
            if (buttonState === "Edit") {
              setbuttonState("Save");
              setEditState(true);
            } else {
              handleDescriptionChange();
              setEditState(false);
              setbuttonState("Edit");
            }
          }}
        >
          {buttonState}
        </button>
      </div>
      <div className="AboutContainer">
        <input
          type="text"
          name="description"
          disabled={!EditState}
          value={Desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default AboutMe;
