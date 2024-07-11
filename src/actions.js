import { type } from "@testing-library/user-event/dist/type";

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';
export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';

export const login = (user) => ({
  type: LOGIN,
  payload: user
});

export const logout = () => ({
  type: LOGOUT
});

export const register = (user) => ({
  type: REGISTER,
  payload: user
});

export const toggleDarkMode = () => ({
    type: TOGGLE_DARK_MODE,
  });
