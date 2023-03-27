import { useState } from "react";
import Login from "./Components/Login_Signup/Login";
import Signup from "./Components/Login_Signup/Signup";
import Modal from "./Components/Modal/Modal";
import { Routes, Route } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import InterestsModalContent from "./Components/Profile/Interests/InterestsModalContent/InterestsModalContent";
function App() {
  const [LoginModal, setLoginModal] = useState(false);
  const showLoginModal = () => {
    setLoginModal(true);
  };
  const [SignupModal, setSignupModal] = useState(false);
  const showSignupModal = () => {
    setLoginModal(true);
  };
  const [InterestsModal, setInterestsModal] = useState(false);
  const showInterestsModal = () => {
    setInterestsModal(true);
  };
  const closeModal = () => {
    setLoginModal(false);
    setSignupModal(false);
    setInterestsModal(false)
  };
  return (
    <div className="App">
      <Routes>
        <Route exact path="/profile" element={<Profile interestModalTrigger={showInterestsModal}/>} />
      </Routes>
      <Modal show={LoginModal} close_modal={closeModal}>
        <Login />
      </Modal>
      <Modal show={SignupModal} close_modal={closeModal}>
        <Signup />
      </Modal>
      <Modal show={InterestsModal} close_modal={closeModal}>
        <InterestsModalContent />
      </Modal>
    </div>
  );
}

export default App;
