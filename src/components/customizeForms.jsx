import rgbHex from "rgb-hex";
import hexRgb from "hex-rgb";

function ColorInput({ rgb, id, handleChange }) {
  return (
    <input
      type="color"
      id={id}
      value={`#${rgbHex(rgb)}`}
      onChange={(e) => {
        handleChange(e.target.value, id);
      }}
    />
  );
}

function ColorPicker({ styles, handleChange }) {
  return (
    <>
      <div>
        <label htmlFor="backgroundColor">Background Color</label>
        <ColorInput
          id="backgroundColor"
          rgb={styles.get.backgroundColor}
          handleChange={handleChange}
        ></ColorInput>
      </div>
      <div>
        <label htmlFor="color">Color</label>
        <ColorInput
          id="color"
          rgb={styles.get.color}
          handleChange={handleChange}
        ></ColorInput>
      </div>
    </>
  );
}

function Section({ header, children, classN }) {
  return (
    <div>
      <header>
        <h2>{header}</h2>
      </header>
      <div className={classN}>{children}</div>
    </div>
  );
}

export default function CustomizeForms({ styles }) {
  function handleChange(value, id) {
    styles.set({ ...styles.get, [id]: hexRgb(value, { format: "css" }) });
  }

  return (
    <Section header="Colors" classN="color-picker">
      <ColorPicker styles={styles} handleChange={handleChange}></ColorPicker>
    </Section>
  );
}
