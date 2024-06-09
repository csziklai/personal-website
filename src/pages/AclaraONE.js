import React from "react";
import ao1 from "../images/ao1.png";
import cutcurb from "../images/cutcurb.jpeg";
import ao2 from "../images/ao2.png";
import ao3 from "../images/ao3.png";
import ao4 from "../images/ao4.png";
import ao5 from "../images/ao5.png";
import ao6 from "../images/ao6.png";
import ao7 from "../images/ao7.png";
import ao8 from "../images/ao8.png";
import groupic from "../images/group-pic.JPG";
import "../styles/ProjectPage.css";

function AclaraONE() {
    return (
        <div class="main">
            <h1 className="title">AclaraONE Accessibility Audit</h1>
            <h3>Project Overview</h3>
            <p>AclaraONE is a software platform used by water, gas, and electric utility companies to operate their distribution networks, manage data around consumption and meter events, and more. Typical users include network operators, billing specialists, and customer service representatives.</p>
            <p>Project duration: May 2023 – August 2023</p>

            <h3>My Contributions</h3>
            <p>As a UX design intern at Hubbell, my task was to perform an accessibility audit of AclaraONE, complete with recommendations. As such, my responsibilities included familiarizing myself with WCAG guidelines, assistive technology, and accessibility best practices, designing potential solutions in Adobe Xd, synthesizing and logging the issues onto Azure DevOps for developers to review, and creating PowerPoint presentations to share my work with key stakeholders.</p>
            <img src={ao1} alt="Mockup of AclaraONE homescreen" />
            <h3>The Problem</h3>
            <p>AclaraONE is not currently WCAG AA accessibility compliant. User groups ranging from those with low vision to those who rely on assistive technology may have a difficult time using AclaraONE. Additionally, not being accessible means the company misses out on RFPs (requests for proposals) from the public sector.</p>
            <h3>The Goal</h3>
            <p>To ensure that users of all abilities can use AclaraONE. The completion of the audit is the first step to becoming accessibility compliant. I worked to clearly identify and communicate the key compliance issues and provide recommendations on how to fix them.</p>

            <h3>Accessibility: the basics</h3>
            <p>Accessibility is about ensuring that there are no barriers preventing those with disabilities from accessing web and software services. By designing for those with permanent disabilities, we end up helping others as well, including those with temporary and situational disabilities. For example, a solution that assists those who are deaf, will in turn end up helping those who have an ear infection (temporary) and bartenders in a noisy environment (situational). </p>
            <p>In practice, web accessibility often involves designing to be compatible with assistive technologies. One such technology are screen readers, which rely on form labels, proper HTML semantics, and alt text. Keyboard only navigation, which is when a user relies solely on the keyboard to navigate, is commonly practiced by screen reader users. To support this mode of navigation, it is crucial to have a logical focus order, a skip navigation option, and make all elements accessible with the keyboard.
                The main guidelines in the U.S. are the Web Content Accessibility Guidelines (WCAG) and Section 508. I focused on the former in this project.</p>
            <h3>Why Accessibility?</h3>
            <p>Being accessible is a win for all, not only for those who are disabled, but everyone ends up benefiting as well. This can be illustrated by the cut curb effect. Cut curbs were initially designed to allow those in wheelchairs to cross the street. However, as shown in the graphic below, they ended up making life better for everyone, including those on bicycles and those pushing a dolly or a stroller.</p>
            <img className="cutcurb" src={cutcurb} alt="graphic of people using a cut curb" />
            <p>This concept can be seen applied to the web and technology, for example in closed captioning. Originally designed for those who were deaf, it also benefits those in any situation when it’s hard to hear or understand what is being said on screen.</p>

            <h3>Audit Process</h3>
            <p>Initially overwhelmed by the complexity of the software application, I knew having organization was key. Therefore, I decided to adopt a screen-by-screen approach, performing the same routine of evaluations for each page. I would use the WAVE browser extension tool, manually check for keyboard-only accessibility, check for reflow, and keep an eye out for any other issues.</p>
            <img src={ao2} alt="screenshot of a webpage with WAVE applied to it" />
            <p>In total, I reviewed 181 screens across their four major product lines: MDM, RF Electric, RF Water & Gas, and TWACS. This resulted in 66 “bugs” (accessibility issues) being logged into Azure DevOps, where common issues across multiple screens were grouped together under one “bug”.</p>
            <img src={ao3} alt="" />

            <h3>Summary of Findings</h3>
            <p>Overall, I found that roughly half of the WCAG guidelines were met by AclaraONE, a quarter were not applicable, and another quarter were not in compliance.</p>
            <img src={ao4}alt="pie chart summarizing WCAG guidelines compliance" />

            <p>The following are a summary of the highlights of the audit:</p>
            <h4>Missing form labels</h4>
            <p>The most common instance of missing form labels was in the search bar. This signifies that a form control, the text input box in this case, does not have a corresponding label. This may affect screen readers’ ability to determine the purpose of the form. To make sure it’s clear, the recommendation was to use the label tag to associate the “search” text with its respective form control, the search bar.</p>
            <img src={ao5} alt="screenshot of search bar" />

            <h4>Low contrast</h4>
            <p>Another common issue was low color contrast. I used WAVE and a color contrast checker to check that the minimum ratio for AA compliance was met in text, buttons, and icons. This is where the redesign portion of the project occurred. For example, I redesigned the Total Consumption page below to meet AA color contrast standards.</p>
            <img src={ao6} alt="the Total Consumption page after color contrast redesign" />
            <p className="caption">The Total Consumption page after color contrast redesign</p>

            <h4>Focus order</h4>
            <p>I observed that the navigation order of links, form elements, and any other elements on the page followed a logical and intuitive order of focus.</p>

            <h4>Keyboard skips over certain elements</h4>
            <p>I found that when using keyboard-only navigation, certain elements would get skipped over, and thus be rendered inaccessible with the keyboard. A prominent example is the links, edit/delete icons, and checkboxes in the tables.</p>
            <img src={ao7} alt="screenshot of a table in AclaraONE" />
            <p className="caption">The columns under Device ID, Edit, and Delete would be inaccessible to keyboard-only users. The numbers in pink indicate a suggested focus order.</p>
            
            <h4>No skip navigation</h4>
            <p>Another issue was the absence of a skip navigation. Thus, for keyboard-only users, there is no way to skip over all the navigation links, which can be frustrating and tedious. Especially, for an application with extensive navigation, it is important to have this feature. It can even by coded so that it’s not visually perceptible to non-assistive technology users, erasing any concerns of visual aesthetics or limited screen real estate.</p>

            <h4>Orphaned form labels</h4>
            <p>A common issue throughout almost all pages were orphaned form labels. This occurs when a form label is present, but not properly associated with a form control. In the example below, the label “Name” exists, but is not associated with the text box, which is the form control in this case. To fix this, associate the label text with the corresponding form control, or if it is a static form, then the corresponding text.</p>
            <img src={ao8} alt="screenshot of form labels and form inputs" />

            <h3>Takeaways</h3>
            <p>This summer proved to be a highly educational experience. I took what I'd learned about accessibility practices and saw how they fit into the bigger picture of real-world accessibility compliance.</p>
            <p>Additionally, I was able to get a glimpse of the inner workings of a company and how software teams, UX designers, and product managers work together to manage new features, updates, and bugs.</p>
            <p>I also learned the importance of not being afraid to ask questions. There were times when I was unsure of how to proceed with the project, but after talking with my boss, I had clearer direction and understanding. Overall, I’m grateful for this experience and what it has taught me. It was truly an educational summer.</p>

            <img src={groupic} alt="Aerial view of interns gathered outside near food trucks" />
            <p className="caption">Aerial shot from the summer social where interns from all locations met up.</p>
        </div>
    )
}

export default AclaraONE;