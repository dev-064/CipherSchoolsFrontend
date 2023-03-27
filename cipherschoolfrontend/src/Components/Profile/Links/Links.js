import React from "react";
import "./Links.css";
const Links = () => {
  return (
    <div>
      <div id="Links">
        <div className="header">
          <h2>Personal Information</h2>
          <button>Edit</button>
        </div>
        <div className="LinksContainer">
          <div className="LinksContainerCol1">
            <div className="LinksInputFields">
              <label for="Facebook">Facebook</label>
              <input name="Facebook" value={`facebook`}/>
            </div>
            <div className="LinksInputFields">
              <label for="Instagram">Instagram</label>
              <input name="Instagram" value={`Instagram`}/>
            </div>
            <div className="LinksInputFields">
              <label for="Linkedin">Linkedin</label>
              <input name="Linkedin" value={`Linkedin`}/>
            </div>
          </div>
          <div className="LinksContainerCol2">
            <div className="LinksInputFields">
              <label for="Github">Github</label>
              <input name="Github" value={`Github`}/>
            </div>
            <div className="LinksInputFields">
              <label for="Website">Website</label>
              <input name="Website" value={`Website`}/>
            </div>
            <div className="LinksInputFields">
              <label for="Twittter">Twittter</label>
              <input name="Twittter" value={`Twitter`}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
