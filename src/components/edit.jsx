import "./../css/edit.css";
import { useState } from "react";
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
  return (
    <div className="input">
      <label for={label}>{label}</label>
      {isRecommended && <span>recommended</span>}
      <input type={type} id={label} required={isRequired} />
    </div>
  );
}

export default function Edit() {
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
        <ContentForms></ContentForms>
      ) : (
        <CustomizeForms></CustomizeForms>
      )}
    </div>
  );
}

export { Edit, Input };
