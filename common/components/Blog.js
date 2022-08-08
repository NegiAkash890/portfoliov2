import { Box, GridItem, Heading, Text } from '@chakra-ui/react'
import React from 'react'

function Blog({date, category, title}) {
  return (
    <GridItem m={"3"} minW={"400"} maxW={"500"} height={"250"} border={"1px solid black"} colSpan={1} p={4}>
        <Box mb={"4"} display={"flex"} justifyContent="space-between">
            <Text color="gray" as={"h4"}>{title}</Text>
            <Text color="gray" as={"h4"}>{date}</Text>
        </Box>
        <Box>
          
             <span style={{marginRight:"0.8rem" , backgroundColor:"pink", padding:"0.2rem"}} >{category}</span> 
           
        </Box>
       
    </GridItem>
  )
}

export default Blog