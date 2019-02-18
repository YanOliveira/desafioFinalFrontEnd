import { all, takeLatest } from 'redux-saga/effects';
import { addUser } from './users';
import { Types as usersTypes } from '../ducks/users';

export default function* rootSaga() {
  yield all([takeLatest(usersTypes.ADD_REQUEST, addUser)]);
}
