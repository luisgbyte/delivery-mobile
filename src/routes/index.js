import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import TabRoutes from './tab.routes';
import ProductDetails from '~/pages/ProductDetails';
import Address from '~/pages/Address';

const Stack = createStackNavigator();
const App = createStackNavigator();

export default function Routes() {
    const {signed} = useSelector((state) => state.auth);

    return (
        <>
            {signed ? (
                <App.Navigator>
                    <App.Screen
                        name="MainBottom"
                        component={TabRoutes}
                        options={{
                            headerShown: false,
                            gestureEnabled: false,
                        }}
                    />
                    <App.Screen
                        name="ProductDetails"
                        component={ProductDetails}
                        options={({navigation}) => ({
                            headerLeft: () => (
                                <Icon
                                    name="navigate-before"
                                    size={35}
                                    color="#FFB84D"
                                    onPress={() => navigation.goBack()}
                                />
                            ),
                            headerLeftContainerStyle: {
                                marginLeft: 24,
                            },
                            headerTitle: '',
                            headerTitleStyle: {
                                color: '#fff',
                                fontFamily: 'Poppins-Regular',
                                fontSize: 16,
                            },
                            headerStyle: {
                                backgroundColor: '#C72828',
                                elevation: 0,
                                borderWidth: 0,
                                shadowColor: 'transparent',
                            },
                        })}
                    />
                    <App.Screen
                        name="Address"
                        component={Address}
                        options={({navigation}) => ({
                            headerLeft: () => (
                                <Icon
                                    name="navigate-before"
                                    size={35}
                                    color="#FFB84D"
                                    onPress={() => navigation.goBack()}
                                />
                            ),
                            headerLeftContainerStyle: {
                                marginLeft: 24,
                            },
                            headerTitle: '',
                            headerTitleStyle: {
                                color: '#fff',
                                fontFamily: 'Poppins-Regular',
                                fontSize: 16,
                            },
                            headerStyle: {
                                backgroundColor: '#C72828',
                                elevation: 0,
                                borderWidth: 0,
                                shadowColor: 'transparent',
                            },
                        })}
                    />
                </App.Navigator>
            ) : (
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}>
                    <Stack.Screen name="SignIn" component={SignIn} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                </Stack.Navigator>
            )}
        </>
    );
}
