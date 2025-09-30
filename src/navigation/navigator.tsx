import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import LoginScreen from '../screens/LoginScreen';
import CadastroScreen from '../screens/CadastroScreen';
import HomeScreen from '../screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator()

export function navigator() {

    const [ususario, setUsuario] = useState(null);
    const [carrega, setCarrega] = useState(true);

    useEffect(() => {
        const teste = onAuthStateChanged(auth, (user) => {
            setUsuario(user);
            
        })
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home">

                </Stack.Screen>

                <>
                    <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
                    <Stack.Screen name="Cadastro" component={CadastroScreen}></Stack.Screen>
                </>
            </Stack.Navigator>
        </NavigationContainer>
    );
}