import React from "react";
const Projects = () => {
  return (
    <div className="container">
      <div className="d-flex row justify-content-center">
        *Note - since Heroku no longer offers free website hosting, I am no
        longer able to host my past projects without a substantial amount of
        effort. I apologize for the inconvenience. The Hyperlinks will lead you
        to the github repository for the project.
        <div className="col-12 my-2 mx-2">
          <h3>Projects since 2021</h3>
        </div>
        <div className="col-12 col-xl-10 App rounded my-2 mx-2 p-2">
          <a href="https://www.npmjs.com/~jaegerscheel">
            <div className="btn btn col-12">My NPM Projects</div>
          </a>
          My projects since 2021 have mostly been private repositories, only
          available to other Scheels employees. These NPM packages are some
          examples of things I have been working on for the past few years. I
          have been maintaining, publishing, and constructing these packages for
          our future use. They span from simple dropdown components, to a
          template for making new applications, to generic functions to format,
          mutate, and guard values based on conditions we've found ourselves
          often running into. Since the components are only used on internally
          hosted applications, it wasn't a big deal to leave the code publicly
          available.
        </div>
        <div className="col-12 my-2 mx-2">
          <h3>Projects 2020-2021</h3>
        </div>
        <div className="col-12 col-xl-10 App rounded my-2 mx-2 p-2">
          <div className="btn col-12">GileadMD (Private Repository)</div>
          GileadMD was a hospital records system for clinics and small hospitals
          in zimbabwe. This was a passion project for me and my colleague,
          Clever Mukori. He has since pursued other business opportunities.
        </div>
        <div className="col-12 col-lg-5 App rounded my-2 mx-2 p-2">
          <a href="https://github.com/hunterEdward98/Practice-Manager">
            <div className="btn col-12">Practice Manager</div>
          </a>
          This was my final solo project for my time at EDA. After being added
          as an organization by the site owner, a team could use this tool to
          track their swim times and improvement. Depending on their access
          level, it also included features to add, edit, or delete times,
          swimmers, sets, and users. A Site owner could also add and delete
          organizations from the page.
        </div>
        <div className="col-12 col-lg-5 App rounded my-2 mx-2 p-2">
          <div>
            <a href="https://github.com/hunterEdward98/60-word-race">
              <div className="btn col-12">Typing game</div>
            </a>
          </div>
          <div>
            This application was the first major application I made using React.
            It gave a list of 60 words, and started timing the user when they
            begin to type. I built this application to improve my own typing
            speed in a competitive manner
          </div>
        </div>
        <a href="https://github.com/hunterEdward98">
          <div className="btn col-12 h3">SEE MORE ON MY GITHUB</div>
        </a>
      </div>
    </div>
  );
};
export default Projects;
