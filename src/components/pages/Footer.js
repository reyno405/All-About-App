import React from "react";
import { Github, Linkedin } from "react-bootstrap-icons";

function Footer() {
   const footerStyle = {
        fontSize: '70px',
        
    }
  return (
    <footer className="footer" style={footerStyle}>
      <div className="d-flex justify-content-center">
      <a style={{ padding: '15px', color: '#d2b48c' }} href="https://github.com/reyno405"><Github></Github></a>
     <a style={{ padding: '15px', color: '#d2b48c' }} href="https://www.linkedin.com/in/kevin-reynolds-35a37a126/"><Linkedin></Linkedin></a>
      </div>
    </footer>
  );
}

export default Footer;