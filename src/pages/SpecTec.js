import React from "react";
import stlc from "../images/stlc.png";
import hero from "../images/typecheck.png";


function Spectec() {
  return (
    <div class="main">
      <h1 className="title">SpecTec Proof of Concept</h1>
      <h3>Project Overview</h3>
      <p>As part of the CS 4110: Programming Languages and Logics course, my 
        partner and I developed a type checker that ensures any program it 
        validates is well-typed and will not throw exceptions. Starting with 
        just the language interpreter and an empty file for the type checker, 
        we designed and implemented the type checker entirely from scratch. 
        This project provided a fascinating exploration into type systems and 
        significantly enhanced my understanding of them. </p>

      <p>Project duration: February 2024 - May 2024</p>
      <img src={hero} alt=""/>
      <img src={stlc} alt="screenshot of running type checker on sample program" />
      <p className= "caption">Output of running the type checker on a sample program</p>
      <h4><strong>Skills:</strong> SpecTec, formal semantics, LaTeX</h4>
    </div>
  )
}

export default Spectec;