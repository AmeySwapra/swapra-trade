import React from "react";
import { Box, IconButton, Image } from "@chakra-ui/react";
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import part1 from '../assets/partner/part1.jpg';
import part2 from '../assets/partner/part2.jpg';
import part3 from '../assets/partner/part3.jpg';
const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    centerMode: true,
    centerPadding: "0px",
    nextArrow: (
      <IconButton
        icon={<ChevronRightIcon />}
        aria-label="Next Slide"
        position="absolute"
        right="10px"
        top="50%"
        transform="translateY(-50%)"
        zIndex="1"
        bg="black"
        color="white"
        _hover={{ bg: "gray.700" }}
        p={4}
      />
    ),
    prevArrow: (
      <IconButton
        icon={<ChevronLeftIcon />}
        aria-label="Previous Slide"
        position="absolute"
        left="10px"
        top="50%"
        transform="translateY(-50%)"
        zIndex="1"
        bg="black"
        color="white"
        _hover={{ bg: "gray.700" }}
        p={4}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: true,
          centerMode: true,
        },
      },
    ],
  };

  const images = [
    part1, part2, part3
  ];

  return (
    <Box className="elementor-section" position="relative">
      <Box
        className="elementor-container"
        mx="auto"
        px={{ base: 4, md: 8, lg: 24 }}
        py={{ base: 2, md: 3 }}
      >
        <Slider {...settings}>
          {images.map((src, index) => (
            <Box
              key={index}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flex="1"
              gap={"50px"}
              px={{ base: 4, md: 8, lg: 24 }}
              py={{ base: 2, md: 3 }}
              m={'auto'}
            >
              <Image
                src={src}
                alt={`carousel-image-${index}`}
                boxSize={{ base: "100px", sm: "150px", md: "180px" }}
                objectFit="contain"
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default ImageSlider;
