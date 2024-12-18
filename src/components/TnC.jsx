import React from 'react';
import {
  Box,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Divider,
  VStack,
} from '@chakra-ui/react';

const TnC = () => {
  return (
    <Box p={{ base: 4, md: 8 }} maxW="container.lg" mx="auto">
      <VStack align="stretch" spacing={4}>
        <Heading as="h2" size="lg" textAlign="center">
          <strong>Terms and Conditions</strong>
        </Heading>

        <Text>Welcome to Train2Trade!</Text>

        <Text>
          These terms and conditions outline the rules and regulations for the use of Train2Trade’s
          Website, located at online.train2trade.co.in.
        </Text>

        <Text>
          By accessing this website, we assume you accept these terms and conditions. Do not continue
          to use Train2Trade if you do not agree to take all of the terms and conditions stated on
          this page.
        </Text>

        <Text>
          The following terminology applies to these Terms and Conditions, Privacy Statement, and
          Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person
          log on this website and compliant to the Company’s terms and conditions. “The Company”,
          “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”,
          refers to both the Client and ourselves. All terms refer to the offer, acceptance, and
          consideration of payment necessary to undertake the process of our assistance to the
          Client in the most appropriate manner for the express purpose of meeting the Client’s
          needs in respect of the provision of the Company’s stated services, in accordance with and
          subject to, prevailing law of Netherlands. Any use of the above terminology or other words
          in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable
          and therefore as referring to same.
        </Text>

        <Heading as="h3" size="md">
          <strong>Cookies</strong>
        </Heading>
        <Text>
          We employ the use of cookies. By accessing Train2Trade, you agreed to use cookies in
          agreement with the Train2Trade’s Privacy Policy.
        </Text>
        <Text>
          Most interactive websites use cookies to let us retrieve the user’s details for each visit.
          Cookies are used by our website to enable the functionality of certain areas to make it
          easier for people visiting our website. Some of our affiliate/advertising partners may
          also use cookies.
        </Text>

        <Heading as="h3" size="md">
          <strong>License</strong>
        </Heading>
        <Text>
          Unless otherwise stated, Train2Trade and/or its licensors own the intellectual property
          rights for all material on Train2Trade. All intellectual property rights are reserved. You
          may access this from Train2Trade for your own personal use subjected to restrictions set
          in these terms and conditions.
        </Text>

        <Text>You must not:</Text>
        <UnorderedList>
          <ListItem>Republish material from Train2Trade</ListItem>
          <ListItem>Sell, rent or sub-license material from Train2Trade</ListItem>
          <ListItem>Reproduce, duplicate or copy material from Train2Trade</ListItem>
          <ListItem>Redistribute content from Train2Trade</ListItem>
        </UnorderedList>

        <Text>This Agreement shall begin on the date hereof.</Text>

        <Text>
          Parts of this website offer an opportunity for users to post and exchange opinions and
          information in certain areas of the website. Train2Trade does not filter, edit, publish or
          review Comments prior to their presence on the website. Comments do not reflect the views
          and opinions of Train2Trade, its agents and/or affiliates. Comments reflect the views and
          opinions of the person who posts their views and opinions. To the extent permitted by
          applicable laws, Train2Trade shall not be liable for the Comments or for any liability,
          damages, or expenses caused and/or suffered as a result of any use of and/or posting of
          and/or appearance of the Comments on this website.
        </Text>

        <Text>
          Train2Trade reserves the right to monitor all Comments and to remove any Comments which
          can be considered inappropriate, offensive or causes breach of these Terms and Conditions.
        </Text>

        <Text>You warrant and represent that:</Text>
        <UnorderedList>
          <ListItem>
            You are entitled to post the Comments on our website and have all necessary licenses and
            consents to do so;
          </ListItem>
          <ListItem>
            The Comments do not invade any intellectual property right, including without
            limitation copyright, patent or trademark of any third party;
          </ListItem>
          <ListItem>
            The Comments do not contain any defamatory, libelous, offensive, indecent, or otherwise
            unlawful material which is an invasion of privacy;
          </ListItem>
          <ListItem>
            The Comments will not be used to solicit or promote business or custom or present
            commercial activities or unlawful activity.
          </ListItem>
        </UnorderedList>

        <Text>
          You hereby grant Train2Trade a non-exclusive license to use, reproduce, edit and authorize
          others to use, reproduce and edit any of your Comments in any and all forms, formats, or
          media.
        </Text>

        <Heading as="h3" size="md">
          <strong>Hyperlinking to our Content</strong>
        </Heading>
        <Text>The following organizations may link to our Website without prior written approval:</Text>
        <UnorderedList>
          <ListItem>Government agencies;</ListItem>
          <ListItem>Search engines;</ListItem>
          <ListItem>News organizations;</ListItem>
          <ListItem>
            Online directory distributors may link to our Website in the same manner as they
            hyperlink to the Websites of other listed businesses; and
          </ListItem>
          <ListItem>
            System wide Accredited Businesses except soliciting non-profit organizations, charity
            shopping malls, and charity fundraising groups which may not hyperlink to our Website.
          </ListItem>
        </UnorderedList>

        <Divider />

        <Text>
          If you are one of the organizations listed above and are interested in linking to our
          website, you must inform us by sending an email to Train2Trade. Please include your name,
          organization name, and contact information.
        </Text>
      </VStack>
    </Box>
  );
};

export default TnC;
