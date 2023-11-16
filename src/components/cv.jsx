import "./../css/cv.css";
import Icon from "@mdi/react";
import { mdiEmail, mdiPhone, mdiMapMarker, mdiMap } from "@mdi/js";

function Personal({ personal }) {
  return (
    <>
      <h1>{personal.get.fullName}</h1>
      <div
        className={
          Object.values(personal.get).filter((i) => i === "").length === 2
            ? "flex-center"
            : null
        }
      >
        {personal.get.email !== "" && (
          <span>
            <Icon path={mdiEmail} size={1} />
            {personal.get.email}
          </span>
        )}
        {personal.get.phoneNumber !== "" && (
          <span>
            <Icon path={mdiPhone} size={1} />
            {personal.get.phoneNumber}
          </span>
        )}
        {personal.get.address !== "" && (
          <span>
            <Icon path={mdiMapMarker} size={1} />
            {personal.get.address}
          </span>
        )}
      </div>
    </>
  );
}

function Education({ education }) {
  if (Object.values(education.get[0]).filter((i) => i === "").length !== 5) {
    return (
      <>
        <h2>Education</h2>
        {education.get.map((element) => (
          <div key={element.id}>
            <div className="date-and-place">
              <span>
                {element.startDate}{" "}
                {element.startDate !== "" || element.endDate !== ""
                  ? "-"
                  : null}{" "}
                {element.endDate}
              </span>
              <span>{element.location}</span>
            </div>
            <div className="details">
              <h3>{element.school}</h3>
              <span>{element.degree}</span>
            </div>
          </div>
        ))}
      </>
    );
  }
}

function Experience({ experience }) {
  if (Object.values(experience.get[0]).filter((i) => i === "").length !== 6) {
    return (
      <>
        <h2>Experience</h2>
        {experience.get.map((element) => (
          <div key={element.id}>
            <div className="date-and-place">
              <span>
                {element.startDate}{" "}
                {element.startDate !== "" || element.endDate !== ""
                  ? "-"
                  : null}{" "}
                {element.endDate}
              </span>
              <span>{element.location}</span>
            </div>
            <div className="details">
              <h3>{element.company}</h3>
              <span>{element.positionTitle}</span>
              <span>{element.description}</span>
            </div>
          </div>
        ))}
      </>
    );
  }
}

export default function Cv({ states, styles }) {
  const backgroundColor = styles.get.backgroundColor;
  const color = styles.get.color;
  return (
    <div className="cv">
      {Object.values(states.personal.get).filter((i) => i === "").length !==
      4 ? (
        <header
          style={{
            backgroundColor,
            color,
          }}
        >
          <Personal personal={states.personal}></Personal>
        </header>
      ) : null}
      <main>
        <Education education={states.education}></Education>
        <Experience experience={states.experience}></Experience>
      </main>
    </div>
  );
}
