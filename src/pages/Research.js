import React from "react";
import meandposter from "../images/meandposter.jpg";
import poster2 from "../images/IMG_0879.PNG";
import doc from "../assets/sziklai_final_poster.pdf";


function Research() {
  return (
    <div class="main">
      <h1 className="title">Summer Research: A DSL for Packet Scheduling</h1>
      <h3>Project Overview</h3>
      <p>This summer I was a student researcher as part of the Bowers Undergraduate 
        Research Program (BURE), under <a href="https://capra.cs.cornell.edu/" target="_blank" rel="noreferrer">Capra Lab</a> headed 
        by Professor Adrian Sampson. Building off of <a href="https://dl.acm.org/doi/10.1145/3622845" target="_blank" rel="noreferrer">previous work</a> of
        using PIFO trees to allow for programmable packet scheduling, our team 
        sought to develop the DSL that targets these PIFO trees in hardware.
        </p>
    <h3>Background</h3>
    <p>
    In our lab, we use <a href="https://calyxir.org/" target="_blank" rel="noreferrer">Calyx</a>, 
    an intermediate language that takes high level languages and compiles them 
    down to hardware description languages (HDLs). In packet scheduling, the 
    scheduler, which does the work of deciding the order packets are emitted, lives 
    on the hardware, specifically on the FPGA portion of a SmartNIC. In order to 
    operate efficiently at line rate, the hardware can only support one topology 
    of tree, for example, a binary-branching tree. However, the user would like 
    to program against a wide variety of topologies. Through compilation, we want 
    to compile from this desired tree to the tree that the hardware supports. This 
    last part has been done via <em>Formal Abstractions</em>. 
    </p>
    <h3>My Work</h3>
    <p>
    The first half of my summer was spent implementing work conserving policies in Calyx, specifically round robin and strict. Round robin refers to the policy of letting each flow take its turn, going from one to the next in round robin fashion. Round robin queues are PIFOs generalized to n flows that operate in a work conserving round-robin fashion. That is, if a flow is silent when it is its turn, that flow simply skips its turn and the next flow is offered service.
<p>
Internally, it operates n subqueues. It takes in a list `boundaries` that must be of length n, using which the client can divide the incoming traffic into n flows. For example, if n = 3 and the client passes boundaries [133, 266, 400], packets will be divided into three flows according to the intervals: [0, 133], [134, 266], [267, 400].
</p>
<ul>
<li>At push, we check the boundaries list to determine which flow to push to. Take the boundaries example given earlier, [133, 266, 400]. If we push the value 89, it will, under the hood, be pushed into subqueue 0 because 0 &lt;= 89 &lt;= 133, and 305 will be pushed into subqueue 2 since 266 &lt;= 305 &lt;= 400. </li>
<li>The program maintains a hot pointer that starts off at 0, meaning the next subqueue to pop from is queue 0. At pop we first try to pop from hot. If this succeeds, great. If it fails, we increment hot and therefore continue to check all other flows in round robin fashion.</li>
</ul>
The source code is available in <a href="https://github.com/calyxir/calyx/blob/main/calyx-py/test/correctness/queues/strict_and_rr_queues/gen_strict_or_rr.py" target="_blank" rel="noreferrer">gen_strict_or_rr.py</a>, which takes as arguments n, boundaries, and handles to the subqueues it must administer. It also takes a boolean parameter round_robin, which, if true, results in the generation of a round-robin queue.
<p>
Strict queues support n flows as well, but instead, flows have a strict order of priority and this which determines popping order. That is, the second-highest priority subqueue will only be allowed to pop if the highest priority subqueue is empty. If the higher-priority flow get pushed to in the interim, the next call to pop will again try to pop from the highest priority flow.
</p>
<p>
The second part I spent developing Rio, our domain specific language (DSL). I used ocamllex and menhir to write the lexer and parser, respectively. In addition, I wrote the AST and a program to check for well-formedness. One of the main reasons I had been interested in working for this lab was because of its focus on Programming Languages (PL). Though I had written an interpreter before, writing a lexer and parser were new to me. It was an interesting challenge, and now I can say that I have a quite a robust understanding of how a new programming language is created. What remains to be seen is compilation. For the big picture, we eventually want to see programs written in Rio compiled down to Calyx, so that the user's desired policies can be run on the hardware.
</p>

    </p>
    <h3>Takeaways</h3>
    <p>
    This was a very educational and applicable summer. Besides learning Calyx and how to write lexers and parsers, I became comfortable with using git. Before it had always slightly scared me, with it's confusing error messages and dreaded merge conflicts. Many pull requests and merges later, I can say that I am competent and confident using git. Additionally, I learned about getting stuck and figuring out large problems on my own. Of course I had some experience with this with coursework and personal projects, but it is a whole other beast in research land. On more than one occasion I was stuck for a lot longer than I would have liked. Through this, I developed my resilience and patience, so that now even when I get stuck on features of a personal project, it doesn't feel so bad. I know that I’ll be able to figure it out eventually if I keep chipping away at it, and if not, it's not the end of the world. But that's a very small percentage of the time.
    </p>
    <p>
    I also gave my first poster presentation at the end of summer research symposium, which helped solidify my communication skills and ability to compactly explain my research. I was grateful to all who attended, and it was nice to reflect back on my summer. Shoutout to Adrian Sampson for choosing me for this opportunity, Anshuman Mohan for coming up with this project and guiding me along the way. I plan to continue this research into the semester.
    </p>

      <p>Project duration: June 2024 - August 2024</p>
      <p><a href="https://github.com/calyxir/calyx" target="_blank" rel="noreferrer">View the Calyx repo on GitHub</a>.</p>
      <p><a href="https://github.com/cucapra/packet-scheduling" target="_blank" rel="noreferrer">View the Packet Scheduling repo on GitHub</a>.</p>
      <img src={meandposter} alt="Author standing with poster" style={{ width: "40%" }} />
      <img src={poster2} alt="Author and Anshuman Mohan with poster" style={{ width: "40%" }} />
      <p className= "caption">In front of my poster (left). With graduate student Anshuman Mohan (right).</p>
      <a href = {doc} target = "_blank" rel="noreferrer">View the poster</a>
      
    </div>
  )
}

export default Research;