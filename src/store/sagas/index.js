import { all, takeLatest } from 'redux-saga/effects';
import { addUser } from './users';
import { createSession, destroySession } from './sessions';
import { loadTechnologies } from './technologies';
import { Types as usersTypes } from '../ducks/users';
import { Types as sessionsTypes } from '../ducks/sessions';
import { Types as technologiesTypes } from '../ducks/technologies';

export default function* rootSaga() {
  yield all([
    takeLatest(usersTypes.ADD_REQUEST, addUser),

    takeLatest(sessionsTypes.CREATE_REQUEST, createSession),
    takeLatest(sessionsTypes.DESTROY_REQUEST, destroySession),

    takeLatest(technologiesTypes.GET_REQUEST, loadTechnologies),
  ]);
}
