import { PersonalDetailsForm } from "./PersonalDetailsForm";
import { Education } from "./Education";
import { Experience } from "./experience";
import Icon from '@mdi/react';
import { mdiAccount, mdiSchool, mdiBriefcase} from '@mdi/js';

export function Section({ header, children, icon }) {
  return (
    <div>
      <header>
        <h2><Icon path={icon} size={1}></Icon>{header}</h2>
      </header>
      <div className="form-inputs">{children}</div>
    </div>
  );
}

function ListItem({ index, handleChange, currentlyEditing }) {
  return (
    <li>
      <button
        className={currentlyEditing === index ? "active-button" : null}
        onClick={() => handleChange(index)}
      >
        {index + 1}
      </button>
    </li>
  );
}

function AddButton({ handleAdd }) {
  return (
    <li>
      <button onClick={handleAdd}>+</button>
    </li>
  );
}

export function ItemsList({
  state,
  handleChange,
  handleAdd,
  currentlyEditing,
}) {
  return (
    <ul>
      {state.get.map((item, index) => (
        <ListItem
          key={item.id}
          index={index}
          handleChange={handleChange}
          currentlyEditing={currentlyEditing}
        ></ListItem>
      ))}
      <AddButton handleAdd={handleAdd}></AddButton>
    </ul>
  );
}

export function DeleteBtn({ handleDelete }) {
  return <button className="delete-button" onClick={handleDelete}>-</button>;
}

export default function ContentForms({ states }) {
  return (
    <>
      <PersonalDetailsForm personal={states.personal}></PersonalDetailsForm>
      <Education education={states.education}></Education>
      <Experience experience={states.experience}></Experience>
    </>
  );
}
