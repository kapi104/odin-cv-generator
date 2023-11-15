import { useState } from "react";
import { Section, DeleteBtn, ItemsList } from "./contentForms";
import { Input } from "./edit";
import { experienceFactory, camelCase, getId } from "../assets/utils";

function TextArea({
  label,
  isRecommended = false,
  isRequired = false,
  state,
  value
}) {
  const camelCaseLabel = camelCase(label)
  return (
    <div className="input">
      <label htmlFor={camelCaseLabel}>{label}</label>
      {isRecommended && <span>recommended</span>}
      <textarea 
      value={value}
      id={camelCaseLabel} 
      required={isRequired} 
      onChange={(e) => state.set([...state.get, {[camelCaseLabel]: e.target.value}])}
      />
    </div>
  )
}

function ExperienceForm({experience, currentlyEditing}) {
  const currentCompany = experience.get[currentlyEditing];
  
  return (
    <>
    <Input label="Company" isRequired={true} state={experience} value={currentCompany.company}></Input>
    <Input label="Position Title" isRequired={true} state={experience} value={currentCompany.position}></Input>
    <Input label="Start Date" isRequired={true} state={experience} value={currentCompany.startDate}></Input>
    <Input label="End date" isRequired={true} state={experience} value={currentCompany.endDate}></Input>
    <Input label="Location" isRequired={false} state={experience} value={currentCompany.location}></Input>
    <TextArea label="Description" isRequired={false} state={experience} value={currentCompany.description}></TextArea>
    </>
  )
}

export function Experience({ experience }) {
  const [currentlyEditing, setCurrentlyEditing] = useState(0);

  function changeForm(index) {
    setCurrentlyEditing(index)
  }

  function addCompany() {
    experience.set([...experience.get, experienceFactory(getId(), '','','','','')])
    setCurrentlyEditing(experience.get.length)
  }

  function handleDelete() {
    if (currentlyEditing > 0) {
      const newExperience = experience.get;
      newExperience.splice(currentlyEditing, 1)
      console.log(newExperience);
      experience.set([...newExperience])
      setCurrentlyEditing(currentlyEditing - 1)
    } else if (currentlyEditing === 0 && experience.get.length === 1){
      const newExperience = experience.get[0]
      const keys = Object.keys(newExperience);
      keys.shift()
      keys.forEach(k => {
        newExperience[k] = '';
      })
      experience.set([newExperience])
    } else {
      const newExperience = experience.get;
      newExperience.splice(currentlyEditing, 1)
      console.log({currentlyEditing, newExperience});
      experience.set([...newExperience])
    }
  }

    return (
      <Section header="Experience">
        <ItemsList state={experience} handleChange={changeForm} handleAdd={addCompany}></ItemsList>
        <ExperienceForm experience={experience} currentlyEditing={currentlyEditing}></ExperienceForm>
        <DeleteBtn handleDelete={handleDelete}></DeleteBtn>
      </Section>
    )
}
