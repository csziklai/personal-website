import React from "react";
import risc from "../images/logism-f.png";
import p2 from "../assets/p2_designdoc.pdf";


function Type() {
  return (
    <div class="main">
      <h1 className="title">Type Checker for STLC</h1>
      <h3>Project Overview</h3>
      <p>As part of a project for CS 3410: Computer System Organization, I built
         a single-cycle RISC-V processor in Logism. After learning about RISC-V 
         in class, I was tasked with figuring out how to build it myself, including 
         devising the control flow and logic. The project necessitated independent 
         problem-solving and self-directed learning, making it overwhelming at 
         first. Though once all the parts came together, it was a rewarding 
         experience. This class piqued my interest in the domain of computer 
         systems and low-level programming. </p>

      <p>Project duration: February 2024 – March 2024</p>

      <img src={risc} alt="screenshot of RISC-V processor in Logism" />
      <a href = {p2} target = "_blank" rel="noreferrer">View detailed design document</a>
      <h4><strong>Skills:</strong> Logism, RISC-V, assembly language</h4>
    </div>
  )
}

export default Type;