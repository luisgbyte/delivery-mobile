import {combineReducers} from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import product from './product/reducer';
import cart from './cart/reducer';
import address from './address/reducer';
import order from './order/reducer';

export default combineReducers({auth, user, product, cart, address, order});
