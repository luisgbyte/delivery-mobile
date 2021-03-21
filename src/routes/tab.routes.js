import React from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Card from '~/pages/Card';

const Test = () => <Text>HelloWorld!</Text>;

const Tab = createBottomTabNavigator();

function TabRoutes() {
    const cartCount = useSelector((state) => state.cart.products.length);

    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({color}) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'menu';
                    } else if (route.name === 'Carrinho') {
                        iconName = 'shopping-cart';
                    } else if (route.name === 'Perfil') {
                        iconName = 'person';
                    } else if (route.name === 'Pedidos') {
                        iconName = 'shopping-basket';
                    }

                    // You can return any component that you like here!
                    return <Icon name={iconName} size={30} color={color} />;
                },
            })}
            tabBarOptions={{
                keyboardHidesTabBar: true,
                activeTintColor: '#FFF',
                inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
                style: {
                    backgroundColor: '#c72820',
                    borderTopWidth: 0,
                    borderTopColor: 'transparent',
                },
            }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Pedidos" component={Test} />
            <Tab.Screen
                name="Carrinho"
                component={Card}
                options={cartCount > 0 ? {tabBarBadge: cartCount} : null}
            />
            <Tab.Screen name="Perfil" component={Profile} />
        </Tab.Navigator>
    );
}
export default TabRoutes;
