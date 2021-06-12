import React from 'react'
import {Text, Image, Flex, FormControl, FormLabel, Input, Select, Button, InputGroup, InputLeftAddon} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import '../assets/styles/icons.css';
import '../assets/styles/role-form.css';
import { GiPadlock } from 'react-icons/gi';

const VerifyForm = () => (
    <Flex flexDirection="column" marginLeft="16rem" marginTop="-2rem">
        <Text fontSize="4xl" fontWeight="extrabold">Verifica tu perfil</Text>
        <Text fontSize="xl" fontWeight="light" width="40%" opacity={0.6}>Para poder revisar que se trata de una cuenta real, nesecitamos la siguiente información</Text>

        <FormControl width="40%" my="2em">
            <FormLabel fontWeight="semibold" textColor="gray.600">Número de tarjeta</FormLabel>
            <Input placeholder="Introduce el número de tu tarjeta" height="60px" border="3px solid"></Input>

            <FormLabel fontWeight="semibold" textColor="gray.600" marginTop="2em">Código secreto</FormLabel>
            <Input placeholder="Introduce el código secreto" height="60px" border="3px solid"></Input>

            <Button marginTop="2em" colorScheme="green" width="100%" height="60px">Crear Cuenta</Button>
            <Flex fontSize="small" textColor="gray.600" justifyContent="center" alignItems="center" marginTop="2rem"> 
                <GiPadlock></GiPadlock> 
                <Text marginLeft="1rem">Tu información es segura</Text>
            </Flex>
            
        </FormControl>

        
    </Flex>
);

export default VerifyForm;