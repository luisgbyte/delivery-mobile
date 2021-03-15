import {all} from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import product from './product/sagas';
import cart from './cart/sagas';
import address from './address/sagas';

export default function* rootSaga() {
    return yield all([auth, user, product, cart, address]);
}
