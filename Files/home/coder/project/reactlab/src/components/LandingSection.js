import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import myPic from "../images/MySelfiePic.jpg";

const greeting = "Hello, I am Sangsongthong!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

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
      <Heading as="h6" size="s" mb={4}>{greeting}</Heading>
      <Heading as="h1" size="2xl" mt={8}>{bio1}</Heading>
      <Heading as="h1" size="2xl">{bio2}</Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
