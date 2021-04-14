import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';

import api from '~/services/api';

import {orderFailure, orderRequestSuccess, orderCancelSuccess} from './actions';

export function* orderRequest() {
    try {
        const response = yield call(api.get, 'orders');

        yield put(orderRequestSuccess(response.data));
    } catch (err) {
        // Alert.alert('Error', 'Erro carregar pedidos!');
        yield put(orderFailure());
    }
}

export function* orderCancel({payload}) {
    try {
        const {id} = payload;

        const response = yield call(api.delete, `orders/${id}`);

        yield put(orderCancelSuccess(response.data));

        Alert.alert('Sucesso', 'Pedido cancelado com sucesso!');
    } catch (err) {
        const {error} = err.response.data;

        Alert.alert(error);

        yield put(orderFailure());
    }
}

export default all([
    takeLatest('@order/ORDER_REQUEST', orderRequest),
    takeLatest('@order/ORDER_CANCEL', orderCancel),
]);
