import React from "react";

export default function Resume() {
  const resumeStyle = {
    fontSize: "27px",
    color: "#000000",
  };

  const proficienciesStyle = {
    color: "#000000",
  };
  return (
    <div className="container">
      <h1 style={{ color: "#000000", padding: "17px" }}>Resume</h1>
      <div>
        <a
          style={{
            textDecoration: "none",
            fontSize: "27px",
            color: "#000000",
            margin: "10px",
          }}
          href="https://docs.google.com/document/d/1IUMF2TZGfYncbJU4UOFVzCbmuPDVYhLjUadUHRmzNQw/edit#"
          className=""
        >
          Download my resume
        </a>
      </div>
      <div>
        <h2 style={proficienciesStyle}>Front-End Proficiencies</h2>
        <ul className="list-styled" style={resumeStyle}>
          <li>Html</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Bootstrap</li>
          <li>React</li>
        </ul>
      </div>
      <div>
        <h2 style={proficienciesStyle}>Back-End Proficiencies</h2>
        <ul className="list-styled" style={resumeStyle}>
          <li>APIs</li><li>Node</li>
          <li>Express</li>
          <li>ORM</li>
          <li>Sequelize</li>
          <li>REST</li>
          <li>MySQL</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </div>
  );
}
