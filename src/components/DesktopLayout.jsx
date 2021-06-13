import React from 'react';
import {Grid, GridItem} from '@chakra-ui/react';
import ImageBackground from './ImageBackground';

const DesktopLayout = ({children}) => {
    return (
        <Grid 
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={0} 
        height="100vh">
            
            <GridItem rowSpan={2} colSpan={1} > <ImageBackground /> </GridItem>
            <GridItem colSpan={4} rowSpan={2} > {children} </GridItem>

        </Grid>
    );
};

export default DesktopLayout;