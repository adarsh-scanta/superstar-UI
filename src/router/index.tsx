import { lazy, Suspense, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Row, Col, Drawer, Dropdown, Menu, Modal } from "antd";
import Footer from "../components/Footer";
import Header from "../components/Header";
import routes from "./config";
import { Styles } from "../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LOGIN_BY_LOCAL_STORAGE, LOGOUT } from "../redux/Login/Login.types";


const Router = () => {

  toast.configure();
  const dispatch = useDispatch();

  useEffect(() => {
    const authToken = localStorage.getItem("Authorization-token");
    const expiryTime = localStorage.getItem("expiry-time");
    const isExpired = Date.now() > parseInt(expiryTime);

    if (authToken && !isExpired) {
      dispatch({
        type: LOGIN_BY_LOCAL_STORAGE,
        payload: {},
      });
    } else {
      localStorage.removeItem("Authorization-token");
      localStorage.removeItem("expiry-time");
      localStorage.removeItem("user-data");
      dispatch({ type: LOGOUT, payload: true });
    }
  }, []);

  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Switch>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(() => import(`../pages/${routeItem.component}`))}
            />
          );
        })}
      </Switch>
      <Footer />
     
    </Suspense>
  ); 
};

export default Router;
