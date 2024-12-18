import React from "react";
import { Box, Container, Heading, Text, Stack } from "@chakra-ui/react";

const PrivacyPolicy = () => {
  return (
    <Box py={10} px={{ base: 6, md: 8, lg: 28 }}>
     
        <Stack spacing={6}>
          <Heading
            as="h2"
            fontSize={{ base: "2xl", md: "3xl" }}
            textAlign="start"
          >
            Who We Are
          </Heading>
          <Text fontSize="lg">
            Our website address is:{" "}
            <Text as="span">https://online.train2trade.co.in</Text>.
          </Text>

          <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }}>
            What Personal Data We Collect and Why We Collect It
          </Heading>

          <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }}>
            Comments
          </Heading>
          <Text fontSize="lg">
            When visitors leave comments on the site we collect the data shown
            in the comments form, and also the visitor’s IP address and browser
            user agent string to help spam detection.
          </Text>
          <Text fontSize="lg">
            An anonymized string created from your email address (also called a
            hash) may be provided to the Gravatar service to see if you are
            using it. The Gravatar service privacy policy is available here:{" "}
            <Text
              as="a"
              href="https://automattic.com/privacy/"
              color="blue.500"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://automattic.com/privacy/
            </Text>
            . After approval of your comment, your profile picture is visible to
            the public in the context of your comment.
          </Text>

          <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }}>
            Media
          </Heading>
          <Text fontSize="lg">
            If you upload images to the website, you should avoid uploading
            images with embedded location data (EXIF GPS) included. Visitors to
            the website can download and extract any location data from images
            on the website.
          </Text>

          <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }}>
            Contact Forms
          </Heading>
          <Text fontSize="lg">
            Details regarding contact forms can be specified here.
          </Text>

          <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }}>
            Cookies
          </Heading>
          <Text fontSize="lg">
            If you leave a comment on our site you may opt-in to saving your
            name, email address and website in cookies. These are for your
            convenience so that you do not have to fill in your details again
            when you leave another comment. These cookies will last for one
            year.
          </Text>
          <Text fontSize="lg">
            If you visit our login page, we will set a temporary cookie to
            determine if your browser accepts cookies. This cookie contains no
            personal data and is discarded when you close your browser.
          </Text>
          <Text fontSize="lg">
            When you log in, we will also set up several cookies to save your
            login information and your screen display choices. Login cookies
            last for two days, and screen options cookies last for a year. If
            you select “Remember Me,” your login will persist for two weeks. If
            you log out of your account, the login cookies will be removed.
          </Text>

          <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }}>
            Embedded Content from Other Websites
          </Heading>
          <Text fontSize="lg">
            Articles on this site may include embedded content (e.g. videos,
            images, articles, etc.). Embedded content from other websites
            behaves in the exact same way as if the visitor has visited the
            other website.
          </Text>
          <Text fontSize="lg">
            These websites may collect data about you, use cookies, embed
            additional third-party tracking, and monitor your interaction with
            that embedded content, including tracking your interaction with the
            embedded content if you have an account and are logged in to that
            website.
          </Text>

          <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }}>
            Analytics
          </Heading>
          <Text fontSize="lg">
            Details about analytics can be specified here.
          </Text>

          <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }}>
            Who We Share Your Data With
          </Heading>
          <Text fontSize="lg">
            Specify the details of sharing data with third parties here.
          </Text>

          <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }}>
            How Long We Retain Your Data
          </Heading>
          <Text fontSize="lg">
            If you leave a comment, the comment and its metadata are retained
            indefinitely. This is so we can recognize and approve any follow-up
            comments automatically instead of holding them in a moderation
            queue.
          </Text>
          <Text fontSize="lg">
            For users that register on our website (if any), we also store the
            personal information they provide in their user profile. All users
            can see, edit, or delete their personal information at any time
            (except they cannot change their username). Website administrators
            can also see and edit that information.
          </Text>

          <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }}>
            What Rights You Have Over Your Data
          </Heading>
          <Text fontSize="lg">
            If you have an account on this site, or have left comments, you can
            request to receive an exported file of the personal data we hold
            about you, including any data you have provided to us. You can also
            request that we erase any personal data we hold about you. This does
            not include any data we are obliged to keep for administrative,
            legal, or security purposes.
          </Text>

          <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }}>
            Where We Send Your Data
          </Heading>
          <Text fontSize="lg">
            Visitor comments may be checked through an automated spam detection
            service.
          </Text>

          <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }}>
            Your Contact Information
          </Heading>

          <Heading as="h2" fontSize={{ base: "2xl", md: "3xl" }}>
            Additional Information
          </Heading>
          <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }}>
            How We Protect Your Data
          </Heading>

          <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }}>
            What Data Breach Procedures We Have in Place
          </Heading>

          <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }}>
            What Third Parties We Receive Data From
          </Heading>

          <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }}>
            What Automated Decision Making and/or Profiling We Do with User Data
          </Heading>

          <Heading as="h3" fontSize={{ base: "xl", md: "2xl" }}>
            Industry Regulatory Disclosure Requirements
          </Heading>
        </Stack>
    </Box>
  );
};

export default PrivacyPolicy;
