import React from 'react'
import AboutMe from './AboutMe/AboutMe'
import Education from './Education/Education'
import Interests from './Interests/Interests'
import Links from './Links/Links'
import PasswordUpdate from './PasswordUpdate/PasswordUpdate'

const Profile = (props) => {
  return (
    <div>
      <AboutMe/>
      <Links/>
      <Education/>
      <PasswordUpdate/>
      <Interests showModal={props.interestModalTrigger}/>
    </div>
  )
}

export default Profile
