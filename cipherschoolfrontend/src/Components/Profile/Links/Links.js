import React from "react";
import { useState } from "react";
import "./Links.css";
import axios from "axios";
const Links = () => {
  const [facebook, setfacebook] = useState("facebook");
  const [Instagram, setInstagram] = useState("Instagram");
  const [Linkedin, setLinkedin] = useState("Linkedin");
  const [Twitter, setTwitter] = useState("Twitter");
  const [Github, setGithub] = useState("Github");
  const [Website, setWebsite] = useState("Website");
  const [EditState, setEditState] = useState(false);
  const [buttonState, setbuttonState] = useState("Edit");
  const handleSubmitLink = () => {
    axios
      .put(`${process.env.REACT_APP_UserINFO_API}/SocialMedialinks`, {
        email: localStorage.getItem("email"),
        facebook: facebook,
        Instagram: Instagram,
        Linkedin: Linkedin,
        Github: Github,
        Twitter: Twitter,
        Website: Website,
      })
      .then(function (response) {
        console.log("response", response);
      })
      .catch(function (error) {
        console.log("error", error);
      });
  };
  return (
    <div>
      <div id="Links">
        <div className="header">
          <h2>Media Links</h2>
          <button
            onClick={() => {
              if (buttonState === "Edit") {
                setbuttonState("Save");
                setEditState(true);
                setGithub("");
                setfacebook("");
                setInstagram("");
                setLinkedin("");
                setTwitter("");
                setWebsite("");
              } else {
                handleSubmitLink();
                setEditState(false);
                setbuttonState("Edit");
              }
            }}
          >
            {buttonState}
          </button>
        </div>
        <div className="LinksContainer">
          <div className="LinksContainerCol1">
            <div className="LinksInputFields">
              <label for="Facebook">Facebook</label>
              <input
                name="Facebook"
                disabled={!EditState}
                value={facebook}
                onChange={(e) => {
                  setfacebook(e.target.value);
                }}
              />
            </div>
            <div className="LinksInputFields">
              <label for="Instagram">Instagram</label>
              <input
                name="Instagram"
                disabled={!EditState}
                value={Instagram}
                onChange={(e) => {
                  setInstagram(e.target.value);
                }}
              />
            </div>
            <div className="LinksInputFields">
              <label for="Linkedin">Linkedin</label>
              <input
                name="Linkedin"
                disabled={!EditState}
                value={Linkedin}
                onChange={(e) => {
                  setLinkedin(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="LinksContainerCol2">
            <div className="LinksInputFields">
              <label for="Github">Github</label>
              <input
                name="Github"
                disabled={!EditState}
                value={Github}
                onChange={(e) => {
                  setGithub(e.target.value);
                }}
              />
            </div>
            <div className="LinksInputFields">
              <label for="Website">Website</label>
              <input
                name="Website"
                disabled={!EditState}
                value={Website}
                onChange={(e) => {
                  setWebsite(e.target.value);
                }}
              />
            </div>
            <div className="LinksInputFields">
              <label for="Twittter">Twittter</label>
              <input
                name="Twittter"
                disabled={!EditState}
                value={Twitter}
                onChange={(e) => {
                  setTwitter(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;
