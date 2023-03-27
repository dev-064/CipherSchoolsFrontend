import React from "react";
import AboutMe from "./AboutMe/AboutMe";
import Education from "./Education/Education";
import Interests from "./Interests/Interests";
import Links from "./Links/Links";
import PasswordUpdate from "./PasswordUpdate/PasswordUpdate";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logout from "../Logout/Logout";
import PersonalInformation from "./PersonalInformation/PersonalInformation";
const Profile = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("logstat") !== "true") {
      navigate("/");
    }
  }, []);

  return (
    <>
      <Logout />
      <div>
        <PersonalInformation showModal={props.PersonalInformationModalTrigger}/>
      </div>
      <div>
        <AboutMe />
        <Links />
        <Education />
        <PasswordUpdate showModal={props.passwordModalTrigger} />
        <Interests showModal={props.interestModalTrigger} />
      </div>
    </>
  );
};

export default Profile;
