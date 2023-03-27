import React from "react";
import "./PersonalInformation.css";
const PersonalInformation = (props) => {
  return (
    <div id="PersonalInformation">
      <div className="Information">
        <p>Hello,</p>
        <h2>{JSON.parse(localStorage.getItem("user")).name}</h2>
        <p>
          {JSON.parse(localStorage.getItem("user")).email}
          <span>
            <i
              className="bx bxs-edit-alt bx-sm"
              onClick={() => {
                props.showModal();
              }}
              style={{
                cursor: "pointer",
              }}
            ></i>
          </span>
        </p>
      </div>
      <div className="followers">0 followers</div>
    </div>
  );
};

export default PersonalInformation;
