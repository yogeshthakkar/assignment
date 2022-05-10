import React from "react";

function PersonalInfo(props) {
  let name = "Hi, I am Yogesh Thakkar,Software Engineer";
  let details = `  Having 3+ years of experience in react.js, node.js, express, javascript, sailsjs and express.js 
    • Strong working knowledge of development techniques and methodologies
    • Makes recommendations towards the development of new code or to reuse of existing code
    • Expertise in working with version control tools like GIT.
    • Experience working with Restful APIs via using ES6, HTML & CSS. Also having working experience with JSX.
    • Experience working with Material UI, form and custom and pre-defined validations library
    • Having knowledge with automated testing suites like Jest, Enzyme 
    • Discussed requirements with clients, proposing solutions, ensuring a pleasant user experience, maintaining databases and performing quality assurance. 
    • Good Problem solving, leadership, domain modelling, Design Patterns, Communication skills, quick learner and team player. `;
  return (
    <div className="flex justify-evenly mt-20">
      <div className="w-3/5 h-64 left-1">
        <div className="relative h-24 not-italic font-bold text-gray-900 leading-loose  font-Heebo">
          {name}
        </div>
        <div className="relative h-16 not-italic font-normal text-base leading-6 text-gray-900 font-Heebo">
          <ul>
            <li>
              Having 3+ years of experience in react.js, node.js, express,
              javascript, sailsjs and express.js
            </li>
            <li>
              Strong working knowledge of development techniques and
              methodologies
            </li>
            <li>
              Makes recommendations towards the development of new code or to
              reuse of existing code
            </li>
            <li>
              Good Problem solving, leadership, domain modelling, Design
              Patterns, Communication skills, quick learner and team player.
            </li>
          </ul>
        </div>
        <div
          className="relative w-48 h-12 bg-red-500 rounded-sm"
          style={{ margin: "3% 0%" }}
        >
          <button className="relative w-40 h-5 not-italic font-medium text-xl leading-7 text-white left-2 top-2 font-Heebo">
            Download Resume
          </button>
        </div>
      </div>
      <div className="relative w-64 h-64 mb-12">
        <img src="photo.jpg" style={{ borderRadius: "50%" }} />
      </div>
    </div>
  );
}

export default PersonalInfo;
