import React, { useState } from "react";
import NavBar from "./NavBar";
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

function Header() {
  const pageStyle = {
    backgroundColor: "#a9a9a9",
    padding: "17px",
    fontSize: "30px",
    color: "#000000",
  };

  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
      <nav className="navbar" style={pageStyle}>
        <div className="navbar-brand">
          <a
            className="navbar-item"
            rel="noreferrer"
            href="https://github.com/reyno405?tab=repositories"
            style={{ ...pageStyle, textDecoration: "none" }}
          >
            <span className="content is-large">Kevin Reynolds</span>
          </a>
        </div>

        <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      </nav>
      <main>
        <div>{renderPage()}</div>
      </main>
    </div>
  );
}

export default Header;
