import { PersonalDetailsForm } from "./PersonalDetailsForm";
import { Education } from "./Education";
import { Experience } from "./experience";

export function Section({ header, children}) {
  return (
    <div>
    <header>
      <h2>{header}</h2>
    </header>
      <div>{children}</div>
    </div>
  );
}

function ListItem({index, handleChange}) {
  return <li><button onClick={() => handleChange(index)}>{index}</button></li>
}

function AddButton({handleAdd}) {
  return <li><button onClick={handleAdd}>+</button></li>
}

export function ItemsList({state, handleChange, handleAdd}) {
  return (
    <ul>
  {
  state.get.map((item, index) => (
    <ListItem  key={item.id} index={index} handleChange={handleChange}></ListItem>
  ))
  }
  <AddButton handleAdd={handleAdd}></AddButton>
  </ul>
  )
}

export function DeleteBtn({handleDelete}) {
  return <button onClick={handleDelete}>Delete</button>
}

export default function ContentForms({states}) {
  return (
    <>
      <PersonalDetailsForm personal={states.personal}></PersonalDetailsForm>
      <Education education={states.education}></Education>
      <Experience experience={states.experience}></Experience>
    </>
  );
}
