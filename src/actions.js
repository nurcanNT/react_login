import { type } from "@testing-library/user-event/dist/type";

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const REGISTER = 'REGISTER';
export const TOGGLE_DARK_MODE = 'TOGGLE_DARK_MODE';
export const SET_EMAIL = 'SET_EMAIL';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_EMAIL_ERROR = 'SET_EMAIL_ERROR';
export const SET_PASSWORD_ERROR = 'SET_PASSWORD_ERROR';


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

  export const setEmail = (email) => ({
    type: SET_EMAIL,
    payload: email,
  });
  
  export const setPassword = (password) => ({
    type: SET_PASSWORD,
    payload: password,
  });
  
  export const setEmailError = (error) => ({
    type: SET_EMAIL_ERROR,
    payload: error,
  });
  
  export const setPasswordError = (error) => ({
    type: SET_PASSWORD_ERROR,
    payload: error,
  });