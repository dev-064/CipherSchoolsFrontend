import React from "react";
import "./InterestsModalContent.css";
import { useState } from "react";
import axios from "axios";
import { showToastMessage } from "../../../Toast/Toast";
const InterestsModalContent = (props) => {
  const [InterestArray, setInterestArray] = useState([]);
  const handleInterstsArray = () => {
    axios
      .put(`${process.env.REACT_APP_UserINFO_API}/Interests`, {
        email: localStorage.getItem("email"),
        Interests: InterestArray,
      },
      {
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
      })
      .then(function (response) {
        console.log("response", response);
        props.close_modal();
      })
      .catch(function (error) {
        if (error.response.status === 400) {
          showToastMessage(error.response.data.error, "negative");
        } else {
          showToastMessage("Internal Server Error", "negative");
        }
      });
  };
  const addElement = (value) => {
    setInterestArray([...InterestArray, value]);
  };
  const deleteElement = (index) => {
    setInterestArray([
      ...InterestArray.slice(0, index),
      ...InterestArray.slice(index + 1),
    ]);
  };
  return (
    <>
      <div id="InterestModal">
        <div className="Interests">
          <div
            className="tags"
            onClick={() => {
              const index = InterestArray.indexOf("abc");
              if (index === -1) {
                document.getElementsByClassName(
                  "tags"
                )[0].style.backgroundColor = "orange";
                addElement("abc");
              } else {
                document.getElementsByClassName(
                  "tags"
                )[0].style.backgroundColor = "white";
                deleteElement(index);
              }
            }}
          >
            abc
          </div>
          <div
            className="tags"
            onClick={() => {
              const index = InterestArray.indexOf("bcd");
              if (index === -1) {
                document.getElementsByClassName(
                  "tags"
                )[1].style.backgroundColor = "orange";
                addElement("bcd");
              } else {
                document.getElementsByClassName(
                  "tags"
                )[1].style.backgroundColor = "white";
                deleteElement(index);
              }
            }}
          >
            abc
          </div>
          <div
            className="tags"
            onClick={() => {
              const index = InterestArray.indexOf("def");
              if (index === -1) {
                document.getElementsByClassName(
                  "tags"
                )[2].style.backgroundColor = "orange";
                addElement("def");
              } else {
                document.getElementsByClassName(
                  "tags"
                )[2].style.backgroundColor = "white";
                deleteElement(index);
              }
            }}
          >
            abc
          </div>
          <div
            className="tags"
            onClick={() => {
              const index = InterestArray.indexOf("ldjk");
              if (index === -1) {
                document.getElementsByClassName(
                  "tags"
                )[3].style.backgroundColor = "orange";
                addElement("ldjk");
              } else {
                document.getElementsByClassName(
                  "tags"
                )[3].style.backgroundColor = "white";
                deleteElement(index);
              }
            }}
          >
            abc
          </div>
        </div>
        <div className="Interests">
          <div
            className="tags"
            onClick={() => {
              const index = InterestArray.indexOf("lfjdf");
              if (index === -1) {
                document.getElementsByClassName(
                  "tags"
                )[4].style.backgroundColor = "orange";
                addElement("lfjdf");
              } else {
                document.getElementsByClassName(
                  "tags"
                )[4].style.backgroundColor = "white";
                deleteElement(index);
              }
            }}
          >
            abc
          </div>
          <div
            className="tags"
            onClick={() => {
              const index = InterestArray.indexOf("rty");
              if (index === -1) {
                document.getElementsByClassName(
                  "tags"
                )[5].style.backgroundColor = "orange";
                addElement("rty");
              } else {
                document.getElementsByClassName(
                  "tags"
                )[5].style.backgroundColor = "white";
                deleteElement(index);
              }
            }}
          >
            abc
          </div>
          <div
            className="tags"
            onClick={() => {
              const index = InterestArray.indexOf("lajfeo");
              if (index === -1) {
                document.getElementsByClassName(
                  "tags"
                )[6].style.backgroundColor = "orange";
                addElement("lajfeo");
              } else {
                document.getElementsByClassName(
                  "tags"
                )[6].style.backgroundColor = "white";
                deleteElement(index);
              }
            }}
          >
            abc
          </div>
          <div
            className="tags"
            onClick={() => {
              const index = InterestArray.indexOf("aeffe");
              if (index === -1) {
                document.getElementsByClassName(
                  "tags"
                )[7].style.backgroundColor = "orange";
                addElement("aeffe");
              } else {
                document.getElementsByClassName(
                  "tags"
                )[7].style.backgroundColor = "white";
                deleteElement(index);
              }
            }}
          >
            abc
          </div>
        </div>
      </div>
      <div className="InterstsModalButton">
        <button
          onClick={() => {
            handleInterstsArray();
          }}
        >
          SAVE
        </button>
      </div>
    </>
  );
};

export default InterestsModalContent;
