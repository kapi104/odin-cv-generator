import "./../css/edit.css";
import { useState } from "react";
import { camelCase } from "./../assets/utils";
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
  isRequired = false,
  value,
  handleInput,
  formPrefix,
}) {
  const camelCaseLabel = camelCase(label);
  const id = formPrefix + camelCaseLabel;
  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        value={value}
        id={id}
        required={isRequired}
        placeholder={`Enter ${label}`}
        onChange={(e) => {
          handleInput(e.target.value, camelCaseLabel);
        }}
      />
    </div>
  );
}

export function TextArea({
  label,
  isRequired = false,
  type = "text",
  value,
  handleInput,
  formPrefix,
}) {
  const camelCaseLabel = camelCase(label);
  const id = formPrefix + camelCaseLabel;
  return (
    <div className="input">
      <label htmlFor={id}>{label}</label>
      <textarea
        value={value}
        type={type}
        id={id}
        required={isRequired}
        placeholder={`Enter ${label}`}
        onChange={(e) => {
          handleInput(e.target.value, camelCaseLabel);
        }}
      />
    </div>
  );
}

export default function Edit({ states, styles }) {
  const [currentForm, setCurrentForm] = useState("content");

  function changeCurrentForm() {
    currentForm === "content"
      ? setCurrentForm("customize")
      : setCurrentForm("content");
  }

  return (
    <div
      className="forms"
      style={{
        "--accent-color": styles.get.backgroundColor,
      }}
    >
      <SwitchFormBtn onClick={changeCurrentForm}></SwitchFormBtn>

      {currentForm === "content" ? (
        <ContentForms states={states} styles={styles}></ContentForms>
      ) : (
        <CustomizeForms styles={styles}></CustomizeForms>
      )}
    </div>
  );
}

export { Edit, Input };
