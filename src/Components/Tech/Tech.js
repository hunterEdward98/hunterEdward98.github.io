import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/core";
import dayjs from "dayjs";

let techIcons = [
  "react-plain-wordmark",
  "csharp-plain-wordmark",
  "typescript-plain",
  "javascript-plain ",
  "postgresql-plain-wordmark",
  "html5-plain-wordmark",
  "css3-plain-wordmark",
  "dot-net-plain-wordmark",
];
let workflowIcons = [
  "git-plain-wordmark",
  "trello-plain-wordmark",
  "jira-plain-wordmark",
  "bitbucket-plain-wordmark",
  "confluence-plain-wordmark",
];
let environmentIcons = [
  "vscode-plain",
  "visualstudio-plain",
  "unrealengine-plain-wordmark",
  "unity-plain-wordmark",
];
const Projects = () => {
  return (
    <>
      My Experience in these technologies comes from
      {dayjs().diff(dayjs("2020-11-06"), "years")} years of professional
      experience at Scheels, where I lead the internal development team (SIS) in
      modernizing and continuing to improve the frontend development process,
      and attending Emerging Digital Academy before that.
      <Accordion className="col-12" defaultIndex={[0]}>
        <AccordionItem>
          <AccordionHeader className="col-12 text-center rounded Head">
            <Box flex={1}>Proficient in</Box>
          </AccordionHeader>
          <AccordionPanel>
            <div className="d-flex row justify-content-center">
              {techIcons.map((icon, i) => (
                <div className=" col-4 col-md-2 rounded mt-5">
                  <i class={`devicon-${techIcons[i]} devicon rounded p-2`} />
                </div>
              ))}
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader className="col-12 text-center rounded Head">
            <Box flex={1}>Workflow</Box>
          </AccordionHeader>
          <AccordionPanel>
            <div className="d-flex row justify-content-center">
              {workflowIcons.map((icon, i) => (
                <div className=" col-4 col-md-2 rounded mt-5">
                  <i
                    class={`devicon-${workflowIcons[i]} devicon rounded p-2`}
                  />
                </div>
              ))}
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader className="col-12 text-center rounded Head">
            <Box flex={1}>Operating Systems / Environments</Box>
          </AccordionHeader>
          <AccordionPanel>
            <div className="d-flex row justify-content-center">
              {environmentIcons.map((icon, i) => (
                <div className=" col-4 col-md-2 rounded mt-5">
                  <i
                    class={`devicon-${environmentIcons[i]} devicon rounded p-2`}
                  />
                </div>
              ))}
            </div>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader className="col-12 text-center rounded Head">
            <Box flex={1}> Familiar With</Box>
          </AccordionHeader>
          <AccordionPanel>
            <div className="d-flex row justify-content-center">
              <div className=" col-4 col-md-2 rounded mt-5">
                <i class="devicon-java-plain-wordmark devicon rounded p-2"></i>
              </div>
              <div className=" col-4 col-md-2 rounded mt-5">
                <i class="devicon-python-plain-wordmark devicon rounded p-2"></i>
              </div>
              <div className=" col-4 col-md-2 rounded mt-5">
                <i class="devicon-atom-plain-wordmark devicon rounded p-2"></i>
              </div>
              <div className=" col-4 col-md-2 rounded mt-5">
                <i class="devicon-jquery-plain-wordmark devicon rounded p-2"></i>
              </div>
              <div className=" col-4 col-md-2 rounded mt-5">
                <i class="devicon-express-original-wordmark  devicon rounded p-2"></i>
              </div>
            </div>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};
export default Projects;
