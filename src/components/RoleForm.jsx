import React from 'react'
import {Grid, Box, Text, Image, Flex} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import UserIcon from './UserIcon';
import BusinessIcon from './BusinessIcon';
import { AiOutlineArrowRight, AiOutlineUser } from 'react-icons/ai';
import '../assets/styles/icons.css';
import '../assets/styles/role-form.css';

const RoleForm = () => (
    <Flex flexDirection="column">
        <Text fontSize="4xl" fontWeight="extrabold">¡Unete a la Comunidad!</Text>
        <Text fontSize="xl" fontWeight="light" width="45%" opacity={0.6}>Para empezar, dinos que cuenta te gustaría abrir</Text>

        <Flex flexDirection="column" my="4rem" justifyContent="center">

            <Link to="/register">
                <Flex alignItems= "center" 
                border="1px solid rgba(76, 175, 80)" 
                padding="1rem" 
                width="50%" 
                borderRadius="12px" 
                className="option"> 

                    <UserIcon />
                    <Flex flexDirection="column" mx="3rem">
                        <Text fontWeight="extrabold">Developers</Text>
                        <Text opacity={0.6}>Cuenta para entrar en el mundo dev</Text>

                    </Flex>

                    <AiOutlineArrowRight className="arrow"/>

                </Flex>
            </Link>

            <Link to="/register">
                <Flex alignItems= "center" 
                border="1px solid rgba(76, 175, 80)" 
                padding="1rem" 
                width="50%" 
                borderRadius="12px" 
                my="2em" 
                className="option"> 

                    <BusinessIcon />
                    <Flex flexDirection="column" mx="3rem">
                        <Text fontWeight="extrabold">Business</Text>
                        <Text opacity={0.6}>Tienes o perteneces a una compañia</Text>

                    </Flex>

                    <AiOutlineArrowRight className="arrow"/>

                </Flex>
            </Link>

        </Flex>
    </Flex>
);

export default RoleForm;
