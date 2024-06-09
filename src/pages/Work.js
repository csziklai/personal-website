import React from 'react';
import "../styles/Work.css";
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from "../helpers/ProjectList";

function Work() {
    return (
    <div id="work">
        
        <h1 className="title">My Work</h1>
        <div id="projectList">
            {ProjectList.map((project) => {
                return <ProjectItem name={project.name} image={project.image} path={project.path}/>;
            }
            )}
        </div>

    </div>);
}

export default Work;
