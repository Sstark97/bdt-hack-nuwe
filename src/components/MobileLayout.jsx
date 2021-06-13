import React from 'react';
import { Flex } from '@chakra-ui/react';

const MobileLayout = ({children}) => {
    return (
        <Flex 
        justifyContent="center"
        alignItems= "center" 
        width="100vh"
        height="100vh">
            
            {children}

        </Flex>
    );
};

export default MobileLayout;