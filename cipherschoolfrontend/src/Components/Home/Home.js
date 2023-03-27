import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Home = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("logstat") === "true") {
      navigate("/profile");
    } else {
      props.showLoginModal();
    }
  }, []);
  return <div></div>;
};

export default Home;
