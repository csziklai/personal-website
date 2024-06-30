import React from 'react';
import "../styles/AboutMe.css";
import profilePic from "../assets/profilepic2.jpeg";
import resume from "../assets/resume_june_2024.pdf"

function AboutMe() { 
    return (
        <div className="about-me">
            <h1 className="about">About Me</h1>
            <h3 className="cassandra">Cassandra Sziklai</h3>
            <div className="container">
                <p className="info">
                    Hello! I'm a senior at Cornell University studying Computer Science who's
                    interested in pursuing software engineering. I'm interested in
                    programming languages (PL) and computer organization/systems. I hope to one
                    day work on software with an impact. 
                    <p><a href = {resume} target = "_blank" rel="noreferrer">View my resume.</a></p>
                </p>
                
                <img className="me" src={profilePic} alt="Cassandra Sziklai" />
            </div>

            <h2>Skills</h2>
            <div className="skills-list">
                <ul>
                    <li>Java</li>
                    <li>Python</li>
                    <li>OCaml</li>
                    <li>HTML/CSS</li>
                    <li>C</li>
                    <li>React</li>
                    <li>JavaScript</li>
                </ul>
                <ul>
                    <li>GitHub</li>
                    <li>D3.js</li>
                    <li>Figma</li>
                    <li>Adobe XD</li>
                    <li>LaTeX</li>
                    <li>Logism</li>
                    <li>Excel</li>
                </ul>
            </div>

        </div>);
}

export default AboutMe;