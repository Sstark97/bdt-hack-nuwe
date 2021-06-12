import React from 'react';
import {Grid, Box, Text, Image, Flex} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import '../assets/styles/icons.css';

const Return = () => (
    <Flex width="50%" marginLeft="5em" alignItems="center">
        <MdKeyboardArrowLeft className="return"></MdKeyboardArrowLeft>
        <Text fontWeight="bold" fontSize="xl" textColor="gray.400">Volver</Text>
    </Flex>
);

export default Return;