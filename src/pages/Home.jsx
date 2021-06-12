import React from 'react';
import {Grid, Box, Text, Image, Flex} from '@chakra-ui/react';

const Home = () => (
    <Text 
        textAlign="end" 
        margin="6rem" 
        fontSize="2xl" 
        textColor="gray.600">

            Ya tienes cuenta? 
            <Text as= "span" textColor="rgba(76, 175, 80)">Inicia sesión</Text>

    </Text>
);

export default Home;