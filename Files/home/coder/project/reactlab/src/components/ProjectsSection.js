import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Version Control",
    description:
      "Learned how to use git and Github",
    getImageSrc: () => require("../images/VersionControl.png"),
  },
  {
    title: "React Basics Course",
    description:
      "Learned basics React concepts",
    getImageSrc: () => require("../images/ReactBasics.png"),
  },
  {
    title: "Advanced React",
    description:
      "Learned more advanced concepts of React",
    getImageSrc: () => require("../images/AdvancedReact.png"),
  },
  {
    title: "HTML And CSS In Depth",
    description:
      "Learned HTML and CSS",
    getImageSrc: () => require("../images/HTML-and-CSS-In-Depth.png"),
  },
  {
    title: "Programming With JavaScript",
    description:
      "Learned JavaScript",
    getImageSrc: () => require("../images/ProgrammingWithJavaScript.png"),
  },
  {
    title: "Principles of UX/UI Design",
    description:
      "Learned principles of UX/UI design using Figma",
    getImageSrc: () => require("../images/PrinciplesOf-UI-UX-Design.png"),
  },
  {
    title: "Bachelor's Degree Completion: Sport Science",
    description:
      "This is my Bachelor's Degree.",
    getImageSrc: () => require("../images/SUT-ProofOfCompletingADegree.png"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
      id="projects" // The solution code didn't have this line and it still works.
      // I believe it works because I had stumbled too long trying to 
      // add id="projects-section" instead of id="projects". 
      // However, I don't want to just make change of this line to be like the
      // solution code and risk breaking my code that is already worked.
    >
      <Heading as="h1" id="projects-section">
        My Educations:
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
