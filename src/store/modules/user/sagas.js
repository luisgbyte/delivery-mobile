import {Alert} from 'react-native';
import {takeLatest, call, put, all} from 'redux-saga/effects';

import api from '~/services/api';

import {updateProfileSuccess, updateProfileFailure} from './actions';

export function* updateProfile({payload}) {
    try {
        const {name, email, ...rest} = payload.data;

        const profile = {
            name,
            email,
            ...(rest.oldPassword ? rest : {}),
        };

        const response = yield call(api.put, 'clients', profile);

        Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');

        yield put(updateProfileSuccess(response.data));
    } catch (err) {
        Alert.alert('Error', 'Erro ao atualizar perfil, confira seus dados!');

        yield put(updateProfileFailure());
    }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
