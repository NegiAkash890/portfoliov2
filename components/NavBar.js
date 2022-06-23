import { Box, Button, Flex, Image, Link, List, ListItem, UnorderedList } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import useWindowDimensions from '../common/getDimension'
function about() {
    
  return (
    <>
    <Box  py={6} px={10} boxShadow='inner'  rounded='dark-lg' bg='#eee' zIndex={1001}>
        <Flex justifyContent="space-between">
            <Box>
                  <Image src='./logo.png' width='140px' height='70px' alt="Logo"/>              
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
    <Box></Box>
    </>
  )
}

export default about