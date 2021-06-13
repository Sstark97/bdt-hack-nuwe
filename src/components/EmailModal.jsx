import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    useDisclosure,
    Button,
    Text
  } from "@chakra-ui/react";

const EmailModal = ({open, handleCloseInParent}) => {
    const { onClose } = useDisclosure();
    
    const handleClose = () => {
        onClose();
        handleCloseInParent();
    }

    return (
        <>
        <Modal isOpen={open} onClose={handleClose}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>¡Ups, algo ha ido mal!</ModalHeader>
            <ModalBody>
                <Text>
                    Parece que el correo electrónico introducido ya está en uso.
                    Porfavor, revísalo y vuelve a intentarlo de nuevo.

                </Text>
            </ModalBody>

            <ModalFooter display="flex" justifyContent="flex-start">
                <Button variant="outline" onClick={handleClose} padding="1rem" width="33%">
                Cerrar
                </Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )

}

export default EmailModal;
