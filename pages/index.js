import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import About from './about'
import Contact from './contact'
import Work from './work'
import NavBar from '../components/NavBar'
export default function Home() {
  return (
    <>
    <NavBar />
    <Box  maxW={1000}
    my={10} mx="auto">
      <About />
      {/* <Contact />
      <Work /> */}
    </Box>
    </>
  )
}
