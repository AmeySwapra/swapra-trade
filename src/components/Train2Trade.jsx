import React from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  Divider,
  Image,
} from "@chakra-ui/react";

function Train2Trade() {
  return (
    <Box maxW="1200px" mx="auto" p={4}>
      {/* Section 1: Heading */}
      <Box textAlign="center" mb={8}>
        <Heading as="h2" size="2xl" mb={2}>
          Welcome To Train2Trade
        </Heading>
        <Divider borderColor="gray.300" />
      </Box>

      {/* Section 2: Content and Image */}
      <Stack direction={{ base: "column", md: "row" }} spacing={8}>
        {/* Left Column: Text Content */}
        <Box flex="1">
          <Text fontSize="lg" lineHeight="1.8">
            Train2trade offers personal training in Technical analysis, fundamental analysis in equity, commodity &amp; currency markets in addition to teaching people how to create money rather than being dependent on only a single source of income all their lives.
            <br />
            <br />
            We at Train2trade help you understand the significance of investing in a systematic manner in stock, commodity &amp; currency markets to attract maximum returns irrespective of a bull or bear market. Unlike, school &amp; college education which we learn &amp; forget at the earliest, our stock market courses are learning for life.
            <br />
            <br />
            Train2trade will help you learn the important aspects of trading/investing in equity, commodity, currency &amp; the impact of global markets on India to help you stay financially free &amp; ensure you manage your investments independently without depending on outsiders to misguide you.
          </Text>
        </Box>

        {/* Right Column: Image */}
        <Box flex="1">
          <Image
            src="https://online.train2trade.co.in/wp-content/uploads/2020/09/pexels-jonathan-borba-3285196.jpg"
            alt="Train2Trade"
            boxSize="100%"
            objectFit="cover"
          />
        </Box>
      </Stack>
    </Box>
  );
}

export default Train2Trade;
