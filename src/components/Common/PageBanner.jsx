import { Box, Container, Heading, } from "@chakra-ui/react";
import bg1 from "../../assets/banner/bg1.jpg";
import bg2 from "../../assets/banner/bg2.jpg";

const PageBanner = ({ heading }) => {
  const backgroundImage = heading === "ALL COURSES" ? bg1 : bg2;

  return (
    <Box
      color="white"
      backgroundImage={`url(${backgroundImage})`}
      backgroundSize="cover"
      backgroundPosition="center"
      pt="120px"
      position="relative"
      h={"300px"}
      px={{ base: 4, md: 8, lg: 24 }}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(0, 0, 0, 0.5)"
      />
      <Container maxW="container.xl" position="relative">
        <Box
          display="flex"
          alignItems="center"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box
            w="2px"
            bg="yellow.500"
            h={{ base: "30px", md: "50px" }}
            mr={{ base: 0, md: "16px" }}
            mt={{ base: "20px", md: "60px" }}
          />
          <Heading
            mt={{ base: "20px", md: "50px" }}
            fontSize={{ base: "3xl", md: "50px" }}
          >
            {heading}
          </Heading>
        </Box>
      </Container>
    </Box>
  );
};

export default PageBanner;
