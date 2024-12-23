import { Box, Button, Flex, GridItem, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import free from "../assets/coures/free.jpg";
import paid from "../assets/coures/paid.png";
import logo from '../assets/logo/favi.png'
function HomeCourses() {
  const courses = [
    {
      id: 1,
      title: "Basic Futures & Options",
      description: "This course will be available very soon.",
      author: "Train2Trade",
      authorImage:
        logo,
      image: free,
      students: 0,
      price: "Free",
      link: "https://online.train2trade.co.in/courses/basic-futures-options/",
      category: "technical-analysis",
    },
    {
      id: 2,
      title: "Basic Technical Analysis",
      description: "This course will be helpful for beginners...",
      author: "Train2Trade",
      authorImage:
       logo,
      image: paid,
      students: 16,
      price: "₹2,500.00",
      link: "https://online.train2trade.co.in/courses/basic-technical-analysis/",
      category: "technical-analysis",
    },
  ];

  return (
    <Box px={{ base: 4, md: 8, lg: 24 }} py={{ base: 2, md: 3 }}>
      <Text fontSize="3xl" fontWeight="bold" textAlign="start" mb={6}>
        Our Courses
      </Text>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
        {courses.map((course) => (
          <GridItem
            key={course.id}
            p={5}
            borderWidth={1}
            borderRadius="md"
            boxShadow="md"
            _hover={{ boxShadow: "xl", transform: "scale(1.05)" }}
            transition="all 0.3s ease"
          >
            <Box>
              <Box
                width="100%"
                height="200px"
                overflow="hidden"
                borderRadius="8px"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", 
                  }}
                />
              </Box>

              <Text fontWeight="bold" mt={2} fontSize={{ base: "lg", md: "xl" }}>
                {course.title}
              </Text>
              <Text fontSize="sm" mt={1}>
                {course.description}
              </Text>
              <Flex align="center" justify="space-between" mt={2}>
                <Flex align="center">
                  <img
                    src={course.authorImage}
                    alt={course.author}
                    style={{ width: "30px", borderRadius: "50%" }}
                  />
                  <Text ml={2} fontSize="sm">
                    {course.author}
                  </Text>
                </Flex>
                <Text fontSize="sm">{course.price}</Text>
              </Flex>
              <Text mt={2} fontSize="sm">
                {course.students} students
              </Text>
              <Button
                as="a"
                href={course.link}
                bg={"yellow.500"}
                color={"blackAlpha.700"}
                mt={2}
                width="100%"
                _hover={{ bg: "yellow.400" }}
              >
                Read More
              </Button>
            </Box>
          </GridItem>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default HomeCourses;
