import { useRouter } from "next/router";
import Head from 'next/head';
import { Box, Button, Flex, Image, Link } from "@chakra-ui/react";
import React from "react";
import MobileNav from "./MobileNav";
function About(props) {
  const router = useRouter();
  return (
    <>
      <Head>
          <title>Akash Negi</title>
      </Head>
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
            <Image
              cursor={"pointer"}
              onClick={() => router.push("/")}
              src="/logo.png"
              width="140px"
              height="70px"
              alt="Logo"
              mt={4}
            />
          </Box>
          <Box fontWeight="semibold">
            <Button
              bg={"none"}
              _hover={{
                bg: "none",
              }}
              onClick={() => {
                router.push("/");
              }}
              style={
                router.pathname == "/"
                  ? { backgroundColor: "black", color: "white" }
                  : {}
              }
            >
              About
            </Button>
            <Button
              bg={"none"}
              _hover={{
                bg: "none",
              }}
              onClick={() => {
                router.push("/work");
              }}
              style={
                router.pathname == "/work"
                  ? { backgroundColor: "black", color: "white" }
                  : {}
              }
            >
              Work
            </Button>
            <Button
              bg={"none"}
              _hover={{
                bg: "none",
              }}
              onClick={() => {
                router.push("/blogs");
              }}
              style={
                router.pathname == "/blogs"
                  ? { backgroundColor: "black", color: "white" }
                  : {}
              }
            >
              <Link>Blogs</Link>
            </Button>
          </Box>
        </Flex>
      </Box>
      <MobileNav />
      {props.children}
    </>
  );
}

export default About;
