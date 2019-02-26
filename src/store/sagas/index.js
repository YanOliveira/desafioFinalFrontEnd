import { all, takeLatest } from "redux-saga/effects";
import { addUser, updateUser } from "./users";
import { createSession, destroySession } from "./sessions";
import { showMeetup } from "./meetups";
import { Types as usersTypes } from "../ducks/users";
import { Types as sessionsTypes } from "../ducks/sessions";
import { Types as meetupsTypes } from "../ducks/meetups";

export default function* rootSaga() {
  yield all([
    takeLatest(usersTypes.ADD_REQUEST, addUser),
    takeLatest(usersTypes.UPDATE_REQUEST, updateUser),

    takeLatest(sessionsTypes.CREATE_REQUEST, createSession),
    takeLatest(sessionsTypes.DESTROY_REQUEST, destroySession),

    takeLatest(meetupsTypes.SHOW_REQUEST, showMeetup)
  ]);
}
