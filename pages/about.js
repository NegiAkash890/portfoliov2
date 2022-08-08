import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import dummyData from '../common/dummy.json';

function about() {
  const info = dummyData.section;
  return (
    <>
     
      <Box
        alignItems="center"
        display={{sm: "block", base:"block", md:"flex"}}
        p={["4","4","10"]}
        justifyContent="center"
        maxW={1000}
        my={["10","10","60"]}
        mx="auto"
        width={"100%"}
        
        
      >
        <Image src="./profile.jpg" width={420} height={440} objectFit="contain" alt="profile-image" mr={20}/>
        <Box ml={[1, 2, 4]} mt={[5, 0, 0]}>
          <Heading fontSize={["3rem", "3rem","5rem"]}>{info[0]["section_title"]}</Heading>
          <Text fontSize={["1rem", "1.5rem", "1.5rem"]} fontWeight="light" display={"block"} width="100%">
            {info[0]["section_summary"]}
          </Text>
        </Box>
      </Box>
      <Box
        alignItems="center"
        display={{sm: "block", base:"block", md:"flex"}}
        p={["4","4","10"]}
        justifyContent="center"
        maxW={1000}
        my={["10","10","60"]}
        mx="auto"
        width={"100%"}
      >
        <Box  display={{sm: "block", base:"block", md:"flex"}} p={[2,3,4]} justifyContent="space-between">
          <Box>
            <Heading mb={4}>{info[1]["section_title"]}</Heading>
            <Text fontSize={["1rem", "1.5rem", "1.5rem"]}  fontWeight="light">
              {info[1]["section_summary"]}
            </Text>
          </Box>
          <Box mt={12} ml={[0, 5, 5]} minW="400px">
            <Flex gap={3} wrap="wrap">
              {
                 info[1].technologies.map((tech, index) => {
                 return  (<Badge
                   key={index}
                  w={20}
                  textAlign="center"
                  p={2}
                  variant="outline" 
                  bg={index % 2 ? "black" : "#eee"}
                  color={index % 2 ? "#eee" : "black"}
               
                >
                 {tech}
                </Badge>)
                })
              }
            </Flex>
          </Box>
        </Box>
      </Box>
      <Box  
        alignItems="center"
        p={["4","4","10"]}
        justifyContent="center"
        maxW={1000}
        my={["10","10","50"]}
        mx="auto"
        width={"100%"}>
        <Heading mb={4}>{info[2][`section_name`]}</Heading>
        <Box gap={10} mt={10} display={{sm: "block", base:"block", md:"flex"}} alignItems="center" justifyContent="center" wrap={"wrap"}>
        <Box mt={10} minW="300"  display={{sm: "flex", base:"flex", md:"block"}}>
          <Image src="https://fakeimg.pl/150x150/" borderRadius={"100px"} alt="fallback-image"/>
          <Box ml={3} mt={4} lineHeight="1.5">
            <Text fontWeight="medium" fontSize="1.5rem">
              Dia Mirza
            </Text>
            <Text fontWeight={"thin"} fontSize={["0.8rem","1rem","1rem"]}>
              Software Developer @ Microsoft
            </Text>
          </Box>
        </Box>
        <Box>
          <Text mt={["10","0","0"]} fontSize={["0.8rem","1rem","1rem"]}>
            Akash is a very skilled at all things UX design, consistently producing
            intuitive, modern, and bold designs. He is a natural problem solver
            in the design space so everyone went to him if they were stuck on a
            feature or flow. He has a arsenal of design skills including
            animation and graphic design. Not to mention, Seb was a design team
            lead, which means he managed a full team of both onshore and
            offshore designs reviewing and providing feedback on all of their
            designs... Any business would be lucky to have him.
          </Text>
        </Box>
        </Box>
      </Box>
      <Button mr={["2","0","0"]} float={'right'} variant={'outline'} bg='black' color={'white'} px={10} py={5} borderRadius='none' mb={10}>Work</Button>
    </>
  );
}

export default about;
