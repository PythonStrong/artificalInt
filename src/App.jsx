import { useState } from 'react'
import Navbar from './components/Navbar'
import { Box } from '@chakra-ui/react'
import Hero from './components/Hero'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box px={{md:'100px', base:'10px'}}>
      <Navbar />
      <Hero />
      <Main />
      <Footer />
    </Box>
  )
}

export default App