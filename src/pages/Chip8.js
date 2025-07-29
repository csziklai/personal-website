import React from "react";
import chip81 from "../images/chip81.png";
import chip82 from "../images/chip82.png";
import chip83 from "../images/chip83.png";

function Chip8() {
    return (
        <div className="main">
            <h1 className="title">Chip-8 Emulator</h1>
            <h3>Project Overview</h3>
            <p>
                This Chip-8 emulator is a simple virtual 
                machine that runs programs written in the Chip-8 programming language. 
                Chip-8 was originally designed in the 1970s for use on early microcomputers, 
                for simple games and applications. This emulator allows you to run such
                programs on a modern computer, providing a way to experience
                retro computing and gaming. This project was imspired by a previous
                project I had done for a class, where I coded a RISC-V interpreter, and 
                my general affinity for interpreters and emulators.
            </p>
            <h3>Technical Highlights</h3>
            <p> This project was written in C++ and made use of the GLUT Library
                for graphics rendering.
            </p>
            <img class="smaller_img" src={chip81} alt="Chip-8 emulator pong" />
            <img class="smaller_img" src={chip82} alt="Chip-8 emulator guess" />
            <img class="smaller_img" src={chip83} alt="Chip-8 emulator particle" />
            <p className="caption">Screenshots of Chip-8 programs: Pong, Guess, and Particles</p>

            <h3>Takeaway</h3>
            <p>
                Building this emulator was a fun and educational experience, 
                allowing me to delve into low-level programming concepts such as memory management, 
                instruction decoding, and graphics rendering.
            </p>
            <p><strong>Skills: </strong>C++, GLUT</p>
        </div>
    );
}


export default Chip8;
    
  