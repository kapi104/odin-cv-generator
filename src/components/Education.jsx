import { useState } from "react";
import { Section, DeleteBtn, ItemsList } from "./contentForms";
import { Input } from "./edit";
import { educationFactory, getId } from "../assets/utils";

function EducationForm({ education, currentlyEditing, handleInput }) {
  const currentSchool = education.get[currentlyEditing];
  const formPrefix = "edu_";

  return (
    <>
      <Input
        formPrefix={formPrefix}
        label="School"
        isRequired={true}
        state={education}
        value={currentSchool.school}
        handleInput={handleInput}
      ></Input>
      <Input
        formPrefix={formPrefix}
        label="Degree"
        isRequired={true}
        state={education}
        value={currentSchool.degree}
        handleInput={handleInput}
      ></Input>
      <Input
        formPrefix={formPrefix}
        label="Start Date"
        isRequired={true}
        state={education}
        value={currentSchool.startDate}
        handleInput={handleInput}
      ></Input>
      <Input
        formPrefix={formPrefix}
        label="End date"
        isRequired={true}
        state={education}
        value={currentSchool.endDate}
        handleInput={handleInput}
      ></Input>
      <Input
        formPrefix={formPrefix}
        label="Location"
        isRequired={true}
        state={education}
        value={currentSchool.location}
        handleInput={handleInput}
      ></Input>
    </>
  );
}

export function Education({ education }) {
  const [currentlyEditing, setCurrentlyEditing] = useState(0);

  function changeForm(index) {
    setCurrentlyEditing(index);
  }

  function addSchool() {
    education.set([
      ...education.get,
      educationFactory(getId(), "", "", "", "", ""),
    ]);
    setCurrentlyEditing(education.get.length);
  }

  function handleDelete() {
    if (currentlyEditing > 0) {
      const newEducation = education.get;
      newEducation.splice(currentlyEditing, 1);
      console.log(newEducation);
      education.set([...newEducation]);
      setCurrentlyEditing(currentlyEditing - 1);
    } else if (currentlyEditing === 0 && education.get.length === 1) {
      const newEducation = education.get[0];
      const keys = Object.keys(newEducation);
      keys.shift();
      keys.forEach((k) => {
        newEducation[k] = "";
      });
      education.set([newEducation]);
    } else {
      const newEducation = education.get;
      newEducation.splice(currentlyEditing, 1);
      console.log({ currentlyEditing, newEducation });
      education.set([...newEducation]);
    }
  }

  function handleInput(value, camelCase) {
    const newFormValue = education.get;
    newFormValue[currentlyEditing][camelCase] = value;

    education.set([...newFormValue]);
    console.log(newFormValue);
  }

  return (
    <Section header="Education">
      <ItemsList
        state={education}
        handleChange={changeForm}
        handleAdd={addSchool}
      ></ItemsList>
      <EducationForm
        education={education}
        currentlyEditing={currentlyEditing}
        handleInput={handleInput}
      ></EducationForm>
      <DeleteBtn handleDelete={handleDelete}></DeleteBtn>
    </Section>
  );
}
