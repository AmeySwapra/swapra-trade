import { Box, Container, Stack, Text, SimpleGrid, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box as="footer" id="colophon" className="site-footer" bg="gray.800" px={{ base: 4, md: 8, lg: 24 }} color="white" py={10}>
      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          <Box>
            <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" mb={4}>
              About Us
            </Text>
            <Text fontSize="sm" color="#879976">
              We at Train2trade help you understand the significance of investing in a systematic manner in stock, commodity &amp; currency markets to attract maximum returns irrespective of a bull or bear market. Unlike, school &amp; college education which we learn &amp; forget at the earliest, our stock market courses are learning for life.
            </Text>
          </Box>

          <Box>
            <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" mb={4}>
              Our Courses
            </Text>
            <Stack spacing={2}>
              <Text fontSize="sm" color="#879976">Basic Technical Analysis</Text>
              <Text fontSize="sm" color="#879976">Basic Futures &amp; Options</Text>
              <Text fontSize="sm" color="#879976">Equity Fundamental Analysis</Text>
              <Text fontSize="sm" color="#879976">Commodity &amp; Currency Fundamental Analysis</Text>
              <Text fontSize="sm" color="#879976">Entrepreneurship Training</Text>
              <Text fontSize="sm" color="#879976">Master Trader Course</Text>
            </Stack>
          </Box>

          <Box>
            <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" mb={4}>
              Navigation
            </Text>
            <Stack spacing={2}>
              <Link as={RouterLink} to="/" fontSize="sm" _hover={{ color: 'yellow.500' }} color="#879976">
                Home
              </Link>
              <Link as={RouterLink} to="/courses" fontSize="sm" _hover={{ color: 'yellow.500' }} color="#879976">
                Courses
              </Link>
              <Link as={RouterLink} to="/about" fontSize="sm" _hover={{ color: 'yellow.500' }} color="#879976">
                About Us
              </Link>
              <Link as={RouterLink} to="/contact" fontSize="sm" _hover={{ color: 'yellow.500' }} color="#879976">
                Contact
              </Link>
            </Stack>
          </Box>

          <Box>
            <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" mb={4}>
              Contact Us
            </Text>
            <Text fontSize="sm" color="#879976">
              541-D, 4-B, 1st floor Shrijiniketan, Dr Ambedkar Road, Above Matunga Clinic Matunga, Mumbai-400019.
              <br />
              Email: <Link href="mailto:train2trade4u@gmail.com">train2trade4u@gmail.com</Link>
              <br />
              Phone: +91 9833905266
            </Text>
          </Box>
        </SimpleGrid>

        <Box borderTop="1px solid #ccc" mt={10} pt={5}>
          <SimpleGrid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={5} justifyContent="space-between" alignItems="center">
            <Text fontSize="sm" textAlign={{ base: 'center', md: 'left' }} color="#879976">
              All Rights Reserved 2020 Train2Trade | Designed &amp; Developed By{' '}
              <Link to='/'>
                Brandbase Media
              </Link>
            </Text>
            <Stack direction="row" spacing={4} justify={{ base: 'center', md: 'flex-end' }}>
              <Link as={RouterLink} to="/terms"  fontSize="sm" _hover={{ color: 'yellow.500' }} color="#879976">
                Terms &amp; Conditions
              </Link>
              <Link as={RouterLink} to="/privacy"  fontSize="sm" _hover={{ color: 'yellow.500' }} color="#879976">
                Privacy Policy
              </Link>
            </Stack>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
