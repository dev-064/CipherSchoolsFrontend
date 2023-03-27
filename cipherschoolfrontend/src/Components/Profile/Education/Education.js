import React from "react";
import { useState } from "react";
import "./Education.css";
import axios from "axios";
const Education = () => {
  const [highestEducation, sethighestEducation] = useState("Graduation");
  const [CurrentStatus, setCurrentStatus] = useState("College Student");
  const [EditState, setEditState] = useState(false);
  const [buttonState, setbuttonState] = useState("Edit");
  const changeEducationStatus = () => {
    axios
      .put(`${process.env.REACT_APP_UserINFO_API}/PersonalInformation`, {
        email: localStorage.getItem("email"),
        HighestEducation: highestEducation,
        CurrentlyStudying: CurrentStatus,
      })
      .then(function (response) {})
      .catch(function (error) {
        console.log("error", error);
      });
  };
  return (
    <div>
      <div id="Education">
        <div className="header">
          <h2>Personal Information</h2>
          <button
            onClick={() => {
              if (buttonState === "Edit") {
                setbuttonState("Save");
                setEditState(true);
              } else {
                changeEducationStatus();
                setEditState(false);
                setbuttonState("Edit");
              }
            }}
          >
            {buttonState}
          </button>
        </div>
        <div className="EducationContainer">
          <div className="EducationInputFields">
            <label for="HigestEducation">Highest education</label>
            <select
              name="HighestEducation"
              disabled={!EditState}
              value={highestEducation}
              onChange={(e) => {
                sethighestEducation(e.target.value);
              }}
            >
              <option value="Primary">Primary</option>
              <option value="Secondary">Secondary</option>
              <option value="Higher Secondary">Higher Secondary</option>
              <option value="Graduation">Graduation</option>
              <option value="Post Graduation">Post Graduation</option>
            </select>
          </div>
          <div className="EducationInputFields">
            <label for="CurrentStatus">What do you do currently?</label>
            <select
              name="CurrentStatus"
              disabled={!EditState}
              value={CurrentStatus}
              onChange={(e) => {
                setCurrentStatus(e.target.value);
              }}
            >
              <option value="Schooling">Schooling</option>
              <option value="College Student">College Student</option>
              <option value="Teaching">Teaching</option>
              <option value="Job">Job</option>
              <option value="Freelancing">Freelancing</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
