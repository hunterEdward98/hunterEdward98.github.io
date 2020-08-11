import React from "react";
const Projects = () => {
  return (
    <div className="container">
      <div className="d-flex row justify-content-center">
        <div className="col-12 h3">Current Projects</div>
        <div className="col-12 col-xl-10 App rounded my-2 mx-2 p-2">
          <a href="http://GileadMd.com">
            <div className="btn col-12">GleadMD</div>
          </a>
          GileadMD is a hospital records system for clinics and small hospitals
          in zimbabwe. Founded by Clever Mukori, we strive to consistently
          improve our product by actively taking feedback from our users
        </div>
        <div className="col-12 my-2 mx-2">
          <h3>Projects 2020</h3>
        </div>
        <div className="col-12 col-lg-5 App rounded my-2 mx-2 p-2">
          <a href="https://immense-ridge-24952.herokuapp.com/#/sign-in">
            <div className="btn col-12">Practice Manager 2020</div>
          </a>
          This was my final solo project for my time at EDA. After being added
          as an organization by the site owner, a team can use this tool to
          track their swim times and improvement. Depending on their access
          level, it also includes features to add, edit, or delete times,
          swimmers, sets, and users. A Site owner can also add and delete
          organizations from the page.
        </div>
        <div className="col-12 col-lg-5 App rounded my-2 mx-2 p-2">
          <div>
            <a href="https://pure-lowlands-34055.herokuapp.com/">
              <div className="btn col-12">Typing game</div>
            </a>
          </div>
          <div>
            This application was the first major application I made using React.
            It gives a list of 15 words, and starts timing the user when they
            begin to type. I built this application to improve my own typing
            speed in a competitive manner
          </div>
        </div>
        <div className="col-12 col-xl-5 App rounded my-2 mx-2 p-2">
          <a href="https://immense-ridge-24952.herokuapp.com/#/sign-in">
            <div className="btn col-12">Task Manager</div>
          </a>
          This was my final jquery app, to show that I knew how to write a full
          stack Webapp using jquery. A user can add a task with a deadline and
          view the status of their current tasks
        </div>
        <div className="col-12 col-xl-5 App rounded my-2 mx-2 p-2">
          <div>
            <a href="https://hunteredward98-simple-calc.herokuapp.com/">
              <div className="btn col-12">Calculator App</div>
            </a>
          </div>
          A calculator app I made with jquery. All number keys are bound to
          their values.
        </div>{" "}
        <div className="col-12 col-xl-10 App rounded p-2">
          <a href="https://github.com/hunterEdward98">
            <div className="btn col-12 h3">SEE MORE ON MY GITHUB</div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Projects;
