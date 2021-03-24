import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';

import api from '~/services/api';

import {orderFailure, orderSuccess} from './actions';

export function* orderRequest() {
    try {
        const response = yield call(api.get, 'orders');

        yield put(orderSuccess(response.data));
    } catch (err) {
        Alert.alert('Error', 'Erro carregar pedidos!');

        yield put(orderFailure());
    }
}

export default all([takeLatest('@order/ORDER_REQUEST', orderRequest)]);
