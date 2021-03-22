import {takeLatest, call, put, all} from 'redux-saga/effects';

import {Alert} from 'react-native';

import api from '~/services/api';

import {addressSuccess, addressFailure, addressRequest} from './actions';

export function* requestAddress() {
    try {
        const response = yield call(api.get, 'addresses');

        yield put(addressSuccess(response.data));
    } catch (err) {
        yield put(addressFailure());
        Alert.alert('Erro ao carregar dados!');
    }
}

export function* updateAddress({payload}) {
    try {
        const {data} = payload;

        yield call(api.put, 'addresses', data);

        yield put(addressRequest());
        Alert.alert('Endereço atualizado com sucesso!');
    } catch (err) {
        yield put(addressFailure());
        Alert.alert('Erro ao atualizar endereço!');
    }
}

export function* createAddress({payload}) {
    try {
        const {data} = payload;

        yield call(api.post, 'addresses', data);

        yield put(addressRequest());
        Alert.alert('Endereço criado com sucesso!');
    } catch (err) {
        yield put(addressFailure());
        Alert.alert('Erro ao atualizar dados!');
    }
}

export default all([
    takeLatest('@address/ADDRESS_REQUEST', requestAddress),
    takeLatest('@address/ADDRESS_UPDATE', updateAddress),
    takeLatest('@address/ADDRESS_CREATE', createAddress),
]);
