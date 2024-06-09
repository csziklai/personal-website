import React from 'react';
import "../styles/AboutMe.css";
import profilePic from "../assets/profilepic2.jpeg";

function AboutMe() { 
    return (
        <div className="about-me">
            <h1 className="about">About Me</h1>
            <h3 className="cassandra">Cassandra Sziklai</h3>
            <div className="container">
                <p className="info">
                    Hello! I'm a junior at Cornell University studying Computer Science who's
                    interested in pursuing software engineering. I have experience in UX design
                    as well, which is demonstrated in my case studies. I hope to one
                    day work on software with an impact. Feel free to email me at cnsziklai@gmail.com.
                </p>
                <img className="me" src={profilePic} alt="Cassandra Sziklai" />
            </div>

            <h2>Skills</h2>
            <div className="skills-list">
                <ul>
                    <li>Java</li>
                    <li>Python</li>
                    <li>HTML/CSS</li>
                    <li>React</li>
                    <li>JavaScript</li>
                </ul>
                <ul>
                    <li>Figma</li>
                    <li>Adobe XD</li>
                    <li>LaTeX</li>
                    <li>Handlebars.js</li>
                    <li>MS Office Applications</li>
                </ul>
            </div>

        </div>);
}

export default AboutMe;