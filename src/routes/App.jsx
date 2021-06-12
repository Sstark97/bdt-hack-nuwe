import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react"
import Register from '../pages/Register';
import CompleteAccount from '../pages/CompleteAccount';
import VerifyAccount from '../pages/VerifyAccount';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';

const App = () => (
    <ChakraProvider>
        <BrowserRouter>
            <Switch>
                <Route exact path = "/" component={Home}/> 
                <Route exact path = "/register" component={Register}/> 
                <Route exact path = "/completeAccount" component={CompleteAccount}/> 
                <Route exact path = "/verifyAccount" component={VerifyAccount}/> 
                <Route component={NotFound}/> 
            </Switch>
        </BrowserRouter>
    </ChakraProvider>
);

export default App;