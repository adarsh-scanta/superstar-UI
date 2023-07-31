import React, { lazy, useState, useEffect } from "react";
import { Row, Col, Form, Input, Button, Checkbox } from "antd";
import { ModalLoginButton, ModalCancelButton } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "../../redux/rootReducer";
import {
  VERIFY_FORGOT_TOKEN,
  UPDATE_USER_PASSWORD,
} from "../../redux/Login/Login.types";
import { toast } from "react-toastify";

// import MissionContent from "../../content/MissionContent.json";
const Container = lazy(() => import("../../common/Container"));
const ChangePasswordPage = () => {
  const history = useHistory(); 
  const userPasswordUpdated = useSelector(
    (data: RootState) => data?.login.userPasswordUpdated
  );

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((data: RootState) => data?.login.userLoggedIn);

  const [currentUser, setCurrentUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [currentTab, setCurrentTab] = useState("entry");

  useEffect(() => {
    const userId = window.location.pathname.split("/")[3];
    if (isLoggedIn) {
      history.push("/");
    }
    if (userId) {
      setCurrentUser(userId);
      setCurrentTab("changePass");
    }
  }, []);
  const handleChangePass = () => {
    if (password.length < 6) {
      toast.error("Password is not valid!");
    } else if (password !== confirmPassword) {
      toast.error("Both passwords should match!");
    } else {
      console.log(password, confirmPassword);
      dispatch({
        type: UPDATE_USER_PASSWORD,
        payload: { user_id: currentUser, password },
      });
    }
  };

  useEffect(() => {
    if (userPasswordUpdated?.message === "password successfully updated!") {
      setCurrentTab("success");
    }
  }, [userPasswordUpdated]);
  return (
    <>
      <Container>
        <Row justify="center">
          <div style={{ margin: "4rem auto 0" }}>
            <div
              style={{
                width: "500px",
                height: "400px",
                margin: "4rem auto",
                padding: "4rem 2rem",
                background: "#232B38",
                boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "10px",
              }}
            >
              {currentTab === "entry" && <div></div>}
              {currentTab === "changePass" && (
                <Form
                  layout="vertical"
                  name="basic"
                  labelCol={{
                    span: 12,
                  }}
                  wrapperCol={{
                    span: 24,
                  }}
                  initialValues={{
                    remember: true,
                  }}
                  autoComplete="off"
                >
                  <Form.Item
                    label={
                      <label style={{ color: "#fff", fontSize: "1.2em" }}>
                        Password
                      </label>
                    }
                    name="password"
                    rules={[
                      {
                        // required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      placeholder="Enter your password"
                      style={{
                        padding: "0.5rem",
                        border: "none",
                        background: "#5B5B5B",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        borderRadius: "6px",
                      }}
                    />
                  </Form.Item>
                  <Form.Item
                    label={
                      <label style={{ color: "#fff", fontSize: "1.2em" }}>
                        Confirm Password
                      </label>
                    }
                    name="confirmPassword"
                    rules={[
                      {
                        // required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input
                      onChange={(e) => {
                        setConfirmPassword(e.target.value);
                      }}
                      placeholder="Confirm your password"
                      style={{
                        padding: "0.5rem",
                        border: "none",
                        background: "#5B5B5B",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        borderRadius: "6px",
                      }}
                    />
                  </Form.Item>
                  <ModalLoginButton onClick={handleChangePass}>
                    <span
                      style={{
                        // margin: "0.8rem 1rem",
                        fontSize: "1.2em",
                        color: "#020202",
                      }}
                    >
                      Change
                    </span>
                  </ModalLoginButton>
                </Form>
              )}
              {currentTab === "success" && (
                <div style={{ margin: "4rem 2rem" }}>
                  <Row justify="center">
                    <p style={{ color: "#fff", fontSize: "1.2em" }}>
                      {userPasswordUpdated.message}
                    </p>
                  </Row>
                  <Row justify="center">
                    <p style={{ color: "#fff", fontSize: "1.2em" }}>
                      {userPasswordUpdated.message ===
                        "password successfully updated!" &&
                        `Please log-in to continue!`}
                    </p>
                  </Row>
                </div>
              )}
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default ChangePasswordPage;
