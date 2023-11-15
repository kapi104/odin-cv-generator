import { useState } from "react";
import { Edit } from "./edit";
import Cv from "./cv";
import { getId } from "../assets/utils";

const personalDetailsTemplate = {};

export default function Container() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });
  const personal = {
    get: personalDetails,
    set: setPersonalDetails,
  };

  const [educationDetails, setEducation] = useState([
    {
      id: getId(),
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    },
  ]);
  const education = {
    get: educationDetails,
    set: setEducation,
  };

  const [experienceDetails, setExperience] = useState([
    {
      id: getId(),
      company: "",
      positionTitle: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    },
  ]);
  const experience = {
    get: experienceDetails,
    set: setExperience,
  };

  return (
    <div className="container">
      <Edit states={{ personal, education, experience }}></Edit>
      <Cv states={{ personal, education, experience }}></Cv>
    </div>
  );
}
