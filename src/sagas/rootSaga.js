import { spawn } from "redux-saga/effects";
import LoginSaga from "./Login.saga";
import DashboardSaga from "./Dashboard.saga";

function* rootSaga() {
  yield spawn(LoginSaga);
  yield spawn(DashboardSaga);
}

export default rootSaga;
