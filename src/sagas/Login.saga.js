import { takeLatest, put } from "@redux-saga/core/effects";
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SEND_OTP,
  SEND_OTP_SUCCESS,
  SEND_OTP_FAILURE,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  VERIFY_OTP,
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP_FAILURE,
  GET_USER_DETAILS,
  GET_USER_DETAILS_SUCCESS,
  GET_USER_DETAILS_FAILURE,
  UPDATE_USERNAME,
  UPDATE_USERNAME_SUCCESS,
  UPDATE_USERNAME_FAILURE,
  UPDATE_EMAIL,
  UPDATE_EMAIL_SUCCESS,
  UPDATE_EMAIL_FAILURE,
  UPDATE_PHONE,
  UPDATE_PHONE_SUCCESS,
  UPDATE_PHONE_FAILURE,
  UPDATE_SOCIAL_ACCOUNTS,
  UPDATE_SOCIAL_ACCOUNTS_SUCCESS,
  UPDATE_SOCIAL_ACCOUNTS_FAILURE,
  UPDATE_NOTIFICATION_SETTINGS,
  UPDATE_NOTIFICATION_SETTINGS_SUCCESS,
  UPDATE_NOTIFICATION_SETTINGS_FAILURE,
  DELETE_ACCOUNT_PERMANENTLY,
  DELETE_ACCOUNT_PERMANENTLY_SUCCESS,
  DELETE_ACCOUNT_PERMANENTLY_FAILURE,
  UPDATE_PASSWORD,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAILURE,
  UPDATE_USER_DETAILS,
  UPDATE_USER_DETAILS_SUCCESS,
  UPDATE_USER_DETAILS_FAILURE,
  CREATE_PKH_PK,
  CREATE_PKH_PK_SUCCESS,
  CREATE_PKH_PK_FAILURE,
  FORGOT_PASSWORD,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  VERIFY_FORGOT_TOKEN,
  VERIFY_FORGOT_TOKEN_SUCCESS,
  VERIFY_FORGOT_TOKEN_FAILURE,
  UPDATE_USER_PASSWORD,
  UPDATE_USER_PASSWORD_SUCCESS,
  UPDATE_USER_PASSWORD_FAILURE,
} from "../redux/Login/Login.types";
import { login } from "../services/login.api";
import { signup } from "../services/signup.api";
import { sendOtp } from "../services/sendOtp.api";
import { verifyOtp } from "../services/verifyOtp.api";
import { updateUName } from "../services/updateUName.api";
import { updateUserEmail } from "../services/updateUserEmail.api";
import { updateUserPhone } from "../services/updateUserPhone.api";
import { getUserDetails } from "../services/getUserDetails.api";
import { updateSocialAccounts } from "../services/updateSocialAccounts.api";
import { updateNotificationSettings } from "../services/updateNotificationSettings.api";
import { deleteAccount } from "../services/deleteAccount.api";
import { updatePassword } from "../services/updatePassword.api";
import { updateUserDetails } from "../services/updateUserDetails.api";
import { createPKHPK } from "../services/createPKHPK.api";
import { forgotPassword } from "../services/forgotPassword.api";
import { verifyForgotToken } from "../services/verifyForgotToken.api";
import { updateUserPassword } from "../services/updateUserPassword.api";

function* loginUser(action) {
  const response = yield login(action);
  if (response) {
    if (response.status >= 200 && response.status < 300) {
      yield put({
        type: LOGIN_SUCCESS,
        payload: response,
      });
    } else {
      yield put({
        type: LOGIN_FAILURE,
        payload: { message: response.response.data },
      });
    }
  } else {
    yield put({
      type: LOGIN_FAILURE,
      payload: response,
    });
  }
}

function* sendOTP(action) {
  const response = yield sendOtp(action);
  if (response) {
    if (
      response.status >= 200 &&
      response.status < 300 &&
      response.data.message === "OTP sent."
    ) {
      console.log(response);
      yield put({
        type: SEND_OTP_SUCCESS,
        payload: { data: response.data },
      });
    } else {
      yield put({
        type: SEND_OTP_FAILURE,
        payload: { data: response.data },
      });
    }
  } else {
    yield put({
      type: SEND_OTP_FAILURE,
      payload: response,
    });
  }
}

