import React, { useState, useEffect } from "react";
import { Row, Col, Form, Input, Button, Checkbox, Switch } from "antd";
import { SvgIcon } from "../../common/SvgIcon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { UPDATE_PASSWORD } from "../../redux/Login/Login.types";
import {
  CancelButton,
  SaveButton,
  // CustomCheckbox,
} from "./Styles";
import { toast } from "react-toastify";

function ChangePassword({ openTab }) {
  const dispatch = useDispatch();
  const userData = useSelector((data: RootState) => data?.login.userData);

  const [currentPasswordInput, setCurrentPasswordInput] = useState("");
  const [newPasswordInput, setNewPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");

  const handleSave = () => {
    if (newPasswordInput === confirmPasswordInput) {
      dispatch({
        type: UPDATE_PASSWORD,
        payload: {
          id: userData.id,
          password: newPasswordInput,
        },
      });
    } else {
      toast.error("Both password should match");
    }
  };

  return (
    <div style={{ margin: "2rem" }}>
      <div style={{ margin: "2rem" }}>
        <div style={{ marginBottom: "1rem" }}>
          <Row justify="space-between">
            <Col>
              <div
                onClick={() => {
                  openTab("security");
                }}
              >
                <SvgIcon src={"backIcon.svg"} width="45px" height="45px" />
              </div>
            </Col>
            <Col>
              <span style={{ fontSize: "1.4rem", fontWeight: "bold" }}>
                Update Password
              </span>
            </Col>
          </Row>
        </div>
        <Row justify="space-between">
          <Col span={18}>
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
              // onFinish={onFinish}
              // onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                // value={"NFT ALPHA"}
                label={
                  <label
                    style={{
                      color: "#FFBE55",
                      fontSize: "1.5em",
                      fontWeight: "bold",
                    }}
                  >
                    Current Password
                  </label>
                }
                name="currentPassword"
                rules={[
                  {
                    // required: true,
                    // message: "Please input your username!",
                  },
                ]}
              >
                <Input
                  onChange={(e) => {
                    setCurrentPasswordInput(e.target.value);
                  }}
                  type={"password"}
                  placeholder="Enter your current password"
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
                // value={"NFT ALPHA"}
                label={
                  <label
                    style={{
                      color: "#FFBE55",
                      fontSize: "1.5em",
                      fontWeight: "bold",
                    }}
                  >
                    New Password
                  </label>
                }
                name="newPassword"
                rules={[
                  {
                    // required: true,
                    // message: "Please input your username!",
                  },
                ]}
              >
                <Input
                  onChange={(e) => {
                    setNewPasswordInput(e.target.value);
                  }}
                  type={"password"}
                  placeholder="Enter your new password"
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
                labelCol={{ span: 18, offset: 0 }}
                // value={"NFT ALPHA"}
                label={
                  <label
                    style={{
                      color: "#FFBE55",
                      fontSize: "1.5em",
                      fontWeight: "bold",
                    }}
                  >
                    Confirm New Password
                  </label>
                }
                name="confirmPassword"
                rules={[
                  {
                    // required: true,
                    // message: "Please input your username!",
                  },
                ]}
              >
                <Input
                  onChange={(e) => {
                    setConfirmPasswordInput(e.target.value);
                  }}
                  type={"password"}
                  placeholder="Enter confirm password"
                  style={{
                    padding: "0.5rem",
                    border: "none",
                    background: "#5B5B5B",
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: "6px",
                  }}
                />
              </Form.Item>

              <Row justify="end">
                <Col>
                  <CancelButton
                    onClick={() => {
                      openTab("security");
                    }}
                  >
                    <span
                      style={{
                        margin: "0.8rem 1rem",
                        fontSize: "1.2em",
                        fontWeight: "bold",
                        color: "#fff",
                      }}
                    >
                      Cancel
                    </span>
                  </CancelButton>
                </Col>
                <Col>
                  <SaveButton onClick={handleSave}>
                    <span
                      style={{
                        margin: "0.8rem 1rem",
                        fontSize: "1.2em",
                        fontWeight: "bold",
                        color: "#020202",
                      }}
                    >
                      Save Changes
                    </span>
                  </SaveButton>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default ChangePassword;
