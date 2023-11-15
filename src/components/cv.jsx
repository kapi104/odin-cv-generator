function Personal({ personal }) {
  if (Object.values(personal.get).filter((i) => i === "").length !== 4) {
    return (
      <header>
        <h1>{personal.get.fullName}</h1>
        <div>
          <span>{personal.get.email}</span>
          <span>{personal.get.phoneNumber}</span>
          <span>{personal.get.address}</span>
        </div>
      </header>
    );
  }
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
            <div className="school-data">
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
            <div className="school-data">
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

export default function Cv({ states }) {
  return (
    <div className="cv">
      <Personal personal={states.personal}></Personal>
      <main>
        <Education education={states.education}></Education>
        <Experience experience={states.experience}></Experience>
      </main>
    </div>
  );
}
