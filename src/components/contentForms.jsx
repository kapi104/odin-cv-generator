import { useState } from "react";
import { Input } from "./edit";

function Section({ header, children, isExtendable = false}) {
  return (
    <header>
      {
      isExtendable ?
        <div className="expand-section-header">
          <h2>{header}</h2>
          
        </div>
       :
        <h2>{header}</h2>
      }
      <div>{children}</div>
    </header>
  );
}

function PersonalDetails({personalState}) {
  return (
    <Section header="personal Details">
      <Input label="Full name" isRecommended={false} isRequired={true} personalState={personalState}></Input>
      <Input label="Email" type="email" isRecommended={true} personalState={personalState}></Input>
      <Input label="Phone number" type="phone" isRecommended={true} personalState={personalState}></Input>
      <Input label="Address" type="text" isRecommended={true} personalState={personalState}></Input>
    </Section>
  );
}

function InformationList() {

}

function Education() {
  // const [formState, setFormState] = useState("collapsed");
  return <Section header="Education" isExtendable={true}>

  </Section>;
}

export default function ContentForms({personalState}) {
  return (
    <>
      <PersonalDetails personalState={personalState}></PersonalDetails>
      <Education></Education>
    </>
  );
}
