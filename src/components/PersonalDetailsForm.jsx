import { Input } from "./edit";
import { Section } from "./contentForms";

export function PersonalDetailsForm({ personal }) {
  function handleInput(value, camelCase) {
    const data = personal.get;
    personal.set({ ...data, [camelCase]: value });
  }

  return (
    <Section header="personal Details">
      <Input
        label="Full name"
        isRequired={true}
        state={personal}
        handleInput={handleInput}
      ></Input>
      <Input
        label="Email"
        type="email"
        state={personal}
        handleInput={handleInput}
      ></Input>
      <Input
        label="Phone number"
        type="phone"
        state={personal}
        handleInput={handleInput}
      ></Input>
      <Input
        label="Address"
        type="text"
        state={personal}
        handleInput={handleInput}
      ></Input>
    </Section>
  );
}
