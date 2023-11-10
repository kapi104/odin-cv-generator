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
  const personalState = {
    personalDetails,
    setPersonalDetails
  }

  return (
    <div className="container">
      <Edit personalState={personalState}></Edit>
      <Cv></Cv>
    </div>
  )
} 