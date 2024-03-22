import { Box, Button, Heading, Image, Text } from '@chakra-ui/react'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { MainFirstImage, MainSecondImage, MainThirdImage } from '../assets'

export default function Main() {
    return (
        <Box>
            <Box display='flex' alignItems='center' justifyContent='space-between' height='100vh' flexDir={{ xl: 'row', md: 'column', base: 'column' }}>    
                <Image src={MainFirstImage} h='600px' />
                <Box display='flex' flexDir='column' alignItems='start' gap='30px' w={{ md: '500px', base: '100%' }}>
                    <Heading>Apply AI, Deep Learning and Data Sciece to solve</Heading>
                    <Text>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, nulla.</Text>
                    <Button bg='#3A68B8FF' color='white' _hover={false} className='btn'>Learn More</Button>
                </Box>
            </Box>

            <Box h='70vh' display='flex' alignItems='center' justifyContent={'center'}>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    breakpoints={{
                        600: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        800: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        900: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1000: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1124: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Box w={{ xl: '360px', md: '300px', base: '100%' }} padding='20px' display='flex' alignItems='center' flexDir='column' textAlign='center' gap='4px' className='card'>
                            <Image src={MainSecondImage} />
                            <Heading size='lg'>Naxly as the Winners in Global Agency Awards</Heading>
                            <Text fontSize='14px' w='90%'>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</Text>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box w={{ xl: '360px', md: '300px', base: '100%' }} padding='20px' display='flex' alignItems='center' flexDir='column' textAlign='center' gap='4px' className='card'>
                            <Image src={MainSecondImage} />
                            <Heading size='lg'>Naxly as the Winners in Global Agency Awards</Heading>
                            <Text fontSize='14px' w='90%'>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</Text>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box w={{ xl: '360px', md: '300px', base: '100%' }} padding='20px' display='flex' alignItems='center' flexDir='column' textAlign='center' gap='4px' className='card'>
                            <Image src={MainSecondImage} />
                            <Heading size='lg'>Naxly as the Winners in Global Agency Awards</Heading>
                            <Text fontSize='14px' w='90%'>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</Text>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box w={{ xl: '360px', md: '300px', base: '100%' }} padding='20px' display='flex' alignItems='center' flexDir='column' textAlign='center' gap='4px' className='card'>
                            <Image src={MainSecondImage} />
                            <Heading size='lg'>Naxly as the Winners in Global Agency Awards</Heading>
                            <Text fontSize='14px' w='90%'>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</Text>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box w={{ xl: '360px', md: '300px', base: '100%' }} padding='20px' display='flex' alignItems='center' flexDir='column' textAlign='center' gap='4px' className='card'>
                            <Image src={MainSecondImage} />
                            <Heading size='lg'>Naxly as the Winners in Global Agency Awards</Heading>
                            <Text fontSize='14px' w='90%'>Lorem ipsum is placeholder text commonly used in print, and publishing industries for previewing layouts and visual mockups.</Text>
                        </Box>
                    </SwiperSlide>

                </Swiper>
            </Box>

            <Box display='flex' alignItems='center' justifyContent='space-between' h='100vh' flexDir={{xl:'row', md:'column', base:'column'}}>
                    <Box display='flex' alignItems='start' flexDir={'column'} gap='20px' w={{md:'500px', base:'100%'}}>
                        <Heading>What our clients say about our awesome solutions</Heading>
                        <Text>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it who do not know.</Text>
                        <Text>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing .</Text>
                        <Text>Lorem ipsum is placeholder previewing layouts and visual mockups.</Text>
                        <Text>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Text>
                    </Box>
                    <Image src={MainThirdImage}/>
            </Box>
        </Box>
    )
}
