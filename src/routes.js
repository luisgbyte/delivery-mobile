import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator
            initialRouteName="Entrar"
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Entrar" component={SignIn} />
            <Stack.Screen name="Cadastrar" component={SignUp} />
        </Stack.Navigator>
    );
}
