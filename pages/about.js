import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
function about() {
  return (
    <>
     
      <Box
        alignItems="center"
        display="flex"
        justifyContent="space-between"
        maxW={1000}
        my={10}
        mx="auto"
        
      >
        <Image src="https://fakeimg.pl/420x440/" width={420} height={440} />
        <Box ml={4}>
          <Heading fontSize="80px">Hi there !</Heading>
          <Text fontSize="25px" fontWeight="light">
            Fuelled by a passion for designing compelling products, I have a
            deep desire to excel and continuously improve in my work. Learn more
            about my journey below.
          </Text>
        </Box>
      </Box>
      <Box
        alignItems="center"
        display="flex"
        justifyContent="space-between"
        maxW={1000}
        my={200}
        mx="auto"
      >
        <Box display="flex" justifyContent="space-between">
          <Box>
            <Heading mb={4}>My Career so far</Heading>
            <Text fontSize="20px" fontWeight="light">
              Always up for new challenges, I have experience working as an
              developer for growing startups. I have projects from scratch and
              have driven projects to there successfully completion
            </Text>
          </Box>
          <Box mt={10} ml={5} minW="400px">
            <Flex gap={3} wrap="wrap">
              <Badge
                _hover={{
                  backgroundColor: "black",
                  color: "#eee",
                }}
                w={20}
                textAlign="center"
                p={2}
                variant="outline"
                colorScheme="black"
                border="1px solid black"
              >
                html
              </Badge>
              <Badge
                bg="black"
                color="white"
                w={20}
                textAlign="center"
                p={2}
                variant="outline"
                colorScheme="black"
                border="1px solid black"
              >
                css
              </Badge>
              <Badge
                w={20}
                textAlign="center"
                p={2}
                variant="outline"
                colorScheme="black"
                border="1px solid black"
              >
                react
              </Badge>
              <Badge
                w={20}
                bg="black"
                color="white"
                textAlign="center"
                p={2}
                variant="outline"
                colorScheme="black"
                border="1px solid black"
              >
                redux
              </Badge>
              <Badge
                w={20}
                textAlign="center"
                p={2}
                variant="outline"
                colorScheme="black"
                border="1px solid black"
              >
                figma
              </Badge>
              <Badge
                w={20}
                bg="black"
                color="white"
                textAlign="center"
                p={2}
                variant="outline"
                colorScheme="black"
                border="1px solid black"
              >
                figma
              </Badge>
            </Flex>
          </Box>
        </Box>
      </Box>
      <Box maxW={1000} my={10} mx="auto">
        <Heading mb={4}>Impression Made</Heading>
        <Flex gap={10} mt={10} alignItems="center" justifyContent="center">
        <Box mt={10} minW="300">
          <Image src="https://fakeimg.pl/150x150/" borderRadius={"100px"} />
          <Box ml={3} mt={4} lineHeight="1.5">
            <Text fontWeight="medium" fontSize="1.5rem">
              Dia Mirza
            </Text>
            <Text fontWeight={"thin"} fontSize="1rem">
              Software Developer @ Microsoft
            </Text>
          </Box>
        </Box>
        <Box>
          <Text fontSize={"20px"}>
            "Sebastian is a guru at all things UX design, consistently producing
            intuitive, modern, and bold designs. He is a natural problem solver
            in the design space so everyone went to him if they were stuck on a
            feature or flow. He has a arsenal of design skills including
            animation and graphic design. Not to mention, Seb was a design team
            lead, which means he managed a full team of both onshore and
            offshore designs reviewing and providing feedback on all of their
            designs... Any business would be lucky to have him."
          </Text>
        </Box>
        </Flex>
      </Box>
      <Button float={'right'} variant={'outline'} bg='black' color={'white'} borderRadius='none' mb={10}>Work</Button>
    </>
  );
}

export default about;
