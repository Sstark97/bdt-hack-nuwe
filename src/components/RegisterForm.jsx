import React, {useState} from 'react'
import {Text, Image, Flex, FormControl, FormLabel, Input, InputGroup, InputRightElement, Checkbox, Button} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import '../assets/styles/icons.css';
import '../assets/styles/role-form.css';
import google from '../assets/static/google.png'

const RegisterForm = () => {

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return(
        <Flex flexDirection="column" marginLeft="16rem" marginTop="-2rem">
            <Text fontSize="4xl" fontWeight="extrabold">Registra tu cuenta individual</Text>
            <Text fontSize="xl" fontWeight="light" width="40%" opacity={0.6}>Para poder revisar que se trata de una cuenta real, nesecitamos la siguiente información</Text>

            <FormControl width="40%" my="2em">
                <FormLabel fontWeight="semibold" textColor="gray.600">Nombre Completo*</FormLabel>
                <Input className="in" placeholder="Enter the full-name" height="60px" border="3px solid"></Input>

                <FormLabel fontWeight="semibold" textColor="gray.600" marginTop="2em">Correo Electrónico*</FormLabel>
                <Input placeholder="Enter email adress" height="60px" border="3px solid"></Input>

                <FormLabel fontWeight="semibold" textColor="gray.600" marginTop="2em">Contraseña*</FormLabel>
                {/* <Input placeholder="Enter your pasword" height="60px" border="3px solid"></Input> */}
                <InputGroup size="md">
                    <Input
                        height="60px"
                        pr="4.5rem"
                        type={show ? "text" : "password"}
                        placeholder="Enter password"
                    />
                    <InputRightElement width="4.5rem" display="flex">
                        <Button h="1.75rem" size="sm" onClick={handleClick} marginTop="1.6em" marginRight="1em" padding="1.2rem">
                        {show ? "Ocultar" : "Mostrar"}
                        </Button>
                    </InputRightElement>
                </InputGroup>

                <Checkbox marginTop="2em" fontWeight="light" opacity={0.6}>Aceptas los términos y condiciones</Checkbox>

                <Button marginTop="2em" colorScheme="green" width="100%" height="60px">Registrar Cuenta</Button>
                <Button marginTop="2em" width="100%" height="60px"> <Image src={google} w="1.3rem" marginLeft="-3rem" marginRight="4rem"/>Registrate con Google</Button>
                
            </FormControl>

            
        </Flex>
    )
};

export default RegisterForm;