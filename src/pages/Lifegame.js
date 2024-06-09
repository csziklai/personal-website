import React from "react";
import youpicked from "../images/youpicked.png";
import lifegame from "../assets/lifegame.png";

function Lifegame() {
    return (
        <div class="main">
            <h1 className="title">life game</h1>
            <h3>Project Overview</h3>
            <p>Life game is a personal project inspired by the board games I loved playing as a kid. Users make the choice of going to college or starting a career, draw cards for their career, and roll a simulated dice to land on fun outcomes. I took a page from some of my favorite sit coms and romantic comedies for the “spaces” that a player can land on.</p>
            <p>Project duration: June 2023 – August 2023</p>

            <p>Go ahead and play for yourself, it'll only take a few minutes! <a href="https://playlifegame.netlify.app/" target="_blank" rel="noreferrer">Play life game.</a></p>
            <img id="lifeg" src={lifegame} alt="life game start page" />
            <img src={youpicked} alt="screenshot of display showing that your career is mechanic" />
            <h4><strong>Skills:</strong> HTML, CSS, JavaScript, Handlebars.js</h4>
        </div>
    )
}

export default Lifegame;