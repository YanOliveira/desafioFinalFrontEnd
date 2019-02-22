export const TOKEN_KEY = "@MeetupApp-Token";
export const FIRSTLOGIN_KEY = "@MeetupApp-FirstLogin";

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const firstLogin = () => localStorage.getItem(FIRSTLOGIN_KEY);

export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(FIRSTLOGIN_KEY);
};

export const load = firstLogin => {
  localStorage.setItem(FIRSTLOGIN_KEY, firstLogin);
};
