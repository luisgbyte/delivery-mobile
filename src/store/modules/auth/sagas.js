import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';

import api from '~/services/api';

import {signInSuccess, signFailure} from './actions';

export function* signIn({payload}) {
    try {
        const {email, password} = payload;

        const response = yield call(api.post, 'sessions', {
            email,
            password,
        });

        const {token, user} = response.data;
        yield put(signInSuccess(token, user));

        api.defaults.headers.Authorization = `Bearer ${token}`;

        // history.push('/dashboard');
    } catch (err) {
        Alert.alert(
            'Falha na autenticação',
            'Houve um erro no login, verifique seus dados',
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
    takeLatest('@auth/SIGN_OUT', signOut),
]);
