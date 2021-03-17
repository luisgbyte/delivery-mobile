import React from 'react';
import {useSelector} from 'react-redux';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Listing from '~/pages/Listing';
import Profile from '~/pages/Profile';
import Order from '~/pages/Order';

const Tab = createBottomTabNavigator();

function TabRoutes() {
    const cartCount = useSelector((state) => state.cart.products.length);
    console.tron.log(cartCount);
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({color}) => {
                    let iconName;

                    if (route.name === 'Listagem') {
                        iconName = 'menu';
                    } else if (route.name === 'Carrinho') {
                        iconName = 'shopping-cart';
                    } else if (route.name === 'Perfil') {
                        iconName = 'person';
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
            <Tab.Screen name="Listagem" component={Listing} />
            <Tab.Screen
                name="Carrinho"
                component={Order}
                options={cartCount > 0 ? {tabBarBadge: cartCount} : null}
            />
            <Tab.Screen name="Perfil" component={Profile} />
        </Tab.Navigator>
    );
}
export default TabRoutes;
