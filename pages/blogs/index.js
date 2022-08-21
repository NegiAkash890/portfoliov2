import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";
import Blog from "../../common/components/Blog";
import Layout from "../../components/layout";
import dummyData from '../../common/dummy.json';


function contact() {
  const blogtitle = ['Blog1' , 'Blog2', 'Blog3', 'Blog4', 'Blog5', 'Blog6'];
  console.log(dummyData);
  return (
    <Layout>
      <Box maxW={1600} mt={40} mx="auto" p={[1,0,0]} display="flex" justifyContent={"center"} flexDir="column" alignItems={"center"}>
          <Heading mb={4} fontSize={"3rem"}>Journal</Heading>
          <Box>
            <Text fontSize={["1rem", "1.5rem", "1.5rem"]} fontWeight="light" display={"block"} width="100%">
              Writing is a hobby that I enjoy spend time on. 
            </Text>
          </Box>
          <Box display={"flex"} flexWrap="wrap" alignItems={"center"} justifyContent={"center"}>
            {
              dummyData.blog.map((blog,index) => {
                  return <Blog key={index} title={blog.title} date={blog.published} category={blog.tags} slug={blog.slug} />
              })
            }
          </Box>
      </Box>
    </Layout>
  );
}

export default contact;
