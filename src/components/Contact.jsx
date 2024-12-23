import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Icon,
  Text,
  Input,
  Textarea,
  Button,
  VStack,
  HStack,
} from '@chakra-ui/react';
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaGooglePlus,
  FaPinterest,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <Flex direction={{ base: 'column', md: 'row' }}  px={{ base: 4, md: 8, lg: 24 }} py={{ base: 2, md: 3 }} gap={8}>
     
      <Box flex="1"  p={6} borderRadius="md" boxShadow="md">
        <Heading as="h2" size="lg" mb={6}  textAlign="start" color="yellow.500">
          Contact Info
        </Heading>
        <VStack align="start" spacing={8} mt={'50px'}> 
       
          <HStack spacing={12} align="start"> 
            <HStack>
              <Icon as={FaPhone} boxSize={6} color="yellow.500" />
              <Box>
                <Heading as="h3" size="sm" color="gray.700">
                  Phone
                </Heading>
                <Text color="gray.500">+91 9833905266</Text>
              </Box>
            </HStack>
            <HStack>
              <Icon as={FaEnvelope} boxSize={6} color="yellow.500" />
              <Box>
                <Heading as="h3" size="sm" color="gray.700">
                  Email
                </Heading>
                <Text color="gray.500">train2trade4u@gmail.com</Text>
              </Box>
            </HStack>
          </HStack>

         
          <HStack align="start"  mt={'50px'}>
            <Icon as={FaMapMarkerAlt} boxSize={6} color="yellow.500" />
            <Box>
              <Heading as="h3" size="sm" color="gray.700">
                Address
              </Heading>
              <Text color="gray.500">
                541-D, 4-B, 1st Floor Shrijiniketan, <br />
                Dr. Ambedkar Road, Above Matunga Clinic <br />
                Matunga, Mumbai-400019
              </Text>
            </Box>
          </HStack>
        </VStack>

       
        <HStack spacing={2}  mt={'50px'} justify="start"> 
          <Icon as={FaFacebook} boxSize={'50px'} color="blue.600" /> 
          <Icon as={FaTwitter} boxSize={'50px'} color="blue.400" /> 
          <Icon as={FaGooglePlus} boxSize={'50px'} color="yellow.500" />
          <Icon as={FaPinterest} boxSize={'50px'} color="red.600" />
        </HStack>
      </Box>

     
      <Box flex="1"  p={6} borderRadius="md" boxShadow="md">
        <Heading as="h2" size="lg" mb={4} textAlign="center" color="red.500">
          Send A Message
        </Heading>
        <VStack spacing={4}>
          <Input placeholder="Name *" size="lg" focusBorderColor="red.500" />
          <Input placeholder="Email *" size="lg" focusBorderColor="red.500" />
          <Input placeholder="Subject" size="lg" focusBorderColor="red.500" />
          <Textarea
            placeholder="Message"
            size="lg"
            focusBorderColor="red.500"
            rows={5}
          />
          <Button colorScheme="red" size="lg" w="full">
            Send Message
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Contact;
