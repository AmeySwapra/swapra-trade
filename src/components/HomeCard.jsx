import React, { useState, useRef } from "react";
import {
  Box,
  IconButton,
  Stack,
  Heading,
  Text,
  Container,
  Button,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import slide1 from "../assets/slider/slide1.jpg";
import slide2 from "../assets/slider/slide2.jpg";

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: false, 
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function HomeCard() {
  const [slider, setSlider] = useState(null);
  const [animationKey, setAnimationKey] = useState(Math.random());

  const intervalRef = useRef(null); 

  const cards = [
    {
      title: "ONLINE SHARE MARKET AND",
      subtitle: "INVESTMENT COURSES",
      text: "Learn & Enhance Yours Stock Market Investment Skills",
      image: slide1,
    },
    {
      title: "BEST SHARE MARKET TRAINING",
      subtitle: "ACADEMY",
      text: "Live Stock Market Training Programs With Certification",
      image: slide2,
    },
  ];

  const letterAnimation = {
    hidden: { x: 500, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.05, type: "spring", stiffness: 50 },
    }),
  };

  const buttonAnimation = {
    hidden: { x: 200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.5, type: "spring", stiffness: 50 },
    },
  };

  
  const startAutoSlide = () => {
    if (slider) {
      intervalRef.current = setInterval(() => {
        slider.slickNext(); 
        setAnimationKey(Math.random()); 
      }, 5000); 
    }
  };

 
  const clearAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  React.useEffect(() => {
    startAutoSlide();
    return clearAutoSlide; 
  }, [slider]); 

  return (
    <Box position="relative" height={{ base: "400px", md: "600px" }} width="full" overflow="hidden">
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={{ base: "10px", md: "40px" }}
        top="50%"
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" color="white" />
      </IconButton>

      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={{ base: "10px", md: "40px" }}
        top="50%"
        transform="translate(0%, -50%)"
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" color="white" />
      </IconButton>

      <Slider
        {...settings}
        ref={(c) => setSlider(c)}
        beforeChange={(current, next) => {
          setAnimationKey(Math.random());
        }}
      >
        {cards.map((card, index) => (
          <Box
            key={index}
            height={{ base: "400px", md: "600px" }}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}
          >
            {/* Overlay */}
            <Box
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              backgroundColor="rgba(0, 0, 0, 0.5)"
            />

            
            <Container size="container.xl" height="100%" position="relative">
              <Stack
                spacing={6}
                w={{ base: "90%", md: "80%", lg: "200%" }}
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                color="white"
                textAlign="center"
              >
               
                <Heading fontSize={{ base: "2xl", md: "4xl" }}>
                  {card.title.split("").map((letter, i) => (
                    <motion.span
                      key={`${index}-title-${i}`} 
                      variants={letterAnimation}
                      initial="hidden"
                      animate="visible"
                      custom={i}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </Heading>

               
                <Text fontSize={{ base: "md", md: "4xl" }} fontWeight="700">
                  {card.subtitle.split("").map((letter, i) => (
                    <motion.span
                      key={`${index}-subtitle-${i}`} 
                      variants={letterAnimation}
                      initial="hidden"
                      animate="visible"
                      custom={i}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </Text>

              
                <Text fontSize={{ base: "sm", md: "lg" }} color={'yellow.400'}>{card.text}</Text>

              
                <motion.div
                  variants={buttonAnimation}
                  initial="hidden"
                  animate="visible"
                >
                  <Link to="/courses">
                    <Button colorScheme="blue" size="lg">
                      View Courses
                    </Button>
                  </Link>
                </motion.div>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

