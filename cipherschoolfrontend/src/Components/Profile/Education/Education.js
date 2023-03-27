import React from "react";
import "./Education.css";
const Education = () => {
  return (
    <div>
      <div id="Education">
        <div className="header">
          <h2>Personal Information</h2>
          <button>Edit</button>
        </div>
        <div className="EducationContainer">
          <div className="EducationInputFields">
            <label for="HigestEducation">Highest education</label>
            <select name="HighestEducation">
              <option value="Primary">Primary</option>
              <option value="Secondary">Secondary</option>
              <option value="Higher Secondary">Higher Secondary</option>
              <option value="Graduation">Graduation</option>
              <option value="Post Graduation">Post Graduation</option>
            </select>
          </div>
          <div className="EducationInputFields">
            <label for="CurrentStatus">What do you do currently?</label>
            <select name="CurrentStatus">
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
