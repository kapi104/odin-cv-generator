import { useState } from "react";
import { Section, InformationList } from "./contentForms";
import { Input } from "./edit";
import { getId } from "../assets/utils";

function educationFactory(school, degree, startDate, endDate, location) {
     return {school,
    degree,
    startDate,
    endDate,
    location}
}

function EducationForm({education}) {
  return (
    <Input label="School" isRequired={true} state={education}></Input>
  )
}

export function Education({ education }) {
  const [sectionState, setSectionState] = useState('collapsed');
  

  function changeState() {
    sectionState === 'collapsed' ? setSectionState('extended') : setSectionState('collapsed');
  }

  function displayEducationForm() {
    setSectionState('edit');
    const id = getId()
    const newArray = educationFactory('','','','','')
    education.set({...education.get, [id]: newArray})
    console.log(education.get);
    }

  if (sectionState === 'collapsed') {
    return (
      <Section header="Education" isExtendable={true} sectionState={sectionState} onClick={changeState}>
      </Section>
    )
  } else if (sectionState === 'extended'){
    return (
      <Section header="Education" isExtendable={true} sectionState={sectionState} onClick={changeState}>
        <InformationList></InformationList> 
        <button onClick={displayEducationForm}>
          Education
        </button>
      </Section>
    )
  } else {
    return (
      <Section header="Education" isExtendable={true} sectionState={sectionState}>
        <EducationForm education={education}></EducationForm>
      </Section>
    )
  }
  
}
