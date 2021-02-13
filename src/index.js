import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {StatusBar} from 'react-native';
import Routes from '~/routes';

const index = () => (
    <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#c72820" />
        <Routes />
    </NavigationContainer>
);

export default index;
