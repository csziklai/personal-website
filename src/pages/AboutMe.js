import React from 'react';
import "../styles/AboutMe.css";
import profilePic from "../assets/profilepic2.jpeg";
import resume from "../assets/resume1_2025.pdf"

function AboutMe() { 
    return (
        <div className="about-me">
            <h1 className="about">About Me</h1>
            <h3 className="cassandra">Cassandra Sziklai</h3>
            <div className="container">
                <p className="info">
                Hello! I'm a senior at Cornell University studying Computer Science, passionate about software engineering, programming languages, and computer systems. I thrive on solving complex problems at the intersection of performance, efficiency, and scalability—whether it's optimizing low-level systems or refining high-level abstractions.
                <p>
                    <a href = {resume} target = "_blank" rel="noreferrer">View resume</a></p>
                </p>
                
                <img className="me" src={profilePic} alt="Cassandra Sziklai" />
            </div>

            <h2>Skills</h2>
            <div className="skills-list">
                <ul>
                    <li><strong>Programming languages:</strong> Python, Java, C++/C, OCaml, JavaScript, HTML/CSS</li>
                    <li><strong>Frameworks:</strong> Spring Boot, React.js, Java Persistence API (JPA), Maven, D3.js, Handlebars.js</li>
                    <li><strong>Tools:</strong> GitHub, Linux, SQL, LaTeX, Logism, Excel</li>
                    <li><strong>Misc: </strong>Systems Programming, Algorithm Optimization, Profiling & Benchmarking</li>

                </ul>
            </div>

        </div>);
}

export default AboutMe;