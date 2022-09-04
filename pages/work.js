import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Layout from "../components/layout";
import Timeline from "../components/timeline";
import timeLineData from '../common/timeline.json'
import projectData from '../common/projects.json';
import Head from "next/head";

function Work() {
  const [cardState, setCardState] = useState([false, false, false, false]);
  const [activeIndex ,setActiveIndex] = useState(0);


  const toggleState = (id) => {
    const newCardState = [...cardState];
    newCardState[id] = !cardState[id];
    setCardState(newCardState);
  };
  return (
    <Layout>
      <Head>
          <title>Work Experience</title>
      </Head>
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
          and a Software Engineer
        </Text>
        <Timeline activeIndex={activeIndex} data={timeLineData?.data} setActiveIndex={setActiveIndex}/>
        <Heading

          mt={"20"}
          w="100%"
          width={{ base: "100%", md: "30%" }}
        >
          Projects
        </Heading>
        <Flex wrap={"wrap"} justifyContent="space-between" gap={4} mt={50}>
          { projectData?.data.map(( project, index ) => { return <Box
            p={4}
            key={index}
            position={"relative"}
            bg="black"
            width={"490px"}
            height={"300px"}
            borderRadius="1rem"
            _hover={{ opacity: "0.95" }}
            color="white"
            alignItems={"center"}
            justifyContent="center"
            display={"flex"}
            cursor="pointer"
            onClick={() => toggleState(index)}
          >
            {cardState[index] === false && (
              <Box textAlign={"center"}>
                <Heading bg="black">{project?.title}</Heading>

                <Text bg="black" color={"grey"}>
                  Tap to view
                </Text>
              </Box>
            )}
            {cardState[index] === true && (
              <Box
                position={"absolute"}
                bg="black"
                top={"10%"}
                left="10%"
                maxW="80%"
              >
                <Heading bg="black" fontSize={"2rem"}>
                  Work Experience
                </Heading>
                <Text bg="black" mt="5">
                    {project?.content}
                </Text>
              </Box>
            )}
          </Box>})}
      </Flex>
      </Box>
    
    </Layout>
  );
}

export default Work;
