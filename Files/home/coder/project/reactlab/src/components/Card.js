import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack>
    <VStack 
    align="flex-start" 
    background="white"
    textColor="black"
    borderRadius="3%"
    marginLeft="3%"
    >
      <Image borderRadius="3%" objectFit="cover" src={imageSrc} alt={title} />
      <Heading as="h6" side="md" marginLeft="3%">{title}</Heading>
      <Text marginLeft="3%" textColor="grey">{description}</Text>
      <HStack marginLeft="3%" marginBottom="3%">
        <Text>See More</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x"/>
      </HStack>
    </VStack>
  </HStack>
  );
};

export default Card;
