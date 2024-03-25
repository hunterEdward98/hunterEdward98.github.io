import React from "react";
import Pdf from "./files/Hunter_Scheel_Resume.pdf";
export default function Resume() {
  return (
    <div>
      <div>
        <div className="content justify-content-center row my-4">
          <a
            href={Pdf}
            target="_blank"
            rel="noreferrer"
            className="container col-10 justify-content-center text-center"
          >
            {" "}
            <button className="col-12 btn btn-danger btn-lg">VIEW PDF</button>
          </a>
        </div>
        <div
          className="container my-4"
          style={{
            border: "1px groove #c0c0c0",
            backgroundColor: "white",
            color: "black",
          }}
        >
          <div
            className="my-2"
            style={{
              width: "100%",
              display: "flexbox",
              justifyContent: "stretch",
            }}
          >
            <div style={{ width: "50%", display: "inline-block" }}>
              <div className="h1">
                <b>Hunter Scheel</b>
              </div>
              <p>
                3207 23rd Ave S, Fargo, ND
                <br />
                hunter.scheel@outlook.com
                <br />
                (701)429-0007
              </p>
            </div>
            <div
              style={{
                width: "49%",
                display: "inline-block",
                textAlign: "right",
              }}
            >
              <br />
              <b>Linkedin:</b>{" "}
              <a
                style={{ color: "black" }}
                href="https://www.linkedin.com/in/hunter-e-scheel"
              >
                https://www.linkedin.com/in/hunter-e-scheel
              </a>
              <br />
              <b>Website: </b>
              <a
                style={{ color: "black" }}
                href="https://hunteredward98.github.io/"
              >
                https://hunteredward98.github.io/
              </a>
            </div>
          </div>
          <div className="justify-content-center text-center">
            <hr size={1} />
            <h3>Professional Summary</h3>
            <p>
              Ready to bring relevent knowledge and skills to any team.
              Well-versed in Team Building techniques. Excellent problem-solving
              and coding skills.
            </p>
            <hr size={1} />
            <h3>Skills</h3>
            <div
              style={{
                width: "100%",
                display: "inline-flex",
                justifyContent: "center",
              }}
            >
              <div
                className="mx-3"
                style={{ textAlign: "center", width: "50%" }}
              >
                TS/JS React, Redux, and Sagas,
                <br /> C# with Dotnet Core &amp; Dotnet Framework
                <br /> SQL with Postgres &amp; DB2
                <br />
                <i style={{ fontSize: 14, color: "navy" }}>Advanced</i>
                <br />
                <hr />
              </div>
              <div
                className="mx-3"
                style={{ textAlign: "center", width: "50%" }}
              >
                Java, jQuery, HTML, CSS, Python, and BASH
                <br />
                <i style={{ fontSize: 14, color: "navy" }}> Some Knowledge</i>
              </div>
              <br />
            </div>
            <div style={{ textAlign: "center", display: "inline" }}>
              <hr size={1} />
              <h3>Education</h3>
              <p />
            </div>
            <div style={{ textAlign: "left" }}>
              <ul style={{ listStyleType: "circle" }}>
                <li>
                  <h5>
                    Emerging Prairie Digital Academy:{" "}
                    <div style={{ fontSize: 14 }}>
                      <i>April 2020-August 2020</i>
                    </div>
                  </h5>
                  <ul style={{ listStyleType: "disc" }}>
                    <li>
                      Practiced real-world skills, including project
                      communication and task prioritization
                    </li>
                    <li>
                      Demonstrated working ability to build full stack web
                      applications with a modern web development stack (PERN)
                    </li>
                  </ul>
                </li>
                <br />
                <li>
                  <h5>
                    North Dakota State University:{" "}
                    <div style={{ fontSize: 14 }}>
                      <i>August 2017- May 2018</i>
                    </div>
                  </h5>
                  <ul style={{ listStyleType: "disc" }}>
                    <li>Member of Cybersecurity Student Association</li>
                    <li>
                      Participant in National Cyber League's Fall 2018 and
                      Spring 2019 Team Competitions
                    </li>
                    <br />
                  </ul>
                </li>
              </ul>
              <div style={{ textAlign: "center" }}>
                <hr size={1} />
                <h3>Work History</h3>
                <div style={{ textAlign: "left" }}>
                  <ul style={{ listStyleType: "circle" }}>
                    <li>
                      <h5 size={-3}>
                        Software Developer
                        <div style={{ fontSize: 14 }}>
                          <i>Scheels, November 2020-Present</i>
                        </div>
                      </h5>
                      <ul style={{ listStyleType: "disc" }}>
                        <li>
                          Lead the efforts within the internal development teams
                          in modernizing web applications for stability and
                          readability
                        </li>
                        <li>
                          Provided solutions in a timely manner when approached
                          with development and workflow issues.
                        </li>
                        <li>
                          Created, hosted, and maintained generic components,
                          functions, and templates on NPM to reduce setup time
                          for new projects.
                        </li>
                        <li>
                          Lead code reviews to go on Typescripty and React best
                          practices, giving specific feedback on areas of
                          improvement.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h5>
                        Lifeguard
                        <div style={{ fontSize: 14 }}>
                          <i>Fargo Park District, June 2016-August 2020</i>
                        </div>
                      </h5>
                      <ul style={{ listStyleType: "disc" }}>
                        <li>
                          Brought in emergency personnel and offered continuous
                          care until arrival of authorities.
                        </li>
                        <li>
                          Learned and maintained proficiency in first responder
                          skills such as First Aid and CPR to offer individuals
                          in distress optimal support.
                        </li>
                      </ul>
                    </li>
                    <br />
                    <br />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
