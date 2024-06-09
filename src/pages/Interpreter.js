import React from "react";
import youpicked from "../images/youpicked.png";
import lifegame from "../assets/lifegame.png";

function Interpreter() {
  return (
    <div class="main">
      <h1 className="title">RML Interpreter</h1>
      <h3>Project Overview</h3>
      <p>This project was done for CS 3110: Data Structures and Functional Programming.</p>
      <p>Project duration: November 2023 – December 2023</p>

      <img id="lifeg" src={lifegame} alt="life game start page" />
      <img src={youpicked} alt="screenshot of display showing that your career is mechanic" />
      <h4><strong>Skills:</strong> OCaml, interpreters, formal semantics</h4>
    </div>
  )
}

export default Interpreter;