import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Routes from '~/routes';

const index = () => (
    <NavigationContainer>
        <Routes />
    </NavigationContainer>
);

export default index;
