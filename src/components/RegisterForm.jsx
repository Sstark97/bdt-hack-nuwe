import React, {useState, useRef} from 'react'
import {Text, Image, Flex, FormControl, FormLabel, Input, InputGroup, InputRightElement, Checkbox, Button } from '@chakra-ui/react';
import { Link, Router } from 'react-router-dom';
import '../assets/styles/icons.css';
import '../assets/styles/role-form.css';
import google from '../assets/static/google.png';
import EmailModal from '../components/EmailModal';

const RegisterForm = ({history}) => {

    const [show, setShow] = useState(false);
    const [showModal, setModal] = useState(false);
    const [required, setRequired] = useState(false);
    const emailRef = useRef();
    const nameRef = useRef();
    const passwordRef = useRef();
    const handleClick = () => setShow(!show);
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const handleShowRequired = () => {
        setRequired(true);
        setTimeout(() => (setRequired(false)),3000);
    }

    const handleSubmit = () => {
        if(emailRef.current.value !== '' || nameRef.current.value !== '' || passwordRef.current.value !== ''){
            const email = emailRef.current.value;
            if(email.match(emailRegex)){
                history.push('/completeAccount');
            }

            setModal(true);
        } else {
            handleShowRequired();
        }
    }

    const handleCloseInParent = () => {
        setModal(false);
        console.log("hola")
    };

    return(
        <Flex flexDirection="column" marginLeft="16rem" marginTop="-2rem">
            <Text fontSize="4xl" fontWeight="extrabold">Registra tu cuenta individual</Text>
            <Text fontSize="xl" fontWeight="light" width="40%" opacity={0.6}>Para poder revisar que se trata de una cuenta real, nesecitamos la siguiente información</Text>

            <FormControl width="40%" my="1.7em">
                <FormLabel fontWeight="semibold" textColor="gray.600">Nombre Completo*</FormLabel>
                <Input className="in" placeholder="Enter the full-name" height="60px" border="3px solid" ref={nameRef}></Input>

                <FormLabel fontWeight="semibold" textColor="gray.600" marginTop="2em">Correo Electrónico*</FormLabel>
                <Input ref={emailRef} placeholder="Enter email adress" height="60px" border="3px solid" isRequired></Input>

                <FormLabel fontWeight="semibold" textColor="gray.600" marginTop="2em">Contraseña*</FormLabel>
                {/* <Input placeholder="Enter your pasword" height="60px" border="3px solid"></Input> */}
                <InputGroup size="md">
                    <Input
                        height="60px"
                        pr="4.5rem"
                        type={show ? "text" : "password"}
                        placeholder="Enter password"
                        ref={passwordRef}
                    />
                    <InputRightElement width="4.5rem" display="flex">
                        <Button h="1.75rem" size="sm" onClick={handleClick} marginTop="1.6em" marginRight="1em" padding="1.2rem">
                        {show ? "Ocultar" : "Mostrar"}
                        </Button>
                    </InputRightElement>
                </InputGroup>

                <Checkbox marginTop="2em" fontWeight="light" opacity={0.6}>Aceptas los términos y condiciones</Checkbox>

                <Button marginTop="2em" colorScheme="green" width="100%" height="60px" onClick={handleSubmit}>Registrar Cuenta</Button>
                <Button marginTop="2em" width="100%" height="60px"> <Image src={google} w="1.3rem" marginLeft="-3rem" marginRight="4rem"/>Registrate con Google</Button>

                {required ? 
                
                    <Text 
                        textAlign="center" 
                        marginTop="0.8em" 
                        border="1px solid red" 
                        borderRadius="8px" 
                        padding="5px"
                        bgColor="#dc3545">
                            Todos los campos son obligatorios!
                    </Text> 
                            : 
                    <></> 

                }

                <EmailModal open = {showModal} handleCloseInParent={handleCloseInParent} />

            </FormControl>
            
        </Flex>
    )
};

export default RegisterForm;