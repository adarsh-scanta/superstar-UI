import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  SEND_OTP_SUCCESS,
  LOGOUT,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SEND_OTP_FAILURE,
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP_FAILURE,
  GET_USER_DETAILS_SUCCESS,
  LOGIN_BY_LOCAL_STORAGE,
  SET_LOADING_TRUE,
  SET_LOADING_FALSE,
  UPDATE_USER_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_SUCCESS,
} from "./Login.types";

const initialState = {
  isLoading: false,
  userLoggedIn: false,
  loginData: {
    message: "",
  },
  signupData: {
    msg: "",
  },
  otpSentData: {},
  userData: {},
  userPasswordUpdated: {},
  forgotPassData: {},
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    // case LOGIN:
    //   return { ...state, userLoggedIn: true };
    case LOGOUT:
      return { ...state, userLoggedIn: false };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loginData: action.payload.data,
        userData: action.payload.data,
        userLoggedIn: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loginData: action.payload,
        userData: {},
        userLoggedIn: false,
      };

    case SEND_OTP_SUCCESS:
      return { ...state, otpSentData: action.payload.data };
    case SEND_OTP_FAILURE:
      return { ...state, otpSentData: action.payload.data };

    case VERIFY_OTP_SUCCESS:
      return { ...state, otpSentData: action.payload.data };
    case VERIFY_OTP_FAILURE:
      return { ...state, otpSentData: action.payload.data };

    case LOGOUT:
      return { ...state, userLoggedIn: false };

    case SIGNUP_SUCCESS:
      return { ...state, signupData: action.payload };
    case SIGNUP_FAILURE:
      return { ...state, loginData: action.payload };

    case GET_USER_DETAILS_SUCCESS:
      return {
        ...state,
        userData: action.payload.data,
      };

    case LOGIN_BY_LOCAL_STORAGE:
      return { ...state, userLoggedIn: true };
    case SET_LOADING_TRUE:
      return { ...state, isLoading: true };
    case SET_LOADING_FALSE:
      return { ...state, isLoading: false };
    case UPDATE_USER_PASSWORD_SUCCESS:
      return { ...state, userPasswordUpdated: action.payload.data };
    case FORGOT_PASSWORD_SUCCESS:
      return { ...state, forgotPassData: action.payload.data }; 

    default:
      return state;
  }
};

export default LoginReducer;
