import { Box, Heading, Text, Divider, Stack } from "@chakra-ui/react";

const HomeAbout = () => {
  return (
    <Box 
     
      mx="auto" 
      px={{ base: 4, md: 8, lg: 24 }}
      py={{ base: 2, md: 3 }}
      
    >
      <Stack 
        spacing={{ base: 6, md: 8 }} 
        align="start" 
        justify="center"
        textAlign="start"
      >
        <Heading 
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }} 
          color="gray.800"
        >
          Who We Are
        </Heading>

        <Divider borderColor="gray.300" />

        <Text 
          fontSize={{ base: "sm", md: "md" }} 
          color="gray.600" 
          lineHeight="1.6"
         
        >
          Train2Trade is a professional share market training institute for online and offline stock market trading courses. Whether you are a beginner, intermediate or pro in share market trading, we have customized our share market trading courses to take your knowledge to the next level of success. To succeed in a volatile trading environment, an investor essentially needs the right kind of training and insights into mastering techniques, especially in markets like commodity, shares, stocks, and options.
        </Text>

        <Text 
          fontSize={{ base: "sm", md: "md" }} 
          color="gray.600" 
          lineHeight="1.6"
         
        >
          Do you want to learn more about time cycles, equity charts, currency markets, and get the best in commodity market training? We are the industry stock market experts in Mumbai providing high-quality share market courses for beginners to become expert traders with extensive knowledge of the best trading setups. Our share market training programs are geared to meet the individual requirements of beginners, professionals, investors, and corporate investment groups.
        </Text>
      </Stack>
    </Box>
  );
};

export default HomeAbout;
