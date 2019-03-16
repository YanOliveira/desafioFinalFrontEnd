import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { login, logout } from '../../services/auth';
import { setUser, setTechnologies } from '../../services/localStorage';

import { creators as sessionsActions } from '../ducks/sessions';

export function* createSession(action) {
  try {
    const { data } = yield call(api.post, 'sessions', action.payload.user);
    yield login(data.token);

    const {
      data: {
        id, name, email, technologies,
      },
    } = yield call(api.get, 'users');
    const user = {
      id, name, email, technologies,
    };
    yield setUser(user);

    const { data: allTechnologies } = yield call(api.get, 'technologies');
    setTechnologies(allTechnologies);

    yield put(sessionsActions.createSessionSuccess(action.payload.history));
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
