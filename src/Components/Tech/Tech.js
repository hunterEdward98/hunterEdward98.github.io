import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  Box,
  AccordionIcon,
} from "@chakra-ui/core";
const Projects = () => {
  return (
    <Accordion className="col-12" defaultIndex={[0]}>
      <AccordionItem>
        <AccordionHeader className="col-12 text-center rounded Head">
          <Box flex={1}>Proficient in</Box>
        </AccordionHeader>
        <AccordionPanel>
          <div className="d-flex row justify-content-center">
            <div className=" col-4 col-md-2 rounded mt-5">
              {" "}
              <i class="devicon-react-original-wordmark  devicon rounded p-2"></i>
            </div>
            <div className=" col-4 col-md-2 rounded mt-5">
              {" "}
              <i class="devicon-javascript-plain  devicon rounded p-2"></i>
            </div>
            <div className=" col-4 col-md-2 rounded mt-5">
              <i class="devicon-jquery-plain-wordmark devicon rounded p-2"></i>
            </div>
            <div className=" col-4 col-md-2 rounded mt-5">
              <i class="devicon-postgresql-plain-wordmark devicon rounded p-2"></i>
            </div>
            <div className=" col-4 col-md-2 rounded mt-5">
              {" "}
              <i class="devicon-html5-plain-wordmark devicon rounded p-2"></i>
            </div>
            <div className=" col-4 col-md-2 rounded mt-5">
              {" "}
              <i class="devicon-css3-plain-wordmark devicon rounded p-2"></i>
            </div>
            <div className=" col-4 col-md-2 rounded mt-5">
              <div>
                <i class="devicon-nodejs-plain devicon rounded p-2"></i>
              </div>
            </div>
            <div className=" col-4 col-md-2 rounded mt-5">
              {" "}
              <i class="devicon-express-original-wordmark  devicon rounded p-2"></i>
            </div>
            <div className=" col-4 col-md-2 rounded mt-5">
              {" "}
              <i class="devicon-bootstrap-plain-wordmark  devicon rounded p-2"></i>
            </div>
          </div>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader className="col-12 text-center rounded Head">
          <Box flex={1}>Workflow</Box>
        </AccordionHeader>
        <AccordionPanel>
          <div className="d-flex row justify-content-center">
            <div className=" col-4 col-md-2 rounded mt-5">
              <i class="devicon-git-plain-wordmark devicon rounded p-2"></i>
            </div>
            <div className=" col-4 col-md-2 rounded mt-5">
              <i class="devicon-heroku-plain-wordmark devicon rounded p-2"></i>
            </div>
            <div className=" col-4 col-md-2 rounded mt-5">
              <i class="devicon-slack-plain-wordmark devicon rounded p-2"></i>
            </div>
            <div className=" col-4 col-md-2 rounded mt-5">
              <i class="devicon-trello-plain-wordmark devicon rounded p-2"></i>
            </div>
          </div>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader className="col-12 text-center rounded Head">
          <Box flex={1}>Operating Systems / Environments</Box>
        </AccordionHeader>
        <AccordionPanel>
          <div className="d-flex row justify-content-center">
            <div className=" col-4 col-md-2 rounded mt-5">
              <i class="devicon-linux-plain devicon rounded p-2"></i>
            </div>
            <div className=" col-4 col-md-2 rounded mt-5">
              <i class="devicon-ubuntu-plain-wordmark devicon rounded p-2"></i>
            </div>
            <div className=" col-4 col-md-2 rounded mt-5">
              <i class="devicon-debian-plain-wordmark devicon rounded p-2"></i>
            </div>
            <div className=" col-4 col-md-2 rounded mt-5">
              <i class="devicon-windows8-plain devicon rounded p-2"></i>
            </div>
            <div className=" col-4 col-md-2 rounded mt-5">
              <i class="devicon-visualstudio-plain-wordmark devicon rounded p-2"></i>
            </div>
            <div className=" col-4 col-md-2 rounded mt-5">
              <i class="devicon-github-plain-wordmark devicon rounded p-2"></i>
            </div>
            <div className=" col-4 col-md-2 rounded mt-5">
              <i class="devicon-gitlab-plain-wordmark devicon rounded p-2"></i>
            </div>
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
              <i class="devicon-cplusplus-plain-wordmark devicon rounded p-2"></i>
            </div>
            <div className=" col-4 col-md-2 rounded mt-5">
              <i class="devicon-csharp-plain-wordmark devicon rounded p-2"></i>
            </div>
            <div className=" col-4 col-md-2 rounded mt-5">
              <i class="devicon-java-plain-wordmark devicon rounded p-2"></i>
            </div>
            <div className=" col-4 col-md-2 rounded mt-5">
              <i class="devicon-python-plain-wordmark devicon rounded p-2"></i>
            </div>
            <div className=" col-4 col-md-2 rounded mt-5">
              <i class="devicon-dot-net-plain-wordmark devicon rounded p-2"></i>
            </div>
            <div className=" col-4 col-md-2 rounded mt-5">
              <i class="devicon-c-plain devicon rounded p-2"></i>
            </div>
            <div className=" col-4 col-md-2 rounded mt-5">
              <i class="devicon-sequelize-plain-wordmark devicon rounded p-2"></i>
            </div>
            <div className=" col-4 col-md-2 rounded mt-5">
              <i class="devicon-atom-plain-wordmark devicon rounded p-2"></i>
            </div>
          </div>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
export default Projects;
