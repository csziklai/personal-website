import React from "react";
import spec from "../images/spectec.png";
import doc from "../assets/imp_output_final.pdf";


function Spectec() {
  return (
    <div class="main">
      <h1 className="title">SpecTec Proof of Concept</h1>
      <h3>Project Overview</h3>
      <p>SpectTec is a DSL originally developed for the specification of WebAssembly. 
        In this research project done under Professor Nate Foster's NetLab, I used 
        SpecTec to formalize a mini-language called imp. This project served as 
        a proof of concept for SpecTec, allowing me to familiarize myself with 
        this new tool and explore its potential for formalizing other languages.  
        This involved learning the foundations of SpecTec from available documentation. 
        The code that I wrote, along with corresponding Latex anchors, generated 
        a PDF formal specification of the syntax and semantics of imp. View the 
        <a href = {doc} target = "_blank" rel="noreferrer"> formal semantics document </a>
        generated from SpecTec.</p>

      <p>
      Programming language formalization is very important to ensure correctness, 
      allowing us to reason precisely about the behavior of programs. Users of 
      the language can benefit greatly from a complete and precise specification. 
      While SpecTec was originally developed to formalize WebAssembly, I have 
      shown that it can be used for other languages as well. Such a tool can 
      prove highly useful for writing language formalizations once one has adopted it.
      </p>
      

      <p>Project duration: February 2024 - May 2024</p>
      <img src={spec} alt="diagram overview of Wasm SpecTec" />
      <p className= "caption">Diagram overview of Wasm SpecTec</p>
      
      <h4><strong>Skills:</strong> SpecTec, formal semantics, LaTeX</h4>
    </div>
  )
}

export default Spectec;