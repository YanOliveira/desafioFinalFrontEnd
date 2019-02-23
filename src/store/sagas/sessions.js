import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { login, logout } from '../../services/auth';
import { setFirstLogin, setUser, setTechnologies } from '../../services/localStorage';

import { creators as sessionsActions } from '../ducks/sessions';

export function* createSession(action) {
  try {
    const {
      data: { token },
    } = yield call(api.post, 'sessions', action.payload.user);
    yield login(token);
    const { data } = yield call(api.get, 'users');
    const firstLogin = data.technologies.length === 0;
    yield setFirstLogin(firstLogin);
    const user = {
      id: data.id,
      name: data.name,
      email: data.email,
      technologies: data.technologies,
    };
    yield setUser(user);
    const { data: technologies } = yield call(api.get, 'technologies');
    setTechnologies(technologies);
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
