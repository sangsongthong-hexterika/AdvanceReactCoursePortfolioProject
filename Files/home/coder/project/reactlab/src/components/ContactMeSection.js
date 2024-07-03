import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "", 
      email: "",
      type: "", // The solution code written: type: "hireMe". It isn't that significant - I think. I want to be safe so I noted it down.
      comment: "",
    },
    
    /* 
    The solution code written:
    
    onSubmit: (values) => { 
      submit('https://john.com/contactme', values);
      
    This is a much simpler approach than what I did. I will come back 
    to try to understand it later.
    */
    onSubmit: async (values, {setSubmitting, resetForm}) => {
      setSubmitting(true);
      try {
        await submit(values);
        if (response?.type === "success") {
          onOpen("success");
          resetForm();
        } else {
          onOpen("error", response?.message || "Unexpected response format.");
        }
      } catch (error) {
        onOpen("error", error.message);
      } finally {
        setSubmitting(false); // Set submitting state back to false
      }
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
      .required("Required"),
      email: Yup.string()
      .email("Invalid email address")
      .required("Required"),
      type: Yup.string()
      .oneOf(["hireMe", "openSource", "other"], "Invalid type")
      .optional(),
      comment: Yup.string()
      .min(25, "Must be at least 25 characters")
      .required("Required"),
    }),
  });

  useEffect(() => {
    if (response) {
      console.log("Response updated:", response);
    }
  }, [response]);
  
  /* 
  The solution code written: 

  useEffect(() => { 
    if (response) { 
      onOpen(response.type, response.message); 
      if (response.type === 'success') { 
        formik.resetForm(); 
      } 
    } 
  }, [response]);
  
  I will come back to understand this later. 
  */
  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
      id="contactme" // The solution code didn't have this line and it still works.
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps('firstName')}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...formik.getFieldProps('email')}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" {...formik.getFieldProps('type')}>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...formik.getFieldProps('comment')}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button 
                type="submit" 
                colorScheme="purple" 
                width="full" 
                isLoading={isLoading || formik.isSubmitting} 
                // The solution code written: isLoading={isLoading}.
                // I tried that but still ran into problems so I had to change my
                // approach.
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
