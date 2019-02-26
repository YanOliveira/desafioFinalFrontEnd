import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { getUser, setUser } from "../../services/localStorage";

import { creators as usersActions } from "../ducks/users";

export function* showMeetup(action) {
  console.tron.log("teste" + action);
}
