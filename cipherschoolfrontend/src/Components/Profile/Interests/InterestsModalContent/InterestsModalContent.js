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
        localStorage.setItem("user", JSON.stringify(response.data.user));
        showToastMessage("Interests are Successfully Added", "positive");
        props.close_modal();
        location.reload()
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
              const index = InterestArray.indexOf("App Development");
              if (index === -1) {
                document.getElementsByClassName(
                  "tags"
                )[0].style.backgroundColor = "orange";
                addElement("App Development");
              } else {
                document.getElementsByClassName(
                  "tags"
                )[0].style.backgroundColor = "white";
                deleteElement(index);
              }
            }}
          >
            App Development
          </div>
          <div
            className="tags"
            onClick={() => {
              const index = InterestArray.indexOf("Web Development");
              if (index === -1) {
                document.getElementsByClassName(
                  "tags"
                )[1].style.backgroundColor = "orange";
                addElement("Web Development");
              } else {
                document.getElementsByClassName(
                  "tags"
                )[1].style.backgroundColor = "white";
                deleteElement(index);
              }
            }}
          >
            Web Development
          </div>
          <div
            className="tags"
            onClick={() => {
              const index = InterestArray.indexOf("Game Development");
              if (index === -1) {
                document.getElementsByClassName(
                  "tags"
                )[2].style.backgroundColor = "orange";
                addElement("Game Development");
              } else {
                document.getElementsByClassName(
                  "tags"
                )[2].style.backgroundColor = "white";
                deleteElement(index);
              }
            }}
          >
            Game Development
          </div>
          <div
            className="tags"
            onClick={() => {
              const index = InterestArray.indexOf("Data Structures");
              if (index === -1) {
                document.getElementsByClassName(
                  "tags"
                )[3].style.backgroundColor = "orange";
                addElement("Data Structures");
              } else {
                document.getElementsByClassName(
                  "tags"
                )[3].style.backgroundColor = "white";
                deleteElement(index);
              }
            }}
          >
            Data Structures
          </div>
        </div>
        <div className="Interests">
          <div
            className="tags"
            onClick={() => {
              const index = InterestArray.indexOf("Programming");
              if (index === -1) {
                document.getElementsByClassName(
                  "tags"
                )[4].style.backgroundColor = "orange";
                addElement("Programming");
              } else {
                document.getElementsByClassName(
                  "tags"
                )[4].style.backgroundColor = "white";
                deleteElement(index);
              }
            }}
          >
            Programming
          </div>
          <div
            className="tags"
            onClick={() => {
              const index = InterestArray.indexOf("Machine Learning");
              if (index === -1) {
                document.getElementsByClassName(
                  "tags"
                )[5].style.backgroundColor = "orange";
                addElement("Machine Learning");
              } else {
                document.getElementsByClassName(
                  "tags"
                )[5].style.backgroundColor = "white";
                deleteElement(index);
              }
            }}
          >
            Machine Learning
          </div>
          <div
            className="tags"
            onClick={() => {
              const index = InterestArray.indexOf("Data Science");
              if (index === -1) {
                document.getElementsByClassName(
                  "tags"
                )[6].style.backgroundColor = "orange";
                addElement("Data Science");
              } else {
                document.getElementsByClassName(
                  "tags"
                )[6].style.backgroundColor = "white";
                deleteElement(index);
              }
            }}
          >
            Data Science
          </div>
          <div
            className="tags"
            onClick={() => {
              const index = InterestArray.indexOf("Others");
              if (index === -1) {
                document.getElementsByClassName(
                  "tags"
                )[7].style.backgroundColor = "orange";
                addElement("Others");
              } else {
                document.getElementsByClassName(
                  "tags"
                )[7].style.backgroundColor = "white";
                deleteElement(index);
              }
            }}
          >
            Others
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
