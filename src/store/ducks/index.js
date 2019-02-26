import { combineReducers } from "redux";
import users from "./users";
import sessions from "./sessions";
import meetups from "./meetups";

export default combineReducers({
  users,
  sessions,
  meetups
});
