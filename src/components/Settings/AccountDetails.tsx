import React, { lazy, useState, useEffect } from "react";
import { Row, Col, Form, Input, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { useHistory, Link } from "react-router-dom";
import { useLastLocation } from "react-router-last-location";

import FileUploadModal from "./FileUploadModal";
import {
  UPDATE_EMAIL,
  GET_USER_DETAILS,
  UPDATE_USER_DETAILS,
} from "../../redux/Login/Login.types";

import {
  CancelButton,
  SaveButton,
  // CustomCheckbox,
} from "./Styles";
function AccountDetails() {
  const dispatch = useDispatch();
  const lastLocation = useLastLocation();
  const history = useHistory();
  const userData = useSelector((data: RootState) => data?.login.userData);

  const isLoggedIn = useSelector((data: RootState) => data?.login.userLoggedIn);

  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [usernameInput, setUsernameInput] = useState("");
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");

  const handleUploadCancel = () => {
    setIsUploadModalOpen(false);
  };
  const showUploadModal = () => {
    setIsUploadModalOpen(true);
  };

  const getUserDetails = () => {
    dispatch({ type: GET_USER_DETAILS, payload: { userId: userData.id } });
  };

  const setDefaultData = () => {
    setUsernameInput(userData?.username);
    setFirstNameInput(userData?.firstName);
    setLastNameInput(userData?.lastName);
    setEmailInput(userData?.email);
    // setPhoneInput(userData?.mobile_number);
  };
  useEffect(() => {
    setDefaultData();
  }, [userData]);

  const handleCancel = () => {
    setDefaultData();
  };

  const handleSave = () => {
    // if (usernameInput !== userData?.username) {
    //   dispatch({
    //     type: UPDATE_USERNAME,
    //     payload: {
    //       username: usernameInput,
    //     },
    //   });
    // }
    // if (emailInput !== userData?.email) {
    //   dispatch({
    //     type: UPDATE_EMAIL,
    //     payload: {
    //       email: emailInput,
    //     },
    //   });
    // }
    // if (phoneInput !== userData?.mobile_number) {
    //   dispatch({
    //     type: UPDATE_PHONE,
    //     payload: {
    //       mobile_number: phoneInput,
    //     },
    //   });
    // }
    dispatch({
      type: UPDATE_USER_DETAILS,
      payload: {
        id: userData.id,
        firstName: firstNameInput,
        lastName: lastNameInput,
      },
    });
    getUserDetails();
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div style={{ margin: "4rem" }}>
      <Row justify="space-between">
        <Col sm={24} lg={14}>
          <Form
            layout="vertical"
            name="basic"
            labelCol={{
              span: 18,
              sm: 24,
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
                    // fontWeight: "bold",
                  }}
                >
                  First Name
                </label>
              }
              name="firstName"
            >
              {console.log(firstNameInput, lastNameInput)}
              <Input
                onChange={(e) => {
                  setFirstNameInput(e.target.value);
                }}
                value={firstNameInput}
                // placeholder="Enter your username or email"
                style={{
                  padding: "0.5rem",
                  border: "none",
                  background: "#222534",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "6px",
                }}
              />
            </Form.Item>{" "}
            <Form.Item
              // value={"NFT ALPHA"}
              label={
                <label
                  style={{
                    color: "#FFBE55",
                    fontSize: "1.5em",
                    // fontWeight: "bold",
                  }}
                >
                  Last Name
                </label>
              }
              name="lastName"
            >
              {console.log(firstNameInput, lastNameInput)}
              <Input
                onChange={(e) => {
                  setLastNameInput(e.target.value);
                }}
                value={lastNameInput}
                // placeholder="Enter your username or email"
                style={{
                  padding: "0.5rem",
                  border: "none",
                  background: "#222534",
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
                    // fontWeight: "bold",
                  }}
                >
                  Email address
                </label>
              }
              name="email"
            >
              {console.log(emailInput)}
              <Input
                onChange={(e) => {
                  setEmailInput(e.target.value);
                }}
                disabled={true}
                value={emailInput}
                // placeholder="Enter your username or email"
                style={{
                  padding: "0.5rem",
                  border: "none",
                  background: "#222534",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "6px",
                }}
              />
            </Form.Item>
            {/* <Form.Item
              // value={"NFT ALPHA"}
              label={
                <label
                  style={{
                    color: "#FFBE55",
                    fontSize: "1.5em",
                    fontWeight: "bold",
                  }}
                >
                  Phone number
                </label>
              }
              name="phone"
              rules={[
                {
                  // required: true,
                  // message: "Please input your username!",
                },
              ]}
            >
              {" "}
              {console.log(phoneInput)}
              <Input
                value={phoneInput}
                onChange={(e) => {
                  setPhoneInput(e.target.value);
                }}
                // placeholder="Enter your username or email"
                style={{
                  padding: "0.5rem",
                  border: "none",
                  background: "#222534",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  borderRadius: "6px",
                }}
              />
            </Form.Item> */}
            <Row justify="end">
              <Col>
                <Link
                  to={
                    lastLocation !== null
                      ? lastLocation?.pathname
                      : "/marketplace"
                  }
                >
                  <CancelButton>
                    {/* {console.log("loginData",loginData.user.username)} */}
                    <span
                      style={{
                        margin: "0.8rem 1rem",
                        fontSize: "1.2em",
                        // fontWeight: "bold",
                        color: "#fff",
                      }}
                    >
                      Cancel
                    </span>
                  </CancelButton>
                </Link>
              </Col>
              <Col>
                <SaveButton onClick={handleSave}>
                  <span
                    style={{
                      margin: "0.8rem 1rem",
                      fontSize: "1.2em",
                      // fontWeight: "bold",
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
        <Col xs={0} sm={0} lg={8}>
          <div
            style={{
              position: "relative",
              left: "20px",
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              background: `url("/img/icons/profileDP.png") no-repeat center center`,
            }}
          >
            {/* <div
              style={{
                position: "absolute",
                bottom: "10px",
                right: "20px",
                width: "35px",
                padding: "2px 3px",
                height: "35px",
                borderRadius: "18px",
                background: "#FFBE55",
                border: "4px solid #232b38",
              }}
              onClick={() => {
                showUploadModal();
              }}
            >
              <img src="/img/svg/editIcon.svg" />
              <Modal
                style={{
                  margin: "0",
                  padding: "0",
                  borderRadius: "12px",
                  border: "1px solid #fff",
                  overflow: "hidden",
                }}
                className="modalStyle"
                centered={true}
                closable={true}
                width={700}
                visible={isUploadModalOpen}
                footer={null}
                cancelButtonProps={{ style: { display: "none" } }}
                okButtonProps={{ style: { display: "none" } }}
                onCancel={handleUploadCancel}
                bodyStyle={{ background: "#121825" }}
              >
                <FileUploadModal handleUploadCancel={handleUploadCancel} />
              </Modal>
            </div> */}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default AccountDetails;
