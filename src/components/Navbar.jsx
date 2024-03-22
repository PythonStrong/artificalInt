import { Box, Button, Image, Link, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { logo } from '../assets'
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseSharp } from 'react-icons/io5';

export default function Navbar() {
  const [show, setShow] = useState(false)

  const showModal = () => setShow(true)
  const HideModal = () => setShow(false)
  return (
    <Box>
      <Box display={{ md: 'flex', base: 'none' }} alignItems='center' justifyContent='space-between'>
        <Box display='flex' alignItems='center' gap='4px'>
          <Image src={logo} />
          <Text color='#3A68B8FF'>Artificial Intelligence</Text>
        </Box>

        <Box display='flex' alignItems='center' gap='30px'>
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Services</Link>
          <Link>Blog</Link>
          <Link>Contact</Link>
        </Box>

        <Button bg='#3A68B8FF' color='white' _hover={false} className='btn'>Sign In</Button>
      </Box>


      {show ? '' :
        <Box display={{ md: 'none', base: 'flex' }} alignItems='center' justifyContent='space-between' mb='70px'>
          <Box display='flex' alignItems='center' gap='4px'>
            <Image src={logo} />
            <Text color='#3A68B8FF'>Artificial Intelligence</Text>
          </Box>
          <Button onClick={showModal} bg='transparent' _active={false} color='white'> <FaBarsStaggered size={30} /> </Button>
        </Box>}

      {show ? <Box h='100vh' w='100%' bg={'#09111E'} position='fixed' zIndex='999' px='0'>
        <Box display='flex' alignItems='center' justifyContent='center' h='100vh' gap='30px' flexDir='column'>
          <Button bg='transparent' color='white' pos='absolute' top='8px' right='20px'  _active={false} onClick={HideModal}><IoCloseSharp size={30}/>  </Button>
          <Link fontSize='32px'>Home</Link>
          <Link fontSize='32px'>About</Link>
          <Link fontSize='32px'>Services</Link>
          <Link fontSize='32px'>Blog</Link>
          <Link fontSize='32px'>Contact</Link>
        </Box>
      </Box> : ''}
    </Box>
  )
}
