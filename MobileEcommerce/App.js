import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Routes from './src/routes';
import { Colaboradores } from './src/pages/Colaboradores';

const App = () => {

    return (
        <NavigationContainer>
            {/* <Routes/> */}
            <Colaboradores/>
        </NavigationContainer>
    );

};
export default App