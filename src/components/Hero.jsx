import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { HeroIMage, MarqueLogo, MarqueLogoFirst, MarqueLogoSecond, MarqueLogoThird } from '../assets'
import Marquee from 'react-fast-marquee'
import { FaPlay } from 'react-icons/fa6'

export default function Hero() {
    return (
        <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
            <Box display='flex' alignItems='center' justifyContent='space-between' w='100%' flexDir={{ xl: 'row', md: 'column', base: 'column' }} h={{ xl: '100vh', md: '100%', base: '100%' }}>
                <Box display='flex' w={{ md: '600px', base: '100%' }} flexDirection='column' gap='30px'>
                    <Text color='#3A68B8FF' fontWeight='600'>Next genaretion platform</Text>
                    <Heading size={'3xl'}>Artificial intelligence & Syber security</Heading>
                    <Text>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Text>
                    <Box display='flex' alignItems='center' gap='20px'>
                        <Button bg='#3A68B8FF' color='white' _hover={false} className='btn'>Get Started</Button>
                        <Button bg='#3A68B8FF' color='white' _hover={false} className='btn' display='flex' alignItems='center' gap='4px'> <FaPlay />  Watch Video</Button>
                    </Box>
                </Box>
                <Image src={HeroIMage} />
            </Box>

            <Marquee autoFil pauseOnClick>
                <Box display='flex' alignItems='center' gap='120px' mt='70px'>
                    <Image src={MarqueLogo} />
                    <Image src={MarqueLogoFirst} />
                    <Image src={MarqueLogoSecond} />
                    <Image src={MarqueLogoThird} />
                    <Image src={MarqueLogo} />
                    <Image mr='40px' src={MarqueLogoSecond} />
                </Box>
            </Marquee>
        </Box>
    )
}
