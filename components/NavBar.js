import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Link,
  List,
  ListItem,
  Text,
  UnorderedList,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import useWindowDimensions from "../common/getDimension";
function About() {
const { isOpen, onOpen, onClose } = useDisclosure();
const btnRef = React.useRef()

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
      >
        <Flex justifyContent="space-between" alignItems={"center"}>
          <Box>
            <Image src="./logo.png" width="140px" height="70px" alt="Logo" />
          </Box>
          <Box fontWeight="semibold">
            <Link mr={4}>About</Link>
            <Button bg="black" color="white">
              <Link>Work</Link>
            </Button>

            <Link ml={5}>Contact</Link>
          </Box>
        </Flex>
      </Box>
      <Box
       pt={2}
       pb={2}
        display={{ md: "none" }}
        boxShadow="inner"
        bg="#eee"
        position="fixed"
        width={"100%"}
        height="80px"
        zIndex={20010}
        top={0}
        left={0}
      >
        <Flex justifyContent="space-between" alignItems={"center"} w="100%">
          <Box mx={"auto"}>
            <Image src="./logo.png" width="140px" height="70px" alt="Logo" />
          </Box>
          <Button float={"right"}>
            <HamburgerIcon w={8} h={8} onClick={onOpen} ref={btnRef}/>
         
          </Button>
          {/* <Flex w={"100%"} zIndex="10000" pos={"fixed"}>
              <Drawer
                isOpen={isOpen}
              
                onClose={onClose}
              >
                <DrawerOverlay />
                <DrawerContent alignItems="center">
                  <DrawerCloseButton alignSelf="end" />
                  <DrawerHeader >
                    <Text as="p"> Title </Text>
                  </DrawerHeader>
                  <DrawerBody>children</DrawerBody>
                  <DrawerFooter>footer</DrawerFooter>
                </DrawerContent>
              </Drawer>
            </Flex> */}

          {/* <Box fontWeight="semibold">
                <Link mr={4}>About</Link>
                <Button bg="black" color="white">
                    <Link>Work</Link>
                </Button>
              
                <Link ml={5}>Contact</Link>
            </Box> */}
        </Flex>
      </Box>
    </>
  );
}

export default About;
