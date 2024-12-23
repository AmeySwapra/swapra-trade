import React from "react";
import {
  Box,
  Heading,
  Flex,
  Divider,
  AspectRatio,
} from "@chakra-ui/react";

const Map = () => {
  return (
    <Box
      as="section"
      px={{ base: 4, md: 8, lg: 24 }}
      py={{ base: 2, md: 3 }}
    >
      <Flex
        direction="column"
        align="flex-start"
       justify="flex-start"
        maxW="1200px"
        mx="auto"
      >
        
        <Box textAlign="start" mb={6}>
          <Heading
            as="h3"
            size="lg"
            textTransform="uppercase"
            color="gray.700"
          >
            Location on Map
          </Heading>
          <Divider
            mt={2}
            borderColor="gray.400"
            borderWidth="2px"
            width="50px"
            mx="auto"
          />
        </Box>

        
        <AspectRatio ratio={16 / 9} w="full" height={'400px'}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12303.580418152877!2d72.85747577699028!3d19.025772389278085!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6e570f9ce81dac05!2sShare%20Market%20Training%20%26%20Technical%20Analysis%20Course%20in%20Mumbai%20%7C%20Tips2trade!5e0!3m2!1sen!2sin!4v1597940856915!5m2!1sen!2sin"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Location Map"
          ></iframe>
        </AspectRatio>
      </Flex>
    </Box>
  );
};

export default Map;
