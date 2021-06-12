
import React from 'react';
import {Grid, Box, Text, Image} from '@chakra-ui/react';
import assetImage from '../assets/static/Background.png';
import '../assets/styles/backgroundImage.css'

const ImageBackground = () => (
    <Box bg="rgba(76, 175, 80);" width="65vh" position="relative">
        <Text position="absolute" 
        transform="translate(-50%, -50%)" 
        top="55%" 
        left="60%" 
        textColor="rgba(255, 255, 255)" 
        fontSize="lg" 
        fontWeight="extrabold"
        width="xl">
            Nuwe es la plataforma que convierte el desarrollo<br></br>
            profesional, la búsqueda de trabajo y las conexiones<br></br>
            de personas y empresas en un juego.Haciendo<br></br>
            que puedes centrarte en lo que te gusta,<br></br>
            programar, diseñar, planear ...<br></br>
        </Text>
        <Image src={assetImage} alt="Background Image" opacity={0.1} width="100%"/>
    </Box>
)

export default ImageBackground;