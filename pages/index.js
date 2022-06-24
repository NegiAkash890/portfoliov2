import { Box, Image } from '@chakra-ui/react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import About from './about'
import Contact from './contact'
import Work from './work'
import Layout from '../components/layout'
export default function Home() {
  return (
    <Layout>

    <Box  maxW={1000} my={10} mx="auto">
      <About />
      {/* <Contact />
      <Work /> */}
    </Box>
    </Layout>
  )
}
