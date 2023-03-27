import React from 'react'
import "./PasswordUpdate.css"
const PasswordUpdate = () => {
  return (
    <div>
      <div id="PasswordUpdate">
        <div className="header">
          <h2>Password & Security</h2>
          <button>Change</button>
        </div>
        <div className="PasswordContainer">
          <div className="PasswordFields">
            <label for="Password">Password</label>
            <input type="password" name="Password" value="dljfdlkfjdlfjdlkf"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PasswordUpdate
