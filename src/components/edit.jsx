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
  state,
  value
}) {
  const camelCaseLabel = camelCase(label) 
  return (
    <div className="input">
      <label htmlFor={camelCaseLabel}>{label}</label>
      {isRecommended && <span>recommended</span>}
      <input 
      type={type} 
      value={value}
      id={camelCaseLabel} 
      required={isRequired} 
      onChange={(e) => state.set([...state.get, {[camelCaseLabel]: e.target.value}])}
      />
    </div>
  );
}

export default function Edit({states}) {
  const [currentForm, setCurrentForm] = useState("content");

  function changeCurrentForm() {
    currentForm === "content"
      ? setCurrentForm("customize")
      : setCurrentForm("content");
  }

  return (
    <div className="forms">
      <SwitchFormBtn onClick={changeCurrentForm}></SwitchFormBtn>

      {currentForm === "content" ? (
        <ContentForms states={states}></ContentForms>
      ) : (
        <CustomizeForms></CustomizeForms>
      )}
    </div>
  );
}

export { Edit, Input };
