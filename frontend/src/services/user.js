import { jwtDecode } from "jwt-decode";

let token = null;

const STORAGE_KEY = "loggedUser";

const setUser = (user) => {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  token = user.token;
};

const getUser = () => {
  const loggedUserJSON = window.localStorage.getItem(STORAGE_KEY);
  if (loggedUserJSON) {
    const user = JSON.parse(loggedUserJSON);
    token = user.token;
    return user;
  }
  return null;
};

const clearUser = () => {
  window.localStorage.clear();
  token = null;
};

const isTokenExpired = (token) => {
  const decoded = jwtDecode(token);
  const now = Date.now() / 1000;
  return decoded.exp < now;
};

const getToken = () => {
  if (token && !isTokenExpired(token)) {
    return token;
  } else {
    clearUser();
    return null;
  }
};

const userService = {
  setUser,
  getUser,
  clearUser,
  getToken,
};

export default userService;
