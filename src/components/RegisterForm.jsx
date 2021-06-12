import React from 'react'
import {Grid, Box, Text, Image, Flex, FormControl, FormLabel, Input, Checkbox, Button} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import UserIcon from './UserIcon';
import BusinessIcon from './BusinessIcon';
import { AiOutlineArrowRight, AiOutlineUser } from 'react-icons/ai';
import '../assets/styles/icons.css';
import '../assets/styles/role-form.css';

const RegisterForm = () => (
    <Flex flexDirection="column" marginLeft="12rem" marginTop="-2rem">
        <Text fontSize="4xl" fontWeight="extrabold">Registra tu cuenta individual</Text>
        <Text fontSize="xl" fontWeight="light" width="40%" opacity={0.6}>Para poder revisar que se trata de una cuenta real, nesecitamos la siguiente información</Text>

        <FormControl width="40%" my="2em">
            <FormLabel fontWeight="semibold" textColor="gray.600">Nombre Completo*</FormLabel>
            <Input placeholder="Enter the full-name" height="60px"></Input>

            <FormLabel fontWeight="semibold" textColor="gray.600" marginTop="2em">Correo Electrónico*</FormLabel>
            <Input placeholder="Enter email adress" height="60px"></Input>

            <FormLabel fontWeight="semibold" textColor="gray.600" marginTop="2em">Contraseña*</FormLabel>
            <Input placeholder="Enter your pasword" height="60px"></Input>

            <Checkbox marginTop="2em" fontWeight="light" opacity={0.6}>Aceptas los términos y condiciones</Checkbox>

            <Button colorScheme="green" width="40%">Registrar Cuenta</Button>
            
        </FormControl>

        
    </Flex>
);

export default RegisterForm;