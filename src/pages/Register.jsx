import React from 'react';
import {Grid, Box, Text, Image, Flex} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import '../assets/styles/icons.css';

const Register = () => (
    <Box justifyContent="flex-end" alignItems="center" width="100%">
        <Flex justifyContent="flex-end" width="100%" marginTop="-3rem">
        
        <Flex width="50%" marginLeft="5em" alignItems="center">
            <Link to="/" style={{width:'100%', display:'flex', textDecoration:'none'}}>
                <MdKeyboardArrowLeft className="return"></MdKeyboardArrowLeft>
                <Text fontWeight="bold" fontSize="xl" textColor="gray.400">Volver</Text>
            </Link>
        </Flex>

            <Flex 
            flexDirection="column"
            textAlign="end" 
            margin="6rem" 
            fontSize="2xl"
            width="50%"
            >

                <Text as="span" textColor="gray.400">Paso 01/03</Text>
                <Text as= "span" marginLeft="0.3rem" fontWeight="semibold" textColor="gray.600">Personal Info.</Text>

            </Flex>
        </Flex>

        <RegisterForm />

    </Box>
)

export default Register;