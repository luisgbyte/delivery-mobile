import 'react-native-gesture-handler';
import React from 'react';
import './config/ReactotronConfig';

import {NavigationContainer} from '@react-navigation/native';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';

import {store, persistor} from '~/store';
import Routes from '~/routes';

const index = () => (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <NavigationContainer>
                <StatusBar barStyle="light-content" backgroundColor="#c72820" />
                <Routes />
            </NavigationContainer>
        </PersistGate>
    </Provider>
);

export default index;