function* verifyOTP(action) {
  const response = yield verifyOtp(action);
  if (response) {
    if (
      response.status >= 200 &&
      response.status < 300 &&
      response?.data === "OTP Verified successfully!"
    ) {
      yield put({
        type: VERIFY_OTP_SUCCESS,
        payload: { data: response?.data },
      });
    }
  } else {
    yield put({
      type: VERIFY_OTP_FAILURE,
      payload: { data: response?.data },
    });
  }
}

function* signupUser(action) {
  const response = yield signup(action);
  if (response) {
    if (response.status >= 200 && response.status < 300) {
      yield put({
        type: SIGNUP_SUCCESS,
        payload: response.data,
      });
      yield put({
        type: LOGIN,
        payload: {
          email: action.payload.email,
          password: action.payload.password,
        },
      });
      // yield put({
      //   type: CREATE_PKH_PK,
      //   // payload: response.data,
      // });
    } else {
      yield put({
        type: SIGNUP_FAILURE,
        payload: { message: response.response.data },
      });
    }
  } else {
    yield put({
      type: SIGNUP_FAILURE,
      payload: response,
    });
  }
}

function* getUDetails(action) {
  const response = yield getUserDetails(action);
  if (response) {
    if (response.status >= 200 && response.status < 300) {
      yield put({
        type: GET_USER_DETAILS_SUCCESS,
        payload: response,
      });
    } else {
      yield put({
        type: GET_USER_DETAILS_FAILURE,
        payload: { message: response.data },
      });
    }
  } else {
    yield put({
      type: GET_USER_DETAILS_FAILURE,
      payload: response,
    });
  }
}

function* updateUserName(action) {
  const response = yield updateUName(action);
  if (response) {
    if (response.status >= 200 && response.status < 300) {
      yield put({
        type: UPDATE_USERNAME_SUCCESS,
        payload: response.data,
      });
    } else {
      yield put({
        type: UPDATE_USERNAME_FAILURE,
        payload: { message: response.response.data },
      });
    }
  } else {
    yield put({
      type: UPDATE_USERNAME_FAILURE,
      payload: response,
    });
  }
}

function* updateEmail(action) {
  const response = yield updateUserEmail(action);
  if (response) {
    if (response.status >= 200 && response.status < 300) {
      yield put({
        type: UPDATE_EMAIL_SUCCESS,
        payload: response.data,
      });
    } else {
      yield put({
        type: UPDATE_EMAIL_FAILURE,
        payload: { message: response.response.data },
      });
    }
  } else {
    yield put({
      type: UPDATE_EMAIL_FAILURE,
      payload: response,
    });
  }
}

function* updatePhone(action) {
  const response = yield updateUserPhone(action);
  if (response) {
    if (response.status >= 200 && response.status < 300) {
      yield put({
        type: UPDATE_PHONE_SUCCESS,
        payload: response.data,
      });
    } else {
      yield put({
        type: UPDATE_PHONE_FAILURE,
        payload: { message: response.response.data },
      });
    }
  } else {
    yield put({
      type: UPDATE_PHONE_FAILURE,
      payload: response,
    });
  }
}

function* updateSocial(action) {
  const response = yield updateSocialAccounts(action);
  if (response) {
    if (response.status >= 200 && response.status < 300) {
      yield put({
        type: UPDATE_SOCIAL_ACCOUNTS_SUCCESS,
        payload: response.data,
      });
    } else {
      yield put({
        type: UPDATE_SOCIAL_ACCOUNTS_FAILURE,
        payload: { message: response.response.data },
      });
    }
  } else {
    yield put({
      type: UPDATE_SOCIAL_ACCOUNTS_FAILURE,
      payload: response,
    });
  }
}

function* updateNotification(action) {
  const response = yield updateNotificationSettings(action);
  if (response) {
    if (response.status >= 200 && response.status < 300) {
      yield put({
        type: UPDATE_NOTIFICATION_SETTINGS_SUCCESS,
        payload: response.data,
      });
    } else {
      yield put({
        type: UPDATE_NOTIFICATION_SETTINGS_FAILURE,
        payload: { message: response.response.data },
      });
    }
  } else {
    yield put({
      type: UPDATE_NOTIFICATION_SETTINGS_FAILURE,
      payload: response,
    });
  }
}

