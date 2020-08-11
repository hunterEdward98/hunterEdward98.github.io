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
                8306 River View Rd, Fargo, ND
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
              Well-versed in Coding and Team Leading techniques. Excellent
              relationship-building and decision-making skills.
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
                Javascript with React, Redux, Bootstrap, Material UI
                <br />
                <i style={{ fontSize: 14, color: "navy" }}>Proficient</i>
                <br />
                <hr />
                SQL with Postgres <br />
                jQuery, HTML, CSS, and BASH
                <br />
                <i style={{ fontSize: 14, color: "navy" }}> Practiced</i>
              </div>
              <div
                className="mx-3"
                style={{ textAlign: "center", width: "50%" }}
              >
                Java, Python, and Git
                <br />
                <i style={{ fontSize: 14, color: "navy" }}>Familiar</i>
                <br />
                <hr />
                C++ and C# <br />
                <i style={{ fontSize: 14, color: "navy" }}>some knowledge</i>
              </div>
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
                      Used industry-relevant tools including node.js and React
                    </li>
                    <li>
                      Practiced real-world skills, including project
                      communication and task prioritization
                    </li>
                    <li>
                      Gained exposure to industry processes and techniques
                    </li>
                    <li>
                      Demonstrated working ability to build full stack web
                      applications
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
                      <h5>
                        Lifeguard
                        <div style={{ fontSize: 14 }}>
                          <i>Fargo Park District, June 2016-Present</i>
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
                    <li>
                      <h5 size={-3}>
                        Delivery Driver
                        <div style={{ fontSize: 14 }}>
                          <i>Pizza Hut, August 2019-December 2019</i>
                        </div>
                      </h5>
                      <ul style={{ listStyleType: "disc" }}>
                        <li>
                          Kept detailed records of sales, payments and completed
                          or in-progress deliveries
                        </li>
                        <li>
                          Fostered positive working relationships with customers
                          by responding to questions and concerns
                        </li>
                        <li>
                          Completed on-time deliveries by choosing best and most
                          efficient routes
                        </li>
                      </ul>
                    </li>
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
