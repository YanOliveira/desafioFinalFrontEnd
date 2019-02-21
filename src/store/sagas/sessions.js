import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { login, logout, getEmail } from '../../services/auth';

import { creators as sessionsActions } from '../ducks/sessions';

export function* getSessions(action) {
  try {
    const { data } = yield call(api.get, 'sessions', {
      params: {
        email: getEmail(),
      },
    });
    yield put(sessionsActions.getSessionsSuccess(data.length, action.payload.history));
  } catch (error) {
    yield put(sessionsActions.createSessionFailure('Usuário ou senha incorretos.'));
  }
}

export function* createSession(action) {
  try {
    const { data } = yield call(api.post, 'sessions', action.payload.user);
    login(data.token, action.payload.user.email);
    yield put(
      sessionsActions.createSessionSuccess(action.payload.user.email, action.payload.history),
    );
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
