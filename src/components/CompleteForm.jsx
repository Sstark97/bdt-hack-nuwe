import React, {useState } from 'react'
import {Text, Image, Flex, FormControl, FormLabel, Input, Select, Button, InputGroup, InputLeftAddon} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import '../assets/styles/icons.css';
import '../assets/styles/role-form.css';
import { GiPadlock } from 'react-icons/gi';

const CompleteForm = ({history}) => (
            <Flex flexDirection="column" marginLeft="16rem" marginTop="-2rem">
                <Text fontSize="4xl" fontWeight="extrabold">Complete your profile!</Text>
                <Text fontSize="xl" fontWeight="light" width="40%" opacity={0.6}>Para poder revisar que se trata de una cuenta real, nesecitamos la siguiente información</Text>

                <FormControl width="40%" my="2em">
                    <FormLabel fontWeight="semibold" textColor="gray.600">Número de teléfono</FormLabel>
                    <InputGroup>
                        <Select width="30%"placeholder="+34" height="60px" border="3px solid" textColor="gray.600" opacity={0.6}>
                            <option value="Spain">+34</option>
                            <option value="Frande">+33</option>
                            <option value="Italy">+39</option>
                            <option value="EEUU">+1</option>
                        </Select>
                        <Input height="60px" type="tel" placeholder="Introduce tu teléfono" />
                    </InputGroup>

                    <FormLabel fontWeight="semibold" textColor="gray.600" marginTop="2em">Dirección</FormLabel>
                    <Input placeholder="Introduce la dirección completa" height="60px" border="3px solid"></Input>

                    <FormLabel fontWeight="semibold" textColor="gray.600" marginTop="2em">País de residencia</FormLabel>
                    <Select placeholder="Selecciona uno" height="60px" border="3px solid" textColor="gray.600" opacity={0.6}>
                        <option value="Spain">Spain</option>
                        <option value="Frande">France</option>
                        <option value="Italy">Italy</option>
                        <option value="EEUU">EEUU</option>
                    </Select>

                    <Button marginTop="2em" colorScheme="green" width="100%" height="60px" onClick={() => (history.push('/verifyAccount'))}>Guardar y continuar</Button>
                    <Flex fontSize="small" textColor="gray.600" justifyContent="center" alignItems="center" marginTop="2rem"> 
                        <GiPadlock></GiPadlock> 
                        <Text marginLeft="1rem">Tu información es segura</Text>
                    </Flex>

                </FormControl>

                
            </Flex>
);

export default CompleteForm;