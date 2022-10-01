import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import dummyData from '../common/dummy.json';

function about() {
  const info = dummyData.section;
  const customIconHover = {
    color: "black"
  }
  const sliderSettings = {
    infinite: false,
    dots: true,
    autoplay: false,
    prevArrow: <ChevronLeftIcon  w={10} h={10} _hover={customIconHover} />,
    nextArrow: <ChevronRightIcon  w={10} h={10} _hover={customIconHover} sx={{'.slick-disabled' : {color: "transparent"}}} />,
    
  }
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
        my={["10","10","50"]}
      >
        <Heading mb={4}>{info[2][`section_name`]}</Heading>
        <Slider
          {...sliderSettings}
        >
          
          {info[2].testimonials.map(testimonial => (
            <Box 
            key={testimonial.name}
            alignItems="center"
            p={["4","4","10"]}
            justifyContent="center"
            maxW={1000}
            
            mx="auto"
            width={"100%"}>
            
            <Box gap={10}  display={{sm: "block", base:"block", md:"flex"}} alignItems="center" justifyContent="center" wrap={"wrap"}>
            <Box mt={10} minW="300"  display={{sm: "flex", base:"flex", md:"block"}}>
              <Image src={testimonial.pic} borderRadius={"100px"} alt="fallback-image"/>
              <Box ml={3} mt={4} lineHeight="1.5">
                <Text fontWeight="medium" fontSize="1.5rem">
                  {testimonial.name}
                </Text>
                <Text fontWeight={"thin"} fontSize={["0.8rem","1rem","1rem"]}>
                  {testimonial.role}
                </Text>
              </Box>
            </Box>
            <Box>
              <Text mt={["10","0","0"]} fontSize={["0.8rem","1rem","1rem"]}>
                {testimonial.feedback}
              </Text>
            </Box>
            </Box>
          </Box>
          ))}
        </Slider>
      </Box>
      <Button mr={["2","0","0"]} float={'right'} variant={'outline'} bg='black' color={'white'} px={10} py={5} borderRadius='none' mb={10}>Work</Button>
    </>
  );
}

export default about;
