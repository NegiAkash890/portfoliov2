import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Layout from "../components/layout";
import Timeline from "../components/timeline";

function Work() {
  const [cardState, setCardState] = useState([false, false]);
  const [activeIndex ,setActiveIndex] = useState(0);
  const [data, setData] = useState([
    {
      date : "2018",
      content: "Cleared senior secondary education and joined NSUT East Campus, to pursue B.Tech in Electronics and Communication Engineering"
    },
    {
      date : "12-01-2022",
      content: "2- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      date : "13-01-2022",
      content: "3- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      date : "14-01-2022",
      content: "4- Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    
  ]);
  const toggleState = (id) => {
    const newCardState = [...cardState];
    newCardState[id] = !cardState[id];
    setCardState(newCardState);
  };
  return (
    <Layout>
      <Box maxW={1000} my={40} mx="auto" p={[3, 0, 0]}>
        <Heading fontSize={["3rem", "5rem", "5rem"]} fontWeight="medium">
          A student passionate about creating and experimenting with front-end
          technologies
        </Heading>
        <Text
          mt={4}
          fontSize={["1.5rem", "1.5rem", "2rem"]}
          fontWeight="light"
          color={"grey"}
        >
          or Software Developer
        </Text>
        <Timeline activeIndex={activeIndex} data={data} setActiveIndex={setActiveIndex}/>
        <Button
          variant={"solid"}
          bg="black"
          color={"white"}
          borderRadius="none"
          mt={"20"}
          w="100%"
          width={{ base: "100%", md: "30%" }}
        >
          View Work
        </Button>
        <Flex wrap={"wrap"} justifyContent="space-between" gap={4} mt={50}>
          <Box
            p={4}
            position={"relative"}
            bg="black"
            width={"490px"}
            height={"600px"}
            borderRadius="1rem"
            _hover={{ opacity: "0.95" }}
            color="white"
            alignItems={"center"}
            justifyContent="center"
            display={"flex"}
            cursor="pointer"
            onClick={() => toggleState(0)}
          >
            {cardState[0] === false && (
              <Box textAlign={"center"}>
                <Heading bg="black">upGrad</Heading>

                <Text bg="black" color={"grey"}>
                  Tap to view
                </Text>
              </Box>
            )}
            {cardState[0] === true && (
              <Box
                position={"absolute"}
                bg="black"
                top={"10%"}
                left="10%"
                maxW="80%"
              >
                <Heading bg="black" fontSize={"3.5rem"}>
                  Work Experience
                </Heading>
                <Text bg="black" mt="10">
                  Currently working on my @skills and looking for opportunities
                  to @learn Always up for new challenges, I have experience
                  working as an developer for growing startups. I have projects
                  from scratch and have driven projects to there successfully
                  completion
                </Text>
              </Box>
            )}
          </Box>
          <Box
            bg="black"
            width={"490px"}
            height={"600px"}
            borderRadius="1rem"
            _hover={{ opacity: "0.95" }}
            color="white"
            alignItems={"center"}
            justifyContent="center"
            cursor="pointer"
            display={"flex"}
            position={"relative"}
            onClick={() => toggleState(1)}
          >
            {cardState[1] === false && (
              <Box textAlign={"center"}>
                <Heading bg="black">Disecto</Heading>

                <Text bg="black" color={"grey"}>
                  Tap to view
                </Text>
              </Box>
            )}
           {cardState[1] === true && (
              <Box
                position={"absolute"}
                bg="black"
                top={"10%"}
                left="10%"
                maxW="80%"
              >
                <Heading bg="black" fontSize={"3.5rem"}>
                  Work Experience
                </Heading>
                <Text bg="black" mt="10">
                   TODO
                </Text>
              </Box>
            )}
        </Box>
      </Flex>
      </Box>
    
    </Layout>
  );
}

export default Work;
