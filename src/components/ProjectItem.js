import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProjectItem({ image, name, path }) {
    const navigate = useNavigate();
    return (
        <div className="projectItem" onClick={() => {navigate(path)}}>
            <div style={{backgroundImage: `url(${image})` }} className="bgImage" />
            <h1 className="projectCard"> {name} </h1>
            
        </div>);
}

export default ProjectItem;