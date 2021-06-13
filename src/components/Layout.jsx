import React from 'react';
import { useMediaQuery } from '@chakra-ui/react';
import DesktopLayout from '../components/DesktopLayout';
import MobileLayout from '../components/MobileLayout';

const Layout = ({children}) => {
    const [isLargerThan1000] = useMediaQuery("(min-width: 1000px)")

    
    return (
        <> {isLargerThan1000 ? <DesktopLayout children={children} /> : <MobileLayout children={children}/>}</>
    );
};

export default Layout;