function* deleteAcc(action) {
  const response = yield deleteAccount(action);
  if (response) {
    if (response.status >= 200 && response.status < 300) {
      yield put({
        type: DELETE_ACCOUNT_PERMANENTLY_SUCCESS,
        payload: response.data,
      });
    } else {
      yield put({
        type: DELETE_ACCOUNT_PERMANENTLY_FAILURE,
        payload: { message: response.response.data },
      });
    }
  } else {
    yield put({
      type: DELETE_ACCOUNT_PERMANENTLY_FAILURE,
      payload: response,
    });
  }
}

function* updatePass(action) {
  const response = yield updatePassword(action);
  if (response) {
    if (response.status >= 200 && response.status < 300) {
      yield put({
        type: UPDATE_PASSWORD_SUCCESS,
        payload: response.data,
      });
    } else {
      yield put({
        type: UPDATE_PASSWORD_FAILURE,
        payload: { message: response.response.data },
      });
    }
  } else {
    yield put({
      type: UPDATE_PASSWORD_FAILURE,
      payload: response,
    });
  }
}

function* updateUserData(action) {
  const response = yield updateUserDetails(action);
  if (response) {
    if (response.status >= 200 && response.status < 300) {
      yield put({
        type: UPDATE_PASSWORD_SUCCESS,
        payload: response.data,
      });
    } else {
      yield put({
        type: UPDATE_PASSWORD_FAILURE,
        payload: { message: response.response.data },
      });
    }
  } else {
    yield put({
      type: UPDATE_PASSWORD_FAILURE,
      payload: response,
    });
  }
}

function* createPkhPk(action) {
  const response = yield createPKHPK(action);
  if (response) {
    if (response.status >= 200 && response.status < 300) {
      yield put({
        type: CREATE_PKH_PK_SUCCESS,
        payload: response.data,
      });
    } else {
      yield put({
        type: CREATE_PKH_PK_FAILURE,
        payload: { message: response.response.data },
      });
    }
  } else {
    yield put({
      type: CREATE_PKH_PK_FAILURE,
      payload: response,
    });
  }
}

function* handleForgotPassword(action) {
  const response = yield forgotPassword(action);
  if (response) {
    if (
      response.status >= 200 &&
      response.status < 300 &&
      response.data?.message ===
        "password reset link sent to your email account"
    ) {
      yield put({
        type: FORGOT_PASSWORD_SUCCESS,

        payload: response,
      });
    }
  } else {
    yield put({
      type: FORGOT_PASSWORD_FAILURE,
      payload: response,
    });
  }
}

function* verifyPassToken(action) {
  const response = yield verifyForgotToken(action);
  if (response) {
    yield put({
      type: VERIFY_FORGOT_TOKEN_SUCCESS,

      payload: response,
    });
  } else {
    yield put({
      type: VERIFY_FORGOT_TOKEN_FAILURE,
      payload: response,
    });
  }
}

function* updateUserPass(action) {
  const response = yield updateUserPassword(action);
  if (response) {
    yield put({
      type: UPDATE_USER_PASSWORD_SUCCESS,

      payload: response,
    });
  } else {
    yield put({
      type: UPDATE_USER_PASSWORD_FAILURE,
      payload: response,
    });
  }
}

function* LoginSaga() {
  yield takeLatest(LOGIN, loginUser);
  yield takeLatest(SEND_OTP, sendOTP);
  yield takeLatest(SIGNUP, signupUser);
  yield takeLatest(VERIFY_OTP, verifyOTP);
  yield takeLatest(UPDATE_USERNAME, updateUserName);
  yield takeLatest(UPDATE_EMAIL, updateEmail);
  yield takeLatest(UPDATE_PHONE, updatePhone);
  yield takeLatest(GET_USER_DETAILS, getUDetails);
  yield takeLatest(UPDATE_SOCIAL_ACCOUNTS, updateSocial);
  yield takeLatest(UPDATE_NOTIFICATION_SETTINGS, updateNotification);
  yield takeLatest(DELETE_ACCOUNT_PERMANENTLY, deleteAcc);
  yield takeLatest(UPDATE_PASSWORD, updatePass);
  yield takeLatest(UPDATE_USER_DETAILS, updateUserData);
  yield takeLatest(CREATE_PKH_PK, createPkhPk);
  yield takeLatest(FORGOT_PASSWORD, handleForgotPassword);
  yield takeLatest(VERIFY_FORGOT_TOKEN, verifyPassToken);
  yield takeLatest(UPDATE_USER_PASSWORD, updateUserPass);
}

export default LoginSaga;
