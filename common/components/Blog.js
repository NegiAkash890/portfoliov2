import { AttachmentIcon } from '@chakra-ui/icons'
import { Box, GridItem, Heading, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

function Blog({date, category, title, slug}) {
  const router = useRouter();
  return (
    <GridItem cursor={"pointer"} m={"3"} minW={"400"} maxW={"500"} height={"250"} border={"1px solid black"} colSpan={1} p={4} onClick={() => router.push(`/blogs/${slug}`)}>
        <Box mb={"4"} display={"flex"} justifyContent="space-between">
            <Text color="gray" as={"h4"}>{title}</Text>
            <Text color="gray" as={"h4"}>{date}</Text>
        </Box>
        <Box>
          
             <span style={{marginRight:"0.8rem" ,padding:"0.2rem"}} > <AttachmentIcon color={"red.300"}/> {category}</span> 
           
        </Box>
       
    </GridItem>
  )
}

export default Blog