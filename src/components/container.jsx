import { useState } from "react";
import { Edit } from "./edit";
import Cv from "./cv";
import { getId } from "../assets/utils";

const personalDetailsTemplate = {};

export default function Container() {
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "John Smith",
    email: "email@example.com",
    phoneNumber: "111 222 333",
    address: "New York, USA",
  });
  const personal = {
    get: personalDetails,
    set: setPersonalDetails,
  };

  const [educationDetails, setEducation] = useState([
    {
      id: getId(),
      school: "University of Oxford",
      degree: "Computer science",
      startDate: "01.10.2015",
      endDate: "23.06.2020",
      location: "Oxford, UK",
    },
  ]);
  const education = {
    get: educationDetails,
    set: setEducation,
  };

  const [experienceDetails, setExperience] = useState([
    {
      id: getId(),
      company: "Google",
      positionTitle: "Junior web developer",
      startDate: "1.07.2020",
      endDate: "30.06.2023",
      location: "San Francisco, USA",
      description: "Helping team in developing new technologies",
    },
  ]);
  const experience = {
    get: experienceDetails,
    set: setExperience,
  };

  const [editableStyles, setEditableStyles] = useState({
    backgroundColor: "rgb(0, 0, 151)",
    color: "rgb(255, 255, 255)",
  });
  const styles = {
    get: editableStyles,
    set: setEditableStyles,
  };

  return (
    <div className="container">
      <Edit states={{ personal, education, experience }} styles={styles}></Edit>
      <Cv states={{ personal, education, experience }} styles={styles}></Cv>
    </div>
  );
}
