import { useContext, useState } from "react";
import MainContext from "../MainContext";
import "../App.css";

const FootBar = () => {
  const { setMode } = useContext(MainContext);
  return (
    <div
      onMouseEnter={() => setMode(false)}
      onMouseLeave={() => setMode(true)}
      className="foot"
    >
      <div className="logos">
        <a
          href="https://github.com/oztrkomer09"
          target="blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/oztrkomer009/"
          target="blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-linkedin"></i>
        </a>
        <a
          href="https://www.instagram.com/oztrkomer009/?hl=tr"
          target="blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-instagram"></i>
        </a>
      </div>
      <div className="info">
        <h2>OMER FARUK OZTURK ™</h2>
        <p>
          <i>Sticky Notes app made with React.JS</i>
        </p>
      </div>
    </div>
  );
};

export default FootBar;
