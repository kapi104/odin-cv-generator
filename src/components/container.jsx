import { useState } from "react"
import {Edit} from "./edit";
import Cv from "./cv";

export default function Container() {
  const [personalDetails, setPersonalDetails] = useState('ok');

  return (
    <div className="container">
      <Edit setPersonalDetails={setPersonalDetails}></Edit>
      <Cv PersonalDetails={personalDetails}></Cv>
    </div>
  )
} 