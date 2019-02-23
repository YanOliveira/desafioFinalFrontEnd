import Preferences from '../pages/Preferences';

export const FIRSTLOGIN_KEY = '@MeetupApp-FirstLogin';
export const TOKEN_KEY = '@MeetupApp-Token';

export const setFirstLogin = (firstLogin) => {
  localStorage.setItem(FIRSTLOGIN_KEY, firstLogin);
};

export const checkFirstLogin = (component) => {
  if (localStorage.getItem(FIRSTLOGIN_KEY) === 'true') {
    return Preferences;
  }
  return component;
};
