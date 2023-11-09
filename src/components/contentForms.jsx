import { useState } from "react";
import { Input } from "./edit";

function Section({ header, children }) {
  return (
    <div>
      <h2>{header}</h2>
      <div>{children}</div>
    </div>
  );
}

function PersonalDetails() {
  return (
    <Section header="personal Details">
      <Input label="Full name" isRecommended={false} isRequired={true}></Input>
      <Input label="Email" type="email" isRecommended={true}></Input>
      <Input label="Phone number" type="phone" isRecommended={true}></Input>
      <Input label="Address" type="text" isRecommended={true}></Input>
    </Section>
  );
}

function InformationList() {

}

function Education() {
  const [formState, setFormState] = useState('collapsed')
  return (
    <Section header="Education">
      
    </Section>
  )
}

export default function ContentForms() {
  return (
    <>
  <PersonalDetails></PersonalDetails>
  <Education></Education>
    </>
  );
}
