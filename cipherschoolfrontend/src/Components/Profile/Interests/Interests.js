import React from "react";
import "./Interests.css";
const Interests = (props) => {
  return (
    <div id="Interests">
      <div className="header">
        <h2>Interests</h2>
        <button
          onClick={() => {
            props.showModal();
          }}
        >
          Edit
        </button>
      </div>
      {/* <div className="InterestsContainer">

      </div> */}
    </div>
  );
};

export default Interests;
