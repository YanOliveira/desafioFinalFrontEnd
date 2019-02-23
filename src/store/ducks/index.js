import { combineReducers } from 'redux';
import users from './users';
import sessions from './sessions';
import technologies from './technologies';

export default combineReducers({
  users,
  sessions,
  technologies,
});
