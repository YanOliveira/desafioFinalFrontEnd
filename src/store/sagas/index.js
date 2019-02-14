import { all, takeLatest } from 'redux-saga/effects';
// import { addUser } from './users';

export default function* rootSaga() {
  yield all([
    // takeLatest(mainTypes.ADD_REQUEST, addUser)
  ]);
}
