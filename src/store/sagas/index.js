import { all, takeLatest } from 'redux-saga/effects';
import { addUser, updateUser } from './users';
import { createSession, destroySession } from './sessions';
import { showMeetup, addMeetup, uploadFile } from './meetups';
import { loadRegistereds, loadNotRegistereds, loadRecomendeds } from './subscriptions';
import { Types as usersTypes } from '../ducks/users';
import { Types as sessionsTypes } from '../ducks/sessions';
import { Types as meetupsTypes } from '../ducks/meetups';
import { Types as subscriptionsTypes } from '../ducks/subscriptions';

export default function* rootSaga() {
  yield all([
    takeLatest(usersTypes.ADD_REQUEST, addUser),
    takeLatest(usersTypes.UPDATE_REQUEST, updateUser),

    takeLatest(sessionsTypes.CREATE_REQUEST, createSession),
    takeLatest(sessionsTypes.DESTROY_REQUEST, destroySession),

    takeLatest(meetupsTypes.SHOW_REQUEST, showMeetup),

    takeLatest(meetupsTypes.UPLOAD_REQUEST, uploadFile),
    takeLatest(meetupsTypes.ADD_REQUEST, addMeetup),

    takeLatest(subscriptionsTypes.LOAD_REGISTEREDS_REQUEST, loadRegistereds),
    takeLatest(subscriptionsTypes.LOAD_NOTREGISTEREDS_REQUEST, loadNotRegistereds),
    takeLatest(subscriptionsTypes.LOAD_RECOMENDEDS_REQUEST, loadRecomendeds),
  ]);
}
