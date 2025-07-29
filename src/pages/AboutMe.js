import React from 'react';
import "../styles/AboutMe.css";
import profilePic from "../assets/profilepic2.jpeg";
//import resume from "../assets/resume1_2025.pdf"

function AboutMe() { 
    return (
        <div className="about-me">
            <h1 className="about">About Me</h1>
            <h3 className="cassandra">Cassandra Sziklai</h3>
            <div className="container">
                <p className="info">
                I'm a recent computer science graduate of Cornell University, passionate about software engineering, programming languages, and computer systems. I thrive on solving complex problems at the intersection of performance, efficiency, and scalability—whether it's optimizing low-level systems or refining high-level abstractions.
                {/* <p>
                    <a href = {resume} target = "_blank" rel="noreferrer">View resume</a></p> */}
                    <p>You can reach me at cns58@cornell.edu.</p>
                </p>
                
                <img className="me" src={profilePic} alt="Cassandra Sziklai" />
            </div>

            <h2>Skills</h2>
            <div className="skills-list">
                <ul>
                    <li><strong>Programming languages:</strong> Python, Java, C++/C, OCaml, JavaScript, SQL, HTML/CSS</li>
                    <li><strong>Frameworks:</strong> Spring Boot, React.js, Java Persistence API, Maven, D3.js, Handlebars.js</li>
                    <li><strong>Tools:</strong> GitHub, Linux, Bash scripting, LaTeX, Excel</li>
                    <li><strong>Interests: </strong>Cooking, Running, Reselling clothing, Reading, Traveling</li>

                </ul>
            </div>

        </div>);
}

export default AboutMe;