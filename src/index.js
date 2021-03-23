import 'react-native-gesture-handler';
import React from 'react';
import './config/ReactotronConfig';

import {NavigationContainer} from '@react-navigation/native';

import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';

import {navigationRef} from './RootNavigation';

import {store, persistor} from '~/store';
import Routes from '~/routes';

const index = () => (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <NavigationContainer ref={navigationRef}>
                <StatusBar barStyle="light-content" backgroundColor="#c72820" />
                <Routes />
            </NavigationContainer>
        </PersistGate>
    </Provider>
);

export default index;
