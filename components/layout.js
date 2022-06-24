import { HamburgerIcon } from "@chakra-ui/icons";
import { useRouter } from 'next/router'

import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import MobileNav from './MobileNav';
function About(props) {
  const router = useRouter()
  return (
    <>
      <Box
        display={{ base: "none", md: "block" }}
        boxShadow="inner"
        px={8}
        bg="#eee"
        position="fixed"
        width={"100%"}
        height="80px"
        top={0}
        left={0}
        zIndex={"1001"}
      >
        <Flex justifyContent="space-between" alignItems={"center"}>
          <Box>
            <Image src="./logo.png" width="140px" height="70px" alt="Logo" />
          </Box>
          <Box fontWeight="semibold">
            <Link mr={4} onClick={() => {
                router.push('/')
              }}>About</Link>
            <Button bg="black" color="white">
              <Link onClick={() => {
                router.push('/work')
              }}>Work</Link>
            </Button>

            <Link ml={5} onClick={() => {
                router.push('/contact')
              }}>Contact</Link>
          </Box>
        </Flex>
      </Box>
      <MobileNav />
      {props.children}
    </>
  );
}

export default About;
