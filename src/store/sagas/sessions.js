import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { login, logout, load } from '../../services/auth';

import { creators as sessionsActions } from '../ducks/sessions';
import { creators as technologiesActions } from '../ducks/technologies';

export function* createSession(action) {
  try {
    const { data } = yield call(api.post, 'sessions', action.payload.user);
    yield login(data.token);
    const {
      data: { technologies },
    } = yield call(api.get, 'users');
    const firstLogin = technologies.length === 0;
    yield load(firstLogin);

    yield put(sessionsActions.createSessionSuccess(action.payload.history));
    yield put(technologiesActions.getTechnologiesRequest());
  } catch (error) {
    yield put(sessionsActions.createSessionFailure('Usuário ou senha incorretos.'));
  }
}

export function* destroySession(action) {
  try {
    yield logout();
    yield put(sessionsActions.destroySessionSuccess(action.payload.history));
  } catch (error) {
    yield put(sessionsActions.destroySessionFailure('Algo não deu certo.'));
  }
}
