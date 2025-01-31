import React from "react";
import before from "../images/before_decrypt.png";
import after from "../images/after_decrypt.png";



function Bignum() {
  return (
    <div class="main">
      <h1 className="title">Bignum Encryption & Decryption</h1>
      <h3><em>Optimizing High-Performance Arithmetic in C++: A Bignum Library and RSA Implementation</em></h3>
      <h3>Project Overview</h3>
      <p>
      This project focused on optimizing computational performance in C++ by implementing a custom Bignum class for arbitrary-precision arithmetic and an RSA encryption/decryption system. I implemented this project from scratch, as an assignment for CS 4414: System Programming following given requirements and expected functionality.
    </p>

<h3>Process</h3>
<p>
After initial implementation where the program was up and running for basic inputs, my work was far from done. The code was still very slow, especially for decryption. With the help of gprof, I was able to identify the most time was spent in my multiplication method. This turned out to be part of a larger problem with the division method, which made an unnecessary amount of calls to multiplication i.e., computing the same multiplications over and over. 
</p>
<p>
I fixed this by computing the multiples once in the beginning and storing them in a vector. Now instead of recomputing, I just iterate through the vector until I find that greatest multiple that is less than my remainder. This gave a massive speedup to my code (decrypt() was taking 10 minutes before and now runs in seconds!). This was a 120x speedup!
</p>

<div class="twin-img">
                <img src={before} class="vert-twin" alt="gprof output before"/>
                <img src={after} class="vert-twin" alt="gprof output after"/>
            </div>
<p className= "caption">Before and after memoization optimization of multiplicatin</p>
<p>
	There were a number of other optimizations I utilized, including the usage of const throughout to avoid unnecessary copying of large data as well as changing the algorithm for the “%” operator.

</p>
<h3>Key Takeaways</h3>
<p>
This project made me attuned to how performance-oriented programming is both a science and an art. Debugging computational inefficiencies requires persistence, a deep understanding of algorithmic trade-offs, and the willingness to refactor working code for scalability. Programming for large data brings on whole new challenges and requires a different kind of mindset.
</p>

      <p>Project duration: November 2024 - December 2024</p>

      <p><strong>Skills: </strong>C++, gprof, performance optimization, profiling & benchmarking, cryptography, arbitrary precision arithmetic</p>

      <p><a href="https://github.com/csziklai/Bignum" target="_blank" rel="noreferrer">View it on GitHub.</a></p>

    </div>
  )
}

export default Bignum;