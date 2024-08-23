import React from "react";
import results from "../images/resultspage.png";
import searching from "../images/searching.png";
import addstudent from "../images/addstudent.png";


function FullStack() {
  return (
    <div class="main">
      <h1 className="title">Student Database App</h1>
      <h3>Project Overview</h3>
      <p>
      This was my first full-stack project, built using Spring Boot and React, for a student management database application such as those typically used by colleges and universities. The app allows users to add, delete, and search for students with a modern, clean, and simple user interface.
After teaching myself backend development, this project was an invaluable exercise in putting theory into practice. Along the way, I encountered and solved challenges like managing the stateful behavior of React, implementing CRUD operations securely with Spring Boot, and integrating a relational database.
    </p>
<h3>Technical Highlights</h3>
<ul>
    <li>Backend: Spring Boot with RESTful APIs, integrated with a MySQL database.</li>
    <li>Frontend: React with responsive design and state management using hooks.</li>
    <li>Architecture: Utilized the Model-View-Controller (MVC) pattern for a clear separation of concerns.</li>
</ul>

<h3>Conclusion</h3>
<p>Building this application helped me connect the dots between frontend, backend,
     and database management, providing a much clearer view of how everything fits 
     together in a full-stack system. There are still features I'd like to add to
     improve the user experience and make the app more powerful. For example, 
     keeping track of more data fields for each student, improving search, add editing capabilities, etc.
      Although there were moments of frustration and confusion, 
     it was very rewarding to see the final product take shape and function as intended.
</p>

      <p>Project duration: July 2024 - present</p>
      <img class="lifeg" src={results} alt="results page"  />
      <img src={searching} alt="after searching for student 'bob'" />
      <p className= "caption">Results page before and after searching</p>
      <img class="lifeg" src={addstudent} alt="add student page" />
      <p><strong>Skills: </strong>Spring Boot, React.js, MySQL, XAMMP, MUI, backend, frontend</p>

      
    </div>
  )
}

export default FullStack;