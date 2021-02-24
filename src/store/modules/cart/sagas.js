// import {takeLatest, call, put, all} from 'redux-saga/effects';

// import {Alert} from 'react-native';

// import api from '~/services/api';

// import {finishOrder} from './actions';

// export function* finish() {
//     try {
//         yield call(api.post, 'orders');
//         yield put(productSuccess());
//     } catch (err) {
//         yield put(productFailure());
//         Alert.alert('Erro ao carregar dados!');
//     }
// }

// export default all([takeLatest('@cart/FINISH_ORDER', finish)]);
