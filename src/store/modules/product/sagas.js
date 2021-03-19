import {takeLatest, call, put, all} from 'redux-saga/effects';

import {Alert} from 'react-native';

import api from '~/services/api';

import {productSuccess, productFailure} from './actions';

export function* requestProducts({payload}, loading) {
    try {
        if (loading) return;
        const {page} = payload;

        const response = yield call(api.get, 'products', {
            params: {page},
        });

        yield put(productSuccess(response.data));
    } catch (err) {
        yield put(productFailure());
        Alert.alert('Erro ao carregar dados!');
    }
}

export default all([takeLatest('@product/PRODUCT_REQUEST', requestProducts)]);
