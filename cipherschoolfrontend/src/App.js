import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Login from "./Components/Login_Signup/Login";
import Signup from "./Components/Login_Signup/Signup";
import Modal from "./Components/Modal/Modal";
import Profile from "./Components/Profile/Profile";
import InterestsModalContent from "./Components/Profile/Interests/InterestsModalContent/InterestsModalContent";
import PasswordUpdateModalContent from "./Components/Profile/PasswordUpdate/PasswordUpdateModal/PasswordUpdateModal";
function App() {
  const [LoginModal, setLoginModal] = useState(true);
  const showLoginModal = () => {
    setLoginModal(true);
    setInterestsModal(false);
    setSignupModal(false);
    setPasswordUpdateModal(false);
  };
  const [SignupModal, setSignupModal] = useState(false);
  const showSignupModal = () => {
    setLoginModal(false);
    setInterestsModal(false);
    setSignupModal(true);
    setPasswordUpdateModal(false);
  };
  const [InterestsModal, setInterestsModal] = useState(false);
  const showInterestsModal = () => {
    setLoginModal(false);
    setInterestsModal(true);
    setSignupModal(false);
    setPasswordUpdateModal(false);
  };
  const [PasswordUpdateModal, setPasswordUpdateModal] = useState(false);
  const showPasswordUpdateModal = () => {
    setLoginModal(false);
    setInterestsModal(false);
    setSignupModal(false);
    setPasswordUpdateModal(true);
  };
  const closeModal = () => {
    setLoginModal(false);
    setSignupModal(false);
    setInterestsModal(false);
    setPasswordUpdateModal(false);
  };
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/profile"
          element={<Profile interestModalTrigger={showInterestsModal} passwordModalTrigger={showPasswordUpdateModal}/>}
        />
      </Routes>
      <Modal show={LoginModal} close_modal={closeModal}>
        <Login SignupModalTrigger={showSignupModal} close_modal={closeModal} />
      </Modal>
      <Modal show={SignupModal} close_modal={closeModal}>
        <Signup LoginModalTrigger={showLoginModal} close_modal={closeModal} />
      </Modal>
      <Modal show={InterestsModal} close_modal={closeModal}>
        <InterestsModalContent close_modal={closeModal} />
      </Modal>
      <Modal show={PasswordUpdateModal} close_modal={closeModal}>
        <PasswordUpdateModalContent close_modal={closeModal} />
      </Modal>
      <ToastContainer />
    </div>
  );
}

export default App;
