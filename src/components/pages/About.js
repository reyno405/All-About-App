import React from "react";

export default function About() {
  const cardStyle = {
    fontSize: "27px",
    margin: "50px",
    color: "#100c08",
  };
  const textStyle = {
    fontSize: "27px",
    margin: "97.5px",
    color: "#100c08",
  };

  return (
    <div className="container" style={textStyle}>
      <h1>About me</h1>
      <p style={cardStyle}>
        Software Engineer with a demonstrated history of working on production
        web and mobile applications. Clear understanding and technical expertise
        in Computer Science fundamentals, Javascript, ReactJS, Redux, NodeJS,
        MongoDB, CSS, HTML and other technologies.
      </p>
    </div>
  );
}
