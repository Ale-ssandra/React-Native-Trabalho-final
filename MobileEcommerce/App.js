import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Routes from './src/routes';
import { Colaboradores } from './src/pages/Colaboradores';
import AuthContext, { AuthProvider } from './src/context/AuthContext';

const App = () => {

    return (
        <NavigationContainer>
           <AuthProvider>

                <Routes/>
           </AuthProvider>
            </NavigationContainer>
    );

};
export default App