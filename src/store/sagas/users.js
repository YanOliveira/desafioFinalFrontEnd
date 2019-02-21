import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
// import { load } from '../../services/auth';

import { creators as usersActions } from '../ducks/users';

// export function* loadUser() {
//   try {

//     yield put(usersActions.loadUserSuccess(data));
//   } catch (error) {
//     yield put(usersActions.addUserFailure(error.response.data));
//   }
// }

export function* addUser(action) {
  try {
    yield call(api.post, 'users', action.payload.user);
    yield put(usersActions.addUserSuccess(action.payload.user, action.payload.history));
  } catch (error) {
    yield put(usersActions.addUserFailure(error.response.data));
  }
}
