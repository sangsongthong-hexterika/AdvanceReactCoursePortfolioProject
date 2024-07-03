import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      window.history.pushState(null, null, `/#${id}`); // The solution code don't have this line and it still works.
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {}, []);

  /*
  The solution code for Step 5: Bonus

  useEffect(() => {
  const handleScroll = () => {
    // Business logic
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  }
}, []);

I will come back to this later.
  */

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack /* Solultion code written: spacing={8} */> 
              {socials.map((social) => (
                <a 
                  key={social.url}
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer">
                  <FontAwesomeIcon icon={social.icon} size="2x" 
                />
                </a>
                /* The solution code wriiten: 
              {socials.map(({ icon, url }) => ( 
                <a 
                  key={url} 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                > 
                  <FontAwesomeIcon icon={icon} size="2x" key={url} /> 
               </a> 
                */
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="/#contactme" id="contactme-section" onClick={handleClick('contactme')}>Contact Me</a>
              <a href="/#projects" id="projects-section" onClick={handleClick('projects')}>Projects</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;

/*
More code for the bonus part. I will come back to this later. 
Use 'useRef' to animate the Header.

const Header = () => {
  const headerRef = useRef(null);

  …
  return (
    <Box
      ref={headerRef}
      {...}
    >
      …
    </Box>
  );
};
*/

/**
 * This part of the solution code deal with handleScroll. I will come back later.
 * 
 * useEffect(() => {
  let prevScrollPos = window.scrollY;

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const headerElement = headerRef.current;
    if (!headerElement) {
      return;
    }
    if (prevScrollPos > currentScrollPos) {
      headerElement.style.transform = "translateY(0)";
    } else {
      headerElement.style.transform = "translateY(-200px)";
    }
    prevScrollPos = currentScrollPos;
  }

  window.addEventListener('scroll', handleScroll)

  return () => {
    window.removeEventListener('scroll', handleScroll)
  }
}, []);

…
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
    >
     …
    </Box>
  );
 */