import { PersonalDetailsForm } from "./PersonalDetailsForm";
import { Education } from "./Education";

export function Section({ header, children, isExtendable = false, onClick}) {
  return (
    <header>
      {
      isExtendable ?
        <div className="expand-section-header" onClick={onClick}>
          <h2>{header}</h2>
          
        </div>
       :
        <h2>{header}</h2>
      }
      <div>{children}</div>
    </header>
  );
}

export function InformationList() {
return 111
}

export default function ContentForms({states}) {
  return (
    <>
      <PersonalDetailsForm personal={states.personal}></PersonalDetailsForm>
      <Education education={states.education}></Education>
    </>
  );
}
