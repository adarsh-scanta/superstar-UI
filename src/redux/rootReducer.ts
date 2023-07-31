import { combineReducers } from "redux";
import LoginReducer from "./Login/Login.reducer";
import DashboardReducer from "./Dashboard/Dashboard.reducer" 

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  login: LoginReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
