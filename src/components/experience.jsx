import { useState } from "react";
import { Section, DeleteBtn, ItemsList } from "./contentForms";
import { Input, TextArea } from "./edit";
import { experienceFactory, getId } from "../assets/utils";
import { mdiBriefcase } from "@mdi/js";

function ExperienceForm({ experience, currentlyEditing, handleInput }) {
  const currentCompany = experience.get[currentlyEditing];
  const formPrefix = "job_";

  return (
    <>
      <Input
        formPrefix={formPrefix}
        label="Company"
        isRequired={true}
        state={experience}
        value={currentCompany.company}
        handleInput={handleInput}
      ></Input>
      <Input
        formPrefix={formPrefix}
        label="Position Title"
        isRequired={true}
        state={experience}
        value={currentCompany.positionTitle}
        handleInput={handleInput}
      ></Input>
      <Input
        formPrefix={formPrefix}
        label="Start Date"
        isRequired={true}
        state={experience}
        value={currentCompany.startDate}
        handleInput={handleInput}
      ></Input>
      <Input
        formPrefix={formPrefix}
        label="End Date"
        isRequired={true}
        state={experience}
        value={currentCompany.endDate}
        handleInput={handleInput}
      ></Input>
      <Input
        formPrefix={formPrefix}
        label="Location"
        isRequired={false}
        state={experience}
        value={currentCompany.location}
        handleInput={handleInput}
      ></Input>
      <TextArea
        formPrefix={formPrefix}
        label="Description"
        isRequired={false}
        state={experience}
        value={currentCompany.description}
        handleInput={handleInput}
      ></TextArea>
    </>
  );
}

export function Experience({ experience }) {
  const [currentlyEditing, setCurrentlyEditing] = useState(0);

  function changeForm(index) {
    setCurrentlyEditing(index);
  }

  function addCompany() {
    experience.set([
      ...experience.get,
      experienceFactory(getId(), "", "", "", "", ""),
    ]);
    setCurrentlyEditing(experience.get.length);
  }

  function handleDelete() {
    if (currentlyEditing > 0) {
      const newExperience = experience.get;
      newExperience.splice(currentlyEditing, 1);
      console.log(newExperience);
      experience.set([...newExperience]);
      setCurrentlyEditing(currentlyEditing - 1);
    } else if (currentlyEditing === 0 && experience.get.length === 1) {
      const newExperience = experience.get[0];
      const keys = Object.keys(newExperience);
      keys.shift();
      keys.forEach((k) => {
        newExperience[k] = "";
      });
      experience.set([newExperience]);
    } else {
      const newExperience = experience.get;
      newExperience.splice(currentlyEditing, 1);
      console.log({ currentlyEditing, newExperience });
      experience.set([...newExperience]);
    }
  }

  function handleInput(value, camelCase) {
    const newFormValue = experience.get;
    newFormValue[currentlyEditing][camelCase] = value;

    experience.set([...newFormValue]);
  }

  return (
    <Section header="Experience" icon={mdiBriefcase}>
      <ItemsList
        state={experience}
        handleChange={changeForm}
        currentlyEditing={currentlyEditing}
        handleAdd={addCompany}
      ></ItemsList>
      <ExperienceForm
        experience={experience}
        currentlyEditing={currentlyEditing}
        handleInput={handleInput}
      ></ExperienceForm>
      <DeleteBtn handleDelete={handleDelete}></DeleteBtn>
    </Section>
  );
}
