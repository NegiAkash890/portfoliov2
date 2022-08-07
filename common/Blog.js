import { Box, GridItem, Heading, Text } from '@chakra-ui/react'
import React from 'react'

function Blog({data, date, category}) {
  return (
    <GridItem m={"3"} minW={"400"} maxW={"500"} height={"250"} border={"1px solid black"} colSpan={1} p={4}>
        <Text color="gray" as={"h4"}>{date}</Text>
        <Text fontSize={"2xl"} fontWeight="medium">{data}</Text>
        <Text fontWeight={"thin"} >{category}</Text>
    </GridItem>
  )
}

export default Blog