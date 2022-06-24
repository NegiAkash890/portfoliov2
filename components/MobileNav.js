import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Image, Input, Link, useDisclosure } from "@chakra-ui/react"
import { useRef } from "react";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

function DrawerExample({ setDrawerState }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size="full"
        
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Portfolio</DrawerHeader>

          <DrawerBody display={"flex"} flexDir="column" fontSize={"2rem"} textAlign="center" gap={10}>
                <Link>Work</Link>
                <Link>About</Link>
                <Link>Connect</Link>
          </DrawerBody>
          <DrawerFooter display={"flex"} flexDir="row" justifyContent={"space-between"} alignItems="center">
          <Image  top={"80%"} left={"85%"} fill="#eee" src="./medium.png" w={"8"} h={"8"} alt="medium"/>
          <Image  top={"80%"} left={"85%"} fill="#eee" src="./linkedin_icon.svg" w={"8"} h={"8"} alt="medium"/>
          </DrawerFooter>
        </DrawerContent>

      </Drawer>
      <Box
        pt={2}
        pb={2}
        display={{ md: "none" }}
        boxShadow="inner"
        bg="#eee"
        position="fixed"
        width={"100vw"}
        height="80px"
        zIndex={1}
        top={0}
        left={0}
      >
        <Flex justifyContent="space-between" alignItems={"center"} w="100%">
          <Box mx={"auto"}>
            <Image src="./logo.png" width="140px" height="70px" alt="Logo" />
          </Box>
          <Button float={"right"}>
            <HamburgerIcon w={8} h={8} onClick={onOpen} />

          </Button>
        </Flex>
      </Box>
    </>
  )
}

export default DrawerExample;