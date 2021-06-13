import React from 'react';
import {Flex} from '@chakra-ui/react';
import { BsPentagon } from 'react-icons/bs';
import {  MdCardTravel } from 'react-icons/md';
import '../assets/styles/icons.css';

const BusinessIcon = () => (
    <Flex className="icon-stack" flexDirection="column" justifyContent="center" marginLeft="1em"> 
        <BsPentagon className="icon-stack-3x"></BsPentagon>
        <MdCardTravel className="icon-stack-1x"></MdCardTravel>
    </Flex>
);

export default BusinessIcon;
