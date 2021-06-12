import React from 'react';
import {Grid, Box, Text, Image, Flex} from '@chakra-ui/react';
import { BsPentagon } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import '../assets/styles/icons.css';

const UserIcon = () => (
    <Flex className="icon-stack" flexDirection="column" justifyContent="center" marginLeft="1em"> 
        <BsPentagon className="icon-stack-3x"></BsPentagon>
        <AiOutlineUser className="icon-stack-1x"></AiOutlineUser>
    </Flex>
);

export default UserIcon;
