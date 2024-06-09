import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/footer.css";

function Footer() {
    return <div className="footer">
        <div className="socialMedia"> 
            <a href="https://www.linkedin.com/in/cassandra-sziklai/" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
            <a href="https://github.com/csziklai" target="_blank" rel="noreferrer"><GitHubIcon /></a>
        </div>
        <p> &copy; 2023 Cassandra Sziklai </p>
    </div>;
}

export default Footer;