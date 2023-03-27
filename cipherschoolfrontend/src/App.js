import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./Components/Login_Signup/Login";
import Signup from "./Components/Login_Signup/Signup";
import Modal from "./Components/Modal/Modal";
import Profile from "./Components/Profile/Profile";
import InterestsModalContent from "./Components/Profile/Interests/InterestsModalContent/InterestsModalContent";
import PasswordUpdateModalContent from "./Components/Profile/PasswordUpdate/PasswordUpdateModal/PasswordUpdateModal";
import Home from "./Components/Home/Home";
import PersonalInformationModalContent from "./Components/Profile/PersonalInformation/PersonalInformationModalContent.js/PersonalInformationModalContent";
function App() {
  const [LoginModal, setLoginModal] = useState(
    !(localStorage.getItem("logstat") === "true")
  );
  const showLoginModal = () => {
    setLoginModal(true);
    setInterestsModal(false);
    setSignupModal(false);
    setPasswordUpdateModal(false);
    setPersonalInformation(false);
  };
  const [SignupModal, setSignupModal] = useState(false);
  const showSignupModal = () => {
    setLoginModal(false);
    setInterestsModal(false);
    setSignupModal(true);
    setPasswordUpdateModal(false);
    setPersonalInformation(false);
  };
  const [PersonalInformation, setPersonalInformation] = useState(false);
  const showPersonalInformation = () => {
    setLoginModal(false);
    setInterestsModal(false);
    setSignupModal(false);
    setPasswordUpdateModal(false);
    setPersonalInformation(true);
  };
  const [InterestsModal, setInterestsModal] = useState(false);
  const showInterestsModal = () => {
    setLoginModal(false);
    setInterestsModal(true);
    setSignupModal(false);
    setPasswordUpdateModal(false);
    setPersonalInformation(false);
  };
  const [PasswordUpdateModal, setPasswordUpdateModal] = useState(false);
  const showPasswordUpdateModal = () => {
    setLoginModal(false);
    setInterestsModal(false);
    setSignupModal(false);
    setPasswordUpdateModal(true);
    setPersonalInformation(false);
  };
  const closeModal = () => {
    setLoginModal(false);
    setSignupModal(false);
    setInterestsModal(false);
    setPasswordUpdateModal(false);
    setPersonalInformation(false);
  };
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/profile"
          element={
            <Profile
              interestModalTrigger={showInterestsModal}
              passwordModalTrigger={showPasswordUpdateModal}
              PersonalInformationModalTrigger={showPersonalInformation}
            />
          }
        />
        <Route
          exact
          path="/"
          element={<Home showLoginModal={showLoginModal} />}
        />
      </Routes>
      <Modal
        show={LoginModal}
        close_modal={() => {
          console.log("This Modal will not close Until Logged In");
        }}
      >
        <Login SignupModalTrigger={showSignupModal} close_modal={closeModal} />
      </Modal>
      <Modal
        show={SignupModal}
        close_modal={() => {
          console.log("This Modal will not close Until Logged In");
        }}
      >
        <Signup LoginModalTrigger={showLoginModal} close_modal={closeModal} />
      </Modal>
      <Modal show={InterestsModal} close_modal={closeModal}>
        <InterestsModalContent close_modal={closeModal} />
      </Modal>
      <Modal show={PasswordUpdateModal} close_modal={closeModal}>
        <PasswordUpdateModalContent close_modal={closeModal} />
      </Modal>
      <Modal show={PersonalInformation} close_modal={closeModal}>
        <PersonalInformationModalContent close_modal={closeModal} />
      </Modal>
      <ToastContainer style={{ zIndex: "100" }} />
    </div>
  );
}

export default App;
