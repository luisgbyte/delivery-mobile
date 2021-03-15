import {takeLatest, call, put, all} from 'redux-saga/effects';

import {Alert} from 'react-native';

import api from '~/services/api';

import {addressSuccess, addressFailure} from './actions';

export function* requestAddress() {
    try {
        const response = yield call(api.get, 'addresses');

        yield put(addressSuccess(response.data));
    } catch (err) {
        yield put(addressFailure());
        Alert.alert('Erro ao carregar dados!');
    }
}

export default all([takeLatest('@address/ADDRESS_REQUEST', requestAddress)]);
