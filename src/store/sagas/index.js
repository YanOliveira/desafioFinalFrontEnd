import { all, takeLatest } from 'redux-saga/effects';
import { addUser } from './users';
import { createSession } from './sessions';
import { Types as usersTypes } from '../ducks/users';
import { Types as sessionsTypes } from '../ducks/sessions';

export default function* rootSaga() {
  yield all([
    takeLatest(usersTypes.ADD_REQUEST, addUser),
    takeLatest(sessionsTypes.CREATE_REQUEST, createSession),
  ]);
}
