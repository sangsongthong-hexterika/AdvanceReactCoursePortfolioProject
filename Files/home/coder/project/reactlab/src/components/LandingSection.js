import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import myPic from "../images/MySelfiePic.jpg";

const greeting = "Hello, I am Sangsongthong Chantaranothai!";
const bio1 = "A tech enthusiast with hands-on experience in ethical hacking, front-end development, and cloud technologies, along with hardware programming using Arduino and Raspberry Pi. Currently building a portfolio to pursue a Master's in technology and eager to explore new challenges in software development.";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
// <Avatar src="https://i.pravatar.cc/150?img=7" size="2xl" />
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <Avatar src={ myPic } size="2xl" />
      <Heading as="h1" size="xl" mb={4}>{greeting}</Heading>
      <Heading as="h6" size="s" mt={8}>{bio1}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
