import React from "react";
import youpicked from "../images/youpicked.png";
import lifegame from "../assets/lifegame.png";

function Farming() {
  return (
    <div class="main">
      <h1 className="title">Farming Simulation Game</h1>
      <h3>Project Overview</h3>
      <p>This group project was done for CS 3110: Data Structures and Functional Programming.</p>
      <p>Project duration: September 2023 – December 2023</p>

      <img id="lifeg" src={lifegame} alt="life game start page" />
      <img src={youpicked} alt="screenshot of display showing that your career is mechanic" />
      <h4><strong>Skills:</strong> OCaml, OUnit testing</h4>
    </div>
  )
}

export default Farming;