import React from 'react';
import {Grid, Box, Text, Image, Flex} from '@chakra-ui/react';
import Return from '../components/Return';
import RegisterForm from '../components/RegisterForm';

const Register = () => (
    <Box justifyContent="flex-end" alignItems="center" width="100%">
        <Flex justifyContent="flex-end" width="100%" marginTop="-3rem">
            <Return />
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