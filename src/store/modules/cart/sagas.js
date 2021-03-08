import {takeLatest, call, all, select} from 'redux-saga/effects';

import {Alert} from 'react-native';

import api from '~/services/api';

const getCart = (state) => state.cart.products;

export function* finish() {
    try {
        const cart = yield select(getCart);

        // formatting cart for requisition
        const formattedCart = cart.map((item) => ({
            product_id: item.id,
            quantity: item.quantity,
        }));

        console.tron.log(formattedCart);

        yield call(api.post, 'orders', formattedCart);
    } catch (err) {
        Alert.alert('Erro ao finalizar pedido!');
    }
}

export default all([takeLatest('@cart/FINISH_ORDER', finish)]);
