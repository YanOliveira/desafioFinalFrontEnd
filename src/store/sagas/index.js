import { all, takeLatest } from 'redux-saga/effects';
import { addUser, updateUser } from './users';
import { createSession, destroySession } from './sessions';
import { Types as usersTypes } from '../ducks/users';
import { Types as sessionsTypes } from '../ducks/sessions';

export default function* rootSaga() {
  yield all([
    takeLatest(usersTypes.ADD_REQUEST, addUser),
    takeLatest(usersTypes.UPDATE_REQUEST, updateUser),

    takeLatest(sessionsTypes.CREATE_REQUEST, createSession),
    takeLatest(sessionsTypes.DESTROY_REQUEST, destroySession),
  ]);
}
