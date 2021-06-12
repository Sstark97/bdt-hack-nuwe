import React from 'react';
import {Grid, Box, Text, Image} from '@chakra-ui/react';
import ImageBackground from './ImageBackground';

const Layout = ({children}) => (
    <Grid templateColumns="repeat(2, 1fr)" gap={1} height="50vh">
        <ImageBackground />

        {children}
    </Grid>
);

export default Layout;