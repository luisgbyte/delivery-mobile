import {takeLatest, call, all, put, select} from 'redux-saga/effects';

import {Alert} from 'react-native';

import api from '~/services/api';

import {clearCart} from './actions';

const getCart = (state) => state.cart.products;

export function* finish({payload}) {
    try {
        const cart = yield select(getCart);
        const {payment, chance} = payload;

        // formatting cart for requisition
        const formattedCart = cart.map((item) => ({
            product_id: item.id,
            quantity: item.quantity,
        }));

        // formatting
        const order = {
            products: formattedCart,
            payments: {type: payment, chance},
        };
        // console.tron.log('order', order);
        yield call(api.post, 'orders', order);

        yield put(clearCart());

        Alert.alert('Sucesso', 'Seu pedido foi finalizado com sucesso!');
    } catch (err) {
        Alert.alert('Error', 'Erro ao finalizar pedido, tente novamente!');
    }
}

export default all([takeLatest('@cart/FINISH_ORDER', finish)]);
