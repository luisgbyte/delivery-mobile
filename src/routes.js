import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Listing from '~/pages/Listing';
import Profile from '~/pages/Profile';
import Order from '~/pages/Order';

const Stack = createStackNavigator();

export default function Routes() {
    const {signed} = useSelector((state) => state.auth);

    const Tab = createBottomTabNavigator();

    return (
        <>
            {signed ? (
                <Tab.Navigator
                    screenOptions={({route}) => ({
                        tabBarIcon: ({color}) => {
                            let iconName;

                            if (route.name === 'Listagem') {
                                iconName = 'menu';
                            } else if (route.name === 'Pedidos') {
                                iconName = 'shopping-basket';
                            } else if (route.name === 'Perfil') {
                                iconName = 'person';
                            }

                            // You can return any component that you like here!
                            return (
                                <Icon name={iconName} size={30} color={color} />
                            );
                        },
                    })}
                    tabBarOptions={{
                        keyboardHidesTabBar: true,
                        activeTintColor: '#FFF',
                        inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
                        style: {
                            backgroundColor: '#c72820',
                        },
                    }}>
                    <Tab.Screen name="Listagem" component={Listing} />
                    <Tab.Screen name="Pedidos" component={Order} />
                    <Tab.Screen name="Perfil" component={Profile} />
                </Tab.Navigator>
            ) : (
                <Stack.Navigator>
                    <Stack.Screen name="SignIn" component={SignIn} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                </Stack.Navigator>
            )}
        </>
    );
}
