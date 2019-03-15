import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import { getUser, setUser } from '../../services/localStorage';

import { creators as usersActions } from '../ducks/users';

export function* showMeetup(action) {
  console.tron.log(`teste${action}`);
}

export function* uploadFile(action) {
  // const config = { headers: { 'Content-Type': 'multipart/form-data' } };
  // const response = yield call(api.post, 'files', fd, config);
  console.tron.log(action.payload.file);
}
