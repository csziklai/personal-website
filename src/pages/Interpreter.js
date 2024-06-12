import React from "react";
import rml from "../images/rml1.png";


function Interpreter() {
  return (
    <div class="main">
      <h1 className="title">RML Interpreter</h1>
      <h3>Project Overview</h3>
      <p>This individual project was done for CS 3110: Data Structures and Functional Programming.
      Given a document detailing the syntax and semantics of a language called RML, which is essentially a baby version of OCaml, I was tasked with writing the interpreter for the language. I learned how to read a formal semantics document and understand the concepts of big step semantics, stores, configurations, etc. </p>

      <p>I found this project highly rewarding and interesting. It got me interested in the area of programming languages. As someone still figuring out what areas of Computer Science I wanted to focus on, this project was in a way, a catalyst. The following semester, I subsequently enrolled in CS 4110: Programming Languages and Logics and began research in the field.
      </p>
      <p>Project duration: November 2023 – December 2023</p>

      <img src={rml} alt="" />
      <h4><strong>Skills:</strong> OCaml, interpreters, formal semantics</h4>
    </div>
  )
}

export default Interpreter;