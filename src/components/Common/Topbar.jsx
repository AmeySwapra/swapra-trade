import React from "react";
import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  HStack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import RegistrationModal from "./RegistrationModal"; // Import the modal component

function Topbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      bg="#2c75e4"
      color="white"
      px={{ base: 4, md: 8, lg: 24 }}
      py={{ base: 2, md: 3 }}
      borderBottom="1px solid"
      borderColor="gray.200"
    >
      <Container maxW="container.xl">
        <Flex
          justify="space-between"
          align="center"
          h={{ base: "auto", md: "30px" }}
          flexWrap={{ base: "wrap", md: "nowrap" }}
          gap={{ base: 2, md: 0 }}
        >
          <Flex
            align="center"
            gap={{ base: 2, md: 4 }}
            flexWrap="nowrap"
            w={{ base: "none", md: "auto", lg: "full" }}
            display={{ base: "none", md: "flex" }}
          >
            <Text fontSize={{ base: "sm", md: "md" }}>Have any question?</Text>
            <HStack spacing={{ base: 3, md: 4 }} flexWrap="nowrap">
              <HStack spacing={{ base: 1, md: 2 }} flexWrap="nowrap">
                <FaPhone />
                <Link
                  href="tel:919833905266"
                  color="teal.500"
                  fontSize={{ base: "sm", md: "md" }}
                  _hover={{
                    textDecoration: "underline",
                    textDecorationColor: "white",
                  }}
                >
                  +919833905266
                </Link>
              </HStack>
              <HStack spacing={{ base: 1, md: 2 }} flexWrap="nowrap">
                <FaEnvelope />
                <Link
                  href="mailto:train2trade4u@gmail.com"
                  color="teal.500"
                  fontSize={{ base: "sm", md: "md" }}
                  _hover={{
                    textDecoration: "underline",
                    textDecorationColor: "white",
                  }}
                >
                  train2trade4u@gmail.com
                </Link>
              </HStack>
            </HStack>
          </Flex>

          <HStack
            spacing={{ base: 2, md: 4 }}
            justify="flex-end"
            flexWrap="nowrap"
            w="full"
          >
            <Text
              as="button"
              onClick={onOpen}
              fontSize={{ base: "sm", md: "md" }}
              _hover={{
                textDecoration: "underline",
                textDecorationColor: "white",
              }}
            >
              Register
            </Text>
            <Center height="20px" bg="black" display={{ base: "block", md: "block" }}>
              <Divider w="1px" orientation="vertical" />
            </Center>
            <Link
              fontSize={{ base: "sm", md: "md" }}
              onClick={onOpen}
              _hover={{
                textDecoration: "underline",
                textDecorationColor: "white",
              }}
            >
              Login
            </Link>
          </HStack>
        </Flex>
      </Container>

      {/* Registration Modal */}
      <RegistrationModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}

export default Topbar;
