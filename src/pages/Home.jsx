import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import RoleForm from '../components/RoleForm';

const Home = () => (
    <Box>
        <Text 
        textAlign="end" 
        margin="6rem" 
        fontSize="2xl" 
        textColor="gray.600">

            Ya tienes cuenta? 
            <Text as= "span" textColor="rgba(76, 175, 80)" marginLeft="0.3rem">Inicia sesión</Text>

        </Text>

        <RoleForm />

    </Box>
);

export default Home;