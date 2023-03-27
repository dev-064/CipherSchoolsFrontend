import { useState } from "react";
import Login from "./Components/Login_Signup/Login";
import Signup from "./Components/Login_Signup/Signup";
import Modal from "./Components/Modal/Modal";
import { Routes, Route } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
function App() {
  const [LoginModal, setLoginModal] = useState(false);
  const showLoginModal = () => {
    setLoginModal(true);
  };
  const [SignupModal, setSignupModal] = useState(false);
  const showSignupModal = () => {
    setLoginModal(true);
  };
  const closeModal = () => {
    setLoginModal(false);
    setSignupModal(false);
  };
  return (
    <div className="App">
      <Routes>
        <Route exact path="/profile" element={<Profile />} />
      </Routes>
      <Modal show={LoginModal} close_modal={closeModal}>
        <Login />
      </Modal>
      <Modal show={SignupModal} close_modal={closeModal}>
        <Signup />
      </Modal>
    </div>
  );
}

export default App;
