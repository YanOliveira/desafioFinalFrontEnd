import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { getUser, setUser } from "../../services/localStorage";

import { creators as meetupsActions } from "../ducks/meetups";

export function* showMeetup(action) {
  console.tron.log(`teste${action}`);
}

export function* uploadFile(action) {
  try {
    const formData = new FormData();
    formData.append("file", action.payload.meetup.file_id);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };

    const { data } = yield call(api.post, "files", formData, config);
    const meetup = { ...action.payload.meetup, file_id: data.id };
    yield put(meetupsActions.addMeetupRequest(meetup, action.payload.history));
  } catch (error) {
    yield put(meetupsActions.uploadFailure(error.response.data));
  }
}

export function* addMeetup(action) {
  console.tron.log(action.payload.meetup);
  try {
    yield call(api.post, "meetups", action.payload.meetup);
    yield put(
      meetupsActions.addMeetupSuccess(
        action.payload.meetup,
        action.payload.history
      )
    );
  } catch (error) {
    yield put(meetupsActions.addMeetupFailure(error.response.data));
  }
}
