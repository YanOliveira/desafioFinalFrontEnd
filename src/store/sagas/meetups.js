import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { creators as meetupsActions } from '../ducks/meetups';

export function* showMeetup(action) {
  try {
    const { data } = yield call(api.get, `meetups/${action.payload.id}`);
    yield put(meetupsActions.showMeetupSuccess(data));
  } catch (error) {
    action.payload.history.push('/');
    yield put(
      meetupsActions.showMeetupFailure({ message: 'Não foi possível encontrar este meetup.' }),
    );
  }
}

export function* uploadFile(action) {
  try {
    const formData = new FormData();
    formData.append('file', action.payload.meetup.file_id);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };

    const { data } = yield call(api.post, 'files', formData, config);
    const meetup = { ...action.payload.meetup, file_id: data.id };
    yield put(meetupsActions.addMeetupRequest(meetup, action.payload.history));
  } catch (error) {
    yield put(meetupsActions.uploadFailure(error.response.data));
  }
}

export function* addMeetup(action) {
  try {
    yield call(api.post, 'meetups', action.payload.meetup);
    yield put(meetupsActions.addMeetupSuccess(action.payload.meetup, action.payload.history));
  } catch (error) {
    yield put(meetupsActions.addMeetupFailure(error.response.data));
  }
}

export function* redirectIfAdd(action) {
  yield action.payload.history.push('/');
}
