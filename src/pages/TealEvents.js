import React from "react";
import te11 from "../images/te1-1.png";
import te12 from "../images/te1-2.png";
import te13 from "../images/te1-3.png";
import te14 from "../images/te1-4.png";
import te2 from "../images/te2.png";
import te31 from "../images/te3-1.png";
import arrow from "../images/arrow.png";
import te42 from "../images/te4-2.png";
import te51 from "../images/te5-1.png";
import te52 from "../images/te5-2.png";

function TealEvents() {
    return (
        <div className="main">
            <h1 class="title">TealEvents</h1>
            <h3>Project Overview</h3>
            <p>TealEvents is a fictional app that allows users to book venues for special occasions. It targets users whose job may include the logistics of planning and coordinating events, as well as everyday people who would like to make quick and simple reservations online.</p>
            <p>Project duration: June 2022 - July 2022</p>
        
            <h3>My Contributions</h3>
            <p>As a UX design student, my role was to design the app from conception to delivery. As such, my responsibilities included conducting interviews, paper and digital wireframing, low and high-fidelity prototyping, conducting usability studies, accounting for accessibility, and iterating on designs.</p>
        
            <div class="twin-img" id="hero-big">
                <img src={te11} class="quad" alt=""/>
                <img src={te12} class="quad" alt=""/>
                <img src={te13} class="quad" alt=""/>
                <img src={te14} class="quad" alt=""/>
            </div>
        
            <div class="twin-img phone-img" id="hero-small">
                <img src={te11} class="quad" alt=""/>
                <img src={te12} class="quad" alt=""/>
            </div>
            <h3>The Problem</h3>
            <p>Busy workers are tight on the time it takes to book a venue and do the requisite research before making a decision.</p>
        
            <h3>The Goal</h3>
            <p>To design an app that allows users to find all pertinent information about potential venues in one place and easily book that venue from there.</p>
        
            <h2>Design Process</h2>
            <h3>Research</h3>
            <p>Initially, I had intended this app to allow users to book reservations at restaurants without having to call over the phone. However, as I went through the initial stages of the design process, I found it would be more valuable to design an app that features venues for special occasions.</p>
            <p>Participants from the user interviews liked the idea of an app that could simplify the venue booking process. They expressed the potential usefulness of an app with all the relevant information about the venue and the ability to book it in one place.</p>
            <p>Based on these findings, the following user persona was created:</p>
        
            <img src={te2} class="single-img" alt="user persona"/>
        
            <h3>Designing and Refining</h3>
            <p>As this was my first UX design project, feedback from the usability study really helped me see from the user’s point of view. When designing the wireframes, certain things that I saw as clear from my perspective, having an idea in my head how the final would look like, were not clear to users in the low-fidelity prototype. For example, two key findings were that users wanted more context when opening the app and that they wanted clearer labelling.</p>
        
            <div class="twin-img">
                <img src={te31} class="phone" alt="wireframe of home page" />
                <img src={arrow} class="arrow" alt="arrow icon" />
                <img src={te11} class="phone" alt="mockup of home page" />
            </div>
            <p class="caption">The first iteration of the homepage (left) and the first mockup of the homepage after the usability study (right).</p>
        
            <p>Beginning with my first draft of mockups, I knew I wanted a design that was classy and sophisticated, given the scope of the app i.e., usually the events that venues are booked for are fancy events, such as weddings and celebrations. I tried to achieve this through choice of font, color, and a simple, refined layout.</p>
            <p>However, in some ways my initial designs were too simple. I found that users needed more features that helped them find the right venue. Additionally, they wanted a place to write special requests to venue owners, and were concerned about all relevant and necessary information about a venue being listed before they booked.</p>
            <p>To address the first of these problems, I decided I needed to come up with a feature that allows users to view venues by category. After all, the same venue that is used for a wedding may not work for a bar mitzvah! The solution I settled on was a horizontal scrolling carousel (see below).</p>
            <p>On the booking flow, before the payment page, I added on a text box where users could write in any special requests or additional notes they had.</p>
        
            <div class="twin-img">
                <figure>
                    <img src={te11} class="phone" alt="homepage"/>
                    <figcaption><p class="caption">Users can browse venues by the type of event they are usually booked for, narrowing down the likely overwhelming amount of options.</p></figcaption>
                </figure>
                <figure>
                    <img src={te42} class="phone" alt="additional info screen" />
                    <figcaption><p class="caption">The additional screen added to the venue booking flow, before payment and after choosing the date and time.</p></figcaption>
                </figure>
            </div>
            <p>Iterating on initial designs, I added the venue’s address and contact information directly below the venue’s name since they should be one of the first things the user reads. Additionally, I added a button that would show the venue’s availability, that way users could know before deciding to book.</p>
        
            <div class="twin-img">
                <figure>
                    <img src={te51} class="phone" alt="venue wireframe"/>
                    <figcaption><p class="caption">The first version of the venue information page</p></figcaption>
                </figure>
                <img src={arrow} class="arrow" alt="arrow icon" />
                <figure>
                    <img src={te52} class="phone" alt="mockup of venue"/>
                    <figcaption><p class="caption">Final version</p></figcaption>
                </figure>
            </div>
        
            <h3>Takeaways</h3>
            <p>Ultimately, if this were a real app, I would have liked to do more rounds of testing to ensure the app meets all users’ needs. For success metrics, I would pay attention to the number of downloads, the conversion rate, and user reviews. A participant from the usability study had commented that “The app was easy to use! I think this is a really useful app that I would like to have.”</p>
            <p>From this project, I learned there is much more to designing an app than just the aesthetic layout. So much research goes into making sure users’ needs are met and the app is easy to use. Making sure an app looks ‘aesthetically pleasing’ is just scratching the surface.</p>
            <p>View the TealEvents <a href="https://www.figma.com/proto/pMjPQH9cstHPj3zs2vOuEx/my-app-wireframes?node-id=131-71&scaling=scale-down&page-id=129%3A11&starting-point-node-id=149%3A54" target="_blank" rel="noreferrer">high-fidelity prototype</a>.
        
                For further information and more visuals, check out the <a href="https://docs.google.com/presentation/d/1JCav6aR5n7AmQBq817lpKZzI4r6a575G-L3ZZw45vg0/edit#slide=id.p" target="_blank" rel="noreferrer">TealEvents slide deck</a>.</p>

        </div>
    )
}

export default TealEvents;