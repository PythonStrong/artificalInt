import { Box, Heading, Image, Select, Text } from '@chakra-ui/react'
import React from 'react'
import { logo } from '../assets'
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin, FiYoutube } from "react-icons/fi";4
import { AiOutlineGlobal } from "react-icons/ai";

export default function Footer() {
    return (
        <Box bg='#08131f' display='flex' boxShadow='' justifyContent='space-between' mt={{ xl: '0', md: '70px', base: '110px' }} flexDir={{ xl: 'row', md: 'column', base: 'column' }} gap={{ xl: '20px', md: '40px', base: '40px' }} pb='40px'>
            <Box display='flex' flexDir='column' alignItems='start' gap='20px'>
                <Image src={logo} w='30px' />
                <Text color='#3A68B8FF'>Artificial Intelligence</Text>
                <Text w='300px'>Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.</Text>
                <Text display='flex' alignItems='center' gap='4px' cursor='pointer'> <CgMail size={25} /> Company@gmail.com.com</Text>
                <Text display='flex' alignItems='center' gap='4px' cursor='pointer'> <FaPhoneAlt /> Phone: (064) 332-1233</Text>
                <Text display='flex' alignItems='center' gap='4px' cursor='pointer'> <IoLocationOutline size={20} />  450 Wall Street, USA, New York</Text>
            </Box>
            <Box w='300px' display='flex' flexDir='column' alignItems='start' gap='20px'>
                <Heading size='md'>INFORMATION</Heading>
                <Text fontSize='14px' color='#979AA0FF' cursor='pointer'>New Collection</Text>
                <Text fontSize='14px' color='#979AA0FF' cursor='pointer'>About Store</Text>
                <Text fontSize='14px' color='#979AA0FF' cursor='pointer'>Contact Us</Text>
                <Text fontSize='14px' color='#979AA0FF' cursor='pointer'>Latest News</Text>
                <Text fontSize='14px' color='#979AA0FF' cursor='pointer'>Our Sitemap</Text>
                <Text fontSize='14px' color='#979AA0FF' cursor='pointer'>Orders History</Text>
                <Text fontSize='14px' color='#979AA0FF' cursor='pointer'>About Store</Text>
            </Box>
            <Box w='300px' display='flex' flexDir='column' alignItems='start' gap='20px'>
                <Heading size='md'>FOOTER MENU</Heading>
                <Text fontSize='14px' color='#979AA0FF' cursor='pointer'>Instagram profile</Text>
                <Text fontSize='14px' color='#979AA0FF' cursor='pointer'>New Collection</Text>
                <Text fontSize='14px' color='#979AA0FF' cursor='pointer'>Contact Us</Text>
                <Text fontSize='14px' color='#979AA0FF' cursor='pointer'>Latest News</Text>
                <Text fontSize='14px' color='#979AA0FF' cursor='pointer'>Terms & Conditions</Text>
                <Text fontSize='14px' color='#979AA0FF' cursor='pointer'>Purchase Theme</Text>
                <Text fontSize='14px' color='#979AA0FF' cursor='pointer'>About Store</Text>
            </Box>
            <Box w='300px' display='flex' flexDir='column' alignItems='start' gap='20px'>
                <Heading size='md'>USEFUL LINKS</Heading>
                <Text fontSize='14px' color='#979AA0FF' cursor='pointer'>Instagram profile</Text>
                <Text fontSize='14px' color='#979AA0FF' cursor='pointer'>New Collection</Text>
                <Text fontSize='14px' color='#979AA0FF' cursor='pointer'>Contact Us</Text>
                <Text fontSize='14px' color='#979AA0FF' cursor='pointer'>Latest News</Text>
                <Text fontSize='14px' color='#979AA0FF' cursor='pointer'>Terms & Conditions</Text>
                <Text fontSize='14px' color='#979AA0FF' cursor='pointer'>Purchase Theme</Text>
                <Text fontSize='14px' color='#979AA0FF' cursor='pointer'>Terms & Conditions</Text>
            </Box>
            <Box w='300px' display='flex' flexDir='column' alignItems='start' gap='20px'>
                <Heading size='md'>ABOUT THE STORE</Heading>
                <Text fontSize='14px' color='#979AA0FF'>Lorem ipsum is placeholder text commonly used in the graphic, print, and layouts and visual mockups.</Text>
                <Text>www.company.com</Text>

                <Box display='flex' alignItems='center' gap='7px' cursor='pointer'>
                    <FiFacebook size={30} />
                    <FiInstagram size={30} />
                    <FiTwitter size={30} />
                    <FiLinkedin size={30} />
                    <FiYoutube size={30} />
                </Box>

                <Box display='flex' alignItems='center' gap='4px'>
                    <AiOutlineGlobal size={30}/>
                    <Select placeholder='English' border='none'>
                        <option value='option1' color='black'>Russian</option>
                        <option value='option2' color='black'>Uzbekistan</option>
                    </Select>
                </Box>
            </Box>
        </Box>
    )
}

