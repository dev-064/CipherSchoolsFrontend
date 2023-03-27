import React from "react";
import "./Logout.css";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div id="logout">
      <i
        class="bx bx-log-out-circle bx-md"
        onClick={() => {
          handleLogout();
        }}
      ></i>
    </div>
  );
};

export default Logout;
