import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  FormControl,
  FormLabel,
  HStack,
  Text,
  Box,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

const RegistrationModal = ({ isOpen, onClose }) => {
  const [captchaNumbers, setCaptchaNumbers] = useState(generateCaptcha());
  const [captchaInput, setCaptchaInput] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Function to generate random captcha numbers
  function generateCaptcha() {
    return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
  }

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const [num1, num2] = captchaNumbers;
    const captchaAnswer = num1 + num2;

    if (parseInt(captchaInput) !== captchaAnswer) {
      alert("Captcha is incorrect!");
      return;
    }

    alert("Registration successful!");
    setCaptchaNumbers(generateCaptcha()); // Regenerate captcha
    setFormData({ username: "", email: "", password: "" });
    setCaptchaInput("");
    onClose();
  };

  return (
    <>
      <style>
        {`
          /* Force cursor style for Modal Overlay */
          .custom-modal-overlay {
            cursor: crosshair !important;
          }
        `}
      </style>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        {/* Add custom class for overlay */}
        <ModalOverlay className="custom-modal-overlay" />
        <ModalContent>
          <ModalHeader textAlign="center">Register</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Google Sign-In Section */}
            <Box textAlign="center" mb={4}>
              <Button
                leftIcon={<FcGoogle />}
                variant="outline"
                colorScheme="teal"
                width="full"
                mb={4}
              >
                Sign in with Google
              </Button>
            </Box>

            {/* Registration Form */}
            <form onSubmit={handleSubmit}>
              <FormControl mb={4} isRequired>
                <FormLabel>Username</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter your username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mb={4} isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mb={4} isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </FormControl>

              <FormControl mb={4} isRequired>
                <FormLabel>Captcha</FormLabel>
                <HStack>
                  <Text fontWeight="bold">
                    {captchaNumbers[0]} + {captchaNumbers[1]} =
                  </Text>
                  <Input
                    type="number"
                    placeholder="Enter sum"
                    value={captchaInput}
                    onChange={(e) => setCaptchaInput(e.target.value)}
                  />
                </HStack>
              </FormControl>

              <Button type="submit" colorScheme="teal" width="full">
                Sign Up
              </Button>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} colorScheme="red" variant="ghost">
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RegistrationModal;
