import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { creators as sessionsActions } from '../ducks/sessions';

export function* createSession(action) {
  try {
    const { data } = yield call(api.post, 'sessions', action.payload.user);
    yield put(sessionsActions.createSessionSuccess(data.token, action.payload.history));
  } catch (error) {
    yield put(sessionsActions.createSessionFailure('Usuário ou senha incorretos.'));
  }
}
