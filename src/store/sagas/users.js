import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { getUser, setUser } from '../../services/localStorage';

import { creators as usersActions } from '../ducks/users';

export function* addUser(action) {
  try {
    yield call(api.post, 'users', action.payload.user);
    yield put(usersActions.addUserSuccess(action.payload.user, action.payload.history));
  } catch (error) {
    yield put(usersActions.addUserFailure(error.response.data));
  }
}

export function* updateUser(action) {
  try {
    yield call(api.put, 'users', action.payload.user);
    let user = yield JSON.parse(getUser());
    user = {
      ...user,
      name: action.payload.user.name ? action.payload.user.name : user.name,
      technologies: action.payload.user.technologies,
    };
    setUser(user);
    yield put(usersActions.updateUserSuccess(action.payload.user, action.payload.history));
  } catch (error) {
    yield put(usersActions.updateUserFailure(error.response.data));
  }
}

export function* redirectIfUpdate(action) {
  yield action.payload.history.push('/');
}
