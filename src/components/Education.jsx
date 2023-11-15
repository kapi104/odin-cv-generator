import { useState } from "react";
import { Section, DeleteBtn, ItemsList } from "./contentForms";
import { Input } from "./edit";
import { educationFactory, getId } from "../assets/utils";



function EducationForm({education, currentlyEditing}) {
  const currentSchool = education.get[currentlyEditing];
  
  return (
    <>
    <Input label="School" isRequired={true} state={education} value={currentSchool.school}></Input>
    <Input label="Degree" isRequired={true} state={education} value={currentSchool.degree}></Input>
    <Input label="Start Date" isRequired={true} state={education} value={currentSchool.startDate}></Input>
    <Input label="End date" isRequired={true} state={education} value={currentSchool.endDate}></Input>
    <Input label="Location" isRequired={true} state={education} value={currentSchool.location}></Input>
    </>
  )
}

export function Education({ education }) {
  const [currentlyEditing, setCurrentlyEditing] = useState(0);

  function changeForm(index) {
    setCurrentlyEditing(index)
  }

  function addSchool() {
    education.set([...education.get, educationFactory(getId(), '','','','','')])
    setCurrentlyEditing(education.get.length)
  }

  function handleDelete() {
    if (currentlyEditing > 0) {
      const newEducation = education.get;
      newEducation.splice(currentlyEditing, 1)
      console.log(newEducation);
      education.set([...newEducation])
      setCurrentlyEditing(currentlyEditing - 1)
    } else if (currentlyEditing === 0 && education.get.length === 1){
      const newEducation = education.get[0]
      const keys = Object.keys(newEducation);
      keys.shift()
      keys.forEach(k => {
        newEducation[k] = '';
      })
      education.set([newEducation])
    } else {
      const newEducation = education.get;
      newEducation.splice(currentlyEditing, 1)
      console.log({currentlyEditing, newEducation});
      education.set([...newEducation])
    }
  }

    return (
      <Section header="Education">
        <ItemsList state={education} handleChange={changeForm} handleAdd={addSchool}></ItemsList>
        <EducationForm education={education} currentlyEditing={currentlyEditing}></EducationForm>
        <DeleteBtn handleDelete={handleDelete}></DeleteBtn>
      </Section>
    )
}
