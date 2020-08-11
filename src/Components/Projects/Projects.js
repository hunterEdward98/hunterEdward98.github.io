import React from "react";
const Projects = () => {
  return (
    <div>
      <div className="container">
        <table className="table table-dark">
          <tbody>
            <tr>
              <th>EDA Projects 2020</th>
              <th>
                <small>
                  - All EDA projects are deployed via heroku. please be patient
                  while the program loads -
                </small>
              </th>
            </tr>
            <tr>
              <td>
                <a href="https://immense-ridge-24952.herokuapp.com/#/sign-in">
                  Practice Manager 2020
                </a>
              </td>
              <td>
                This was my final solo project for my time at EDA. After being
                added as an organization by the site owner, a team can use this
                tool to track their swim times and improvement. Depending on
                their access level, it also includes features to add, edit, or
                delete times, swimmers, sets, and users. A Site owner can also
                add and delete organizations from the page.
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://pure-lowlands-34056.herokuapp.com/">
                  Typing game
                </a>
              </td>
              <td>
                This application the first major application I made using React.
                It gives a list of words, and starts timing the user when they
                begin to type. I built this application to improve my own typing
                speed in a competitive manner
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://immense-ridge-24952.herokuapp.com/#/sign-in">
                  Task Manager
                </a>
              </td>
              <td>
                This was my final jquery app, to show that I knew how to write a
                full stack Webapp using jquery. A user can add a task with a
                deadline and view the status of their current tasks
              </td>
            </tr>
            <tr>
              <td>
                <a href="https://hunteredward98-simple-calc.herokuapp.com/">
                  Calculator App
                </a>
              </td>
              <td>A calculator app I made with jquery</td>
            </tr>
          </tbody>
        </table>
        <table className="table table-dark">
          <tbody>
            <tr>
              <th>Python Projects 2019-2020</th>
            </tr>
            <tr>
              <td>
                <a href="/projects/budget_project.zip">Budget Project</a>
              </td>
              <td>this was my first in-depth project in python.</td>
            </tr>
            <tr>
              <td>
                <a href="/projects/grocery.zip">Grocery List Project</a>
              </td>
              <td>
                When I was done with my Budget Project, I worked on this until
                my free week of learning was over with CodeAcademy.
              </td>
            </tr>
            <tr>
              <td>
                <a href="/projects/MoneyIOweM_D.zip">Debt Tracking Project</a>
              </td>
              <td>
                While learning Web Development in EDA, I began to accumulate
                some debt to my parents. I decided to make this project to track
                that debt
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Projects;
