import {Alert} from 'react-native';
import {takeLatest, call, put, all, delay} from 'redux-saga/effects';

import api from '~/services/api';
import * as RootNavigation from '~/RootNavigation';
import {signInSuccess, signUpSuccess, signFailure} from './actions';

export function* signIn({payload}) {
    try {
        const {data} = payload;
        const response = yield call(api.post, 'sessions', data);

        const {token, user} = response.data;

        if (user.whoami !== 'client') {
            throw new Error('oops, you are not client');
        }

        yield put(signInSuccess(token, user));

        api.defaults.headers.Authorization = `Bearer ${token}`;

        // history.push('/dashboard');
    } catch (err) {
        Alert.alert(
            'Falha na autenticação',
            'Houve um erro no login, verifique seus dados.',
        );
        yield put(signFailure());
    }
}

export function* signUp({payload}) {
    try {
        const {data} = payload;

        yield call(api.post, 'clients', data);

        yield put(signUpSuccess());
        // history.push('/dashboard');
        Alert.alert('Sucesso', 'Seu cadastro foi realizado com sucesso!');
        yield delay(500);
        yield RootNavigation.navigate('SignIn');
    } catch (err) {
        Alert.alert(
            'Falha no Cadastro',
            'Houve um erro no cadastro, verifique seus dados.',
        );
        yield put(signFailure());
    }
}

export function setToken({payload}) {
    if (!payload) return;

    const {token} = payload.auth;

    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

export function signOut() {
    // history.push('/');
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
    takeLatest('@auth/SIGN_OUT', signOut),
]);
