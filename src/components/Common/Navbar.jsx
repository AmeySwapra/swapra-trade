import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Image,
  Text,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="header" bg="transparent" position="absolute" w="100%" px={{ base: 0, md: 8, lg: 24 }} py={4} zIndex="10">
      <Container maxW="container.xl">
        <Flex align="center" justify="space-between">
          {/* Logo */}
          <Image src={logo} alt="Train2Trade Online" w={{ base: "120px", md: "150px" }} />

          {/* Desktop Navigation */}
          <HStack as="nav" spacing={8} display={{ base: "none", md: "flex" }}>
            <Link to="/">
              <Text
                fontWeight="medium"
                color="white"
                _hover={{ color: "yellow.400", transition: "0.3s" }}
              >
                Home
              </Text>
            </Link>
            <Link to="/courses">
              <Text
                fontWeight="medium"
                color="white"
                _hover={{ color: "yellow.400", transition: "0.3s" }}
              >
                Courses
              </Text>
            </Link>
            <Link to="/about">
              <Text
                fontWeight="medium"
                color="white"
                _hover={{ color: "yellow.400", transition: "0.3s" }}
              >
                About Us
              </Text>
            </Link>
            <Link to="/contact">
              <Text
                fontWeight="medium"
                color="white"
                _hover={{ color: "yellow.400", transition: "0.3s" }}
              >
                Contact
              </Text>
            </Link>
          </HStack>

          {/* Mobile Navigation Drawer */}
          <IconButton
            aria-label="Open Menu"
            icon={<FaBars />}
            display={{ base: "flex", md: "none" }}
            onClick={onOpen}
            color="white"
            bg="transparent"
          />
        </Flex>
      </Container>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="rgba(0, 0, 0, 0.8)" color="white">
          <DrawerCloseButton />
          <DrawerBody mt={10}>
            <HStack as="nav" spacing={6} flexDirection="column" align="start">
              <Link to="/" onClick={onClose}>
                Home
              </Link>
              <Link to="/courses" onClick={onClose}>
                Courses
              </Link>
              <Link to="/about" onClick={onClose}>
                About Us
              </Link>
              <Link to="/contact" onClick={onClose}>
                Contact
              </Link>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
