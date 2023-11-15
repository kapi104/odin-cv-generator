import { Input } from "./edit";
import { Section } from "./contentForms";

export function PersonalDetailsForm({ personal }) {
  return (
    <Section header="personal Details">
      <Input label="Full name" isRequired={true} state={personal}></Input>
      <Input
        label="Email"
        type="email"
        isRecommended={true}
        state={personal}
      ></Input>
      <Input
        label="Phone number"
        type="phone"
        isRecommended={true}
        state={personal}
      ></Input>
      <Input
        label="Address"
        type="text"
        isRecommended={true}
        state={personal}
      ></Input>
    </Section>
  );
}
