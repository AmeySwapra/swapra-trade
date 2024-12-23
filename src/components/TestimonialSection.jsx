import React from 'react';
import { Box, Heading, Image, Text, Flex } from '@chakra-ui/react';
import Slider from 'react-slick';

const TestimonialSlider = () => {
  const testimonials = [
    {
      text: "A very good place for learning basic concepts of investing in equity, trading and technical analysis. Abhijeet and Pavitra are very patient and give undivided attention to ensure the concepts are clear.",
      author: "Rahul Agrawal",
      image: "https://online.train2trade.co.in/wp-content/uploads/2020/08/person-2-150x150.png",
    },
    {
      text: "If one wants to get a headstart in the career of stock market then this course is well designed for it. One to one interaction helped me to ask questions freely without worrying and got insights into trading which is extremely useful. I would definitely recommend y’all to enroll for this course and get yourself ahead in the game of trading better than anyone else which is truly rewarding.",
      author: "Yash Shah",
      image: "https://online.train2trade.co.in/wp-content/uploads/2020/08/person-2-150x150.png",
    },
    {
      text: "I was searching for a stock market course from a very long time… So when came across train2trade my search was over… The course content and the tutors are amazing very friendly. I faced no issues with them and would highly recommend people interested in learning stock market and its principles…",
      author: "Tanvi Sanghvi",
      image: "https://online.train2trade.co.in/wp-content/uploads/2020/08/person-1-150x150.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Box  py={8}>
      <Box maxW="1200px" mx="auto" px={4}>
        <Heading as="h2" textAlign="center" mb={4}>What People Say</Heading>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Box key={index} p={'50px'} borderWidth="1px" w={'600px'} borderRadius="md" bg="white" boxShadow="md">
              <Text fontSize="lg" fontStyle="italic" mb={4}>
                <i>"{testimonial.text}"</i>
              </Text>
              <Flex align="center" justify="center" mt={4}>
                <Image src={testimonial.image} alt={testimonial.author} borderRadius="full" boxSize="50px" />
                <Box ml={4}>
                  <Text fontWeight="bold">{testimonial.author}</Text> 
                </Box>
              </Flex>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default TestimonialSlider;
