import {takeLatest, call, all, put, delay, select} from 'redux-saga/effects';
import {Alert} from 'react-native';
import * as RootNavigation from '~/RootNavigation';

import api from '~/services/api';

import {cartFailure, cartSuccess} from './actions';

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

        yield call(api.post, 'orders', order);

        yield put(cartSuccess());
        Alert.alert('Sucesso', 'Seu pedido foi finalizado com sucesso!');

        yield delay(500);
        yield RootNavigation.navigate('Pedidos');
    } catch (err) {
        yield put(cartFailure());
        Alert.alert('Error', 'Erro ao finalizar pedido, tente novamente!');
    }
}

export default all([takeLatest('@cart/FINISH_ORDER', finish)]);
