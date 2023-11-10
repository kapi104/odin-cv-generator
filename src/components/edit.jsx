import "./../css/edit.css";
import { useState } from "react";
import {camelCase} from "./../assets/utils"
import ContentForms from "./contentForms";
import CustomizeForms from "./customizeForms";

function SwitchFormBtn({ onClick }) {
  return (
    <>
      <button onClick={onClick}>
        <span>Content</span>
        <span>Customize</span>
      </button>
    </>
  );
}

function Input({
  label,
  type = "text",
  isRecommended = false,
  isRequired = false,
}) {
  const camelCaseLabel = camelCase(label) 
  return (
    <div className="input">
      <label htmlFor={camelCaseLabel}>{label}</label>
      {isRecommended && <span>recommended</span>}
      <input type={type} id={camelCaseLabel} required={isRequired} />
    </div>
  );
}

export default function Edit({setPersonalDetails}) {
  const [currentForm, setCurrentForm] = useState("content");

  function changeCurrentForm() {
    currentForm === "content"
      ? setCurrentForm("customize")
      : setCurrentForm("content");
    console.log(1);
  }

  return (
    <div className="forms">
      <SwitchFormBtn onClick={changeCurrentForm}></SwitchFormBtn>

      {currentForm === "content" ? (
        <ContentForms setPersonalDetails={setPersonalDetails}></ContentForms>
      ) : (
        <CustomizeForms></CustomizeForms>
      )}
    </div>
  );
}

export { Edit, Input };
