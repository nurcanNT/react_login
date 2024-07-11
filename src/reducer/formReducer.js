import {
    SET_EMAIL,
    SET_PASSWORD,
    SET_EMAIL_ERROR,
    SET_PASSWORD_ERROR,
  } from '../actions';
  
  const initialState = {
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
  };
  
  const formReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_EMAIL:
        return { ...state, email: action.payload };
      case SET_PASSWORD:
        return { ...state, password: action.payload };
      case SET_EMAIL_ERROR:
        return { ...state, emailError: action.payload };
      case SET_PASSWORD_ERROR:
        return { ...state, passwordError: action.payload };
      default:
        return state;
    }
  };
  
  export default formReducer;
  