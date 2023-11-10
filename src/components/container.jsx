import { useState } from "react"
import {Edit} from "./edit";
import Cv from "./cv";

const personalDetailsTemplate = {
  fullName: '',
  email: '',
  phoneNumber: '',
  address: ''
}

export default function Container() {
  const [personalDetails, setPersonalDetails] = useState(personalDetailsTemplate);
  const personal = {
    get: personalDetails,
    set: setPersonalDetails
  }

  const [educationDetails, setEducation] = useState({})
  const education = {
    get: educationDetails,
    set: setEducation
  }

  const [experienceDetails, setExperience] = useState({})
  const experience = {
    get: experienceDetails,
    set: setExperience
  }

  return (
    <div className="container">
      <Edit states={{personal, education, experience}}></Edit>
      <Cv></Cv>
    </div>
  )
} 