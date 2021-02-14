import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {useSelector} from 'react-redux';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Listing from '~/pages/Listing';

const Stack = createStackNavigator();

export default function Routes() {
    const {signed} = useSelector((state) => state.auth);

    return (
        <Stack.Navigator
            initialRouteName="Entrar"
            screenOptions={{
                headerShown: false,
            }}>
            {signed ? (
                <>
                    <Stack.Screen name="Listing" component={Listing} />
                </>
            ) : (
                <>
                    <Stack.Screen name="SignIn" component={SignIn} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                </>
            )}
        </Stack.Navigator>
    );
}
