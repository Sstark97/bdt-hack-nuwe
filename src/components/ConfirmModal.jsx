import React from 'react';
import { Link } from 'react-router-dom';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text
  } from "@chakra-ui/react";

const ConfirmModal = ({open, handleCloseInParent}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    console.log(open)

    const handleClose = () => {
        onClose();
        handleCloseInParent();
    }

    return (
        <>
        <Modal isOpen={open} onClose={handleClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>¡Todo Guay!</ModalHeader>
            <ModalBody>
                <Text>
                    Tu cuenta se ha creado correctamente.

                </Text>
            </ModalBody>

            <ModalFooter display="flex" justifyContent="flex-start">
                <Button variant="outline" onClick={handleClose} padding="1rem" width="33%">
                Cerrar
                </Button>
                <Button variant="ghost"><Text as="a" href="https://nuwe.io/">Vamos para Nuwe</Text></Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )

}

export default ConfirmModal;