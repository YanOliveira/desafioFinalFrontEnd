export const TOKEN_KEY = '@MeetupApp-Token';
export const USER_KEY = '@MeetupApp-User';

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getUser = () => localStorage.getItem(USER_KEY);

export const login = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
};

export const load = (user) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};
