import React, { useState } from "react";
import "./Interests.css";
const Interests = (props) => {
  const [InterestArray, setInterestArray] = useState(
    JSON.parse(localStorage.getItem("user")).interests
  );
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
      <div className="InterestsContainer">
        {InterestArray.map((element) => {
          return <div className="Interststags">{element}</div>;
        })}
      </div>
    </div>
  );
};

export default Interests;
