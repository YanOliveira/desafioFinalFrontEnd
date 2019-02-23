import Preferences from '../pages/Preferences';

export const FIRSTLOGIN_KEY = '@MeetupApp-FirstLogin';
export const TOKEN_KEY = '@MeetupApp-Token';
export const USER_LOGGED = '@MeetupApp-UserLogged';
export const TECHNOLOGIES = '@MeetupApp-Technologies';

export const setFirstLogin = (firstLogin) => {
  localStorage.setItem(FIRSTLOGIN_KEY, firstLogin);
};

export const setUser = (user) => {
  localStorage.setItem(USER_LOGGED, JSON.stringify(user));
};

export const setTechnologies = (technologies) => {
  localStorage.setItem(TECHNOLOGIES, JSON.stringify(technologies));
};

export const checkFirstLogin = (component) => {
  if (localStorage.getItem(FIRSTLOGIN_KEY) === 'true') {
    return Preferences;
  }
  return component;
};

export const getTechnologies = () => localStorage.getItem(TECHNOLOGIES);
export const getUser = () => localStorage.getItem(USER_LOGGED);
