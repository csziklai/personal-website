import React from "react";
import mm1 from "../images/mm1.png";
import mm21 from "../images/mm2-1.png";
import mm22 from "../images/mm2-2.png";
import mm3 from "../images/mm3.png";
import mm5 from "../images/mm5.png";
import mm6 from "../images/mm6.png";
import mm71 from "../images/mm7-1.png";
import mm72 from "../images/mm7-2.png";
import "../styles/ProjectPage.css";


function MentorMatcher() {
    return (
        <div class="main">
            <h1 class="title">Mentor Matcher</h1>
            <h3>Project Overview</h3>
            <p>Mentor Matcher is a fictional non-profit website that matches students to mentors in their targeted profession. We believe that every student should be provided with the information they need to succeed. The typical users are college or online certificate course students.</p>
                
            <p>Project duration: July 11, 2022 to July 31, 2022</p>

            <h3>My Contributions</h3>
            <p>As a UX design student, my role was to design the app from conception to delivery. As such, my responsibilities included conducting interviews, paper and digital wireframing, low and high-fidelity prototyping, conducting usability studies, accounting for accessibility, iterating on designs, and responsive design.</p>
            <img src={mm1} class="single-img outline" alt="Mentor Matcher home screen"/>

            <h3>The Problem</h3>
            <p>As a student, preparing for a future career can be stressful and confusing. Many have a hard time finding someone willing to mentor them. They don’t know where to look or who to ask.</p>
            
            <h3>The Goal</h3>
            <p>To create an easy-to-use website that provides students with mentors that fit their needs.</p>
            
            <div class="twin-img outline">
                <img src={mm21} class="vert-twin" alt="How it works"/>
                <img src={mm22} class="vert-twin" alt="Mentor request form"/>
            </div>

            <h2>Design Process</h2>
            <h3>Research</h3>
            <p>Many students expressed avid enthusiasm at the idea of a website that pairs you with a mentor. Many explained how it can be difficult connecting with someone in their desired profession, let alone working up the nerve to ask them to be their mentor. They felt like it was a lot to ask when they couldn’t give their mentor anything in return. What’s more, the vast majority believed that having a mentor would be an invaluable resource.

                ​
                
                Based on these findings, the following <bold>user persona</bold> was created:</p>
            <img src={mm3} class="single-img" alt="User persona"/>

            <h3>Designing and Refining</h3>
            <p>Adapting from the above user journey map, I considered other potential aspects that would be included in a complete version of the website. It was important to understand the context which my chosen task flow would take place in. I planned the <bold>information architecture</bold> of the Mentor Matcher website strategically to allow for ease of navigation.</p>
            <img src={mm5} class="single-img" alt="sitemap of information architecture"/>
            <p>As this was my second UX design project, the design process went a lot smoother than the first time. That’s not to say that there weren't lots of iterations and fine-tuning. Designing for a web screen proved a new challenge; with so much digital real estate it was sometimes hard to know what to do with it all!</p>
                
            <p>Even so, the usability study brought to my attention that the layout was too cramped. The margins were too small and there was not enough spacing, making it hard to read. I was able to grow my skills on Adobe XD as I went about fixing this issue. Since entire mobile and desktop versions were created, I picked up a lot of productivity tips and tricks along the way.</p>
                
            <p>One issue I noticed when previewing the mentor matches page was how the layout made it difficult to read about two mentors without scrolling. Not only that, but the page did not look optimized for a computer screen. Instead, it was as if I were designing for a large phone. In response to this realization, I made wider margins and I decreased the size of each mentor’s profile so that two mentors could fit on a page, making comparison easier.</p>

            <img src={mm6} class="single-img outline" alt="Mentor matcher mentor results list screenshot"/>
            <p>Initially, my idea was for users to fill out a simple questionnaire and then get a confirmation page telling them that they would soon get an email telling them who their mentor was. (This was based on my own experience of filling out a Google Form from my college to get paired with a mentor) However, some participants in the usability study expected to be able to choose their mentor, and not just be assigned one based on the survey.</p>​
                
            <p>I soon set to work on designing the additional screens that would make this possible. Users would now be able to choose a mentor from a list of matches. This would ensure greater user satisfaction by allowing for more successful matches.</p>
            
            <div class="twin-img2 outline">
                <img src={mm71} class="twin-left" alt="mentor profile computer view"/>
                <img src={mm72} class="twin-right" alt="mentor profile phone view"/>
            </div>
            <figcaption><p class="caption">The page which displays a potential mentor's profile (desktop and phone version). The user can read through all profiles before deciding on a mentor.</p></figcaption>

            <h3>Takeaways</h3>
            <p>My next steps would be to conduct follow up user testing on both the web and mobile versions of the site. Additionally, I would design the experience for potential mentors who want to sign up to be paired with a mentee.</p>
                
            <p>What I like about the idea of the Mentor Matcher website is that it connects students with mentors, an invaluable resource that I wish existed. I know I, and many study participants, could use a mentor to navigate the often complex and confusing path to getting that dream job.</p>
                
                
                
            <p>View the Mentor Matcher <a href="https://xd.adobe.com/view/9b2eea32-3ad3-47cd-86dd-04bcd7bf67e7-ce7d/?fullscreen&hints=off" target="_blank" rel="noreferrer">web high-fidelity prototype</a> and the <a href="https://xd.adobe.com/view/8b668f1f-4476-4c84-9bcd-9d4c58e83423-de35/?fullscreen&hints=off" target="_blank" rel="noreferrer">phone high-fidelity prototype</a>.
                
                For further information and more visuals, check out the <a href="https://docs.google.com/presentation/d/1dL0lupxtXApzS3EY8DQ7Hwg5YzAj0PwFwsHxdUXvIAI/edit?pli=1#slide=id.ge4c37861fa_0_354" target="_blank" rel="noreferrer">Mentor Matcher slide deck</a>.</p>
        </div>
    )
}

export default MentorMatcher;