import React, { useState, useEffect } from "react";
import { Row, Col, Form, Input, Button, Checkbox, Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import {
  GET_USER_DETAILS,
  UPDATE_SOCIAL_ACCOUNTS,
} from "../../redux/Login/Login.types";
import { SvgIcon } from "../../common/SvgIcon";
import {
  CancelButton,
  SaveButton,
  // CustomCheckbox,
} from "./Styles";

function SocialAccounts() {
  const dispatch = useDispatch();

  const userData = useSelector((data: RootState) => data?.login.userData);

  const [facebookInput, setFacebookInput] = useState("");
  const [twitterInput, setTwitterInput] = useState("");
  const [instagramInput, setInstagramInput] = useState("");
  const [discordInput, setDiscordInput] = useState("");

  const getUserDetails = () => {
    dispatch({ type: GET_USER_DETAILS, payload: { userId: userData.id } });
  };

  const setDefaultData = () => {
    setFacebookInput(userData?.facebook);
    setTwitterInput(userData?.twitter);
    setInstagramInput(userData?.instagram);
    setDiscordInput(userData?.discord);
  };
 
  useEffect(() => {
    setDefaultData();
  }, [userData]);


  const handleCancel = () => {
    setDefaultData();
  };

  const handleSave = () => {
      dispatch({
        type: UPDATE_SOCIAL_ACCOUNTS,
        payload: {
          facebook: facebookInput,
          instagram: instagramInput,
          twitter: twitterInput,
          discord: discordInput,
        },
      });
    getUserDetails();
  };

   useEffect(() => {
     getUserDetails();
   }, []);




  return (
    <div style={{ margin: "4rem" }}>
      <div style={{ margin: "2rem" }}>
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
              <div style={{ display: "flex", position: "relative" }}>
                <span
                  style={{ position: "absolute", top: "44px", left: "-40px" }}
                >
                  <SvgIcon src={"fbIconWhite.svg"} width="100%" height="100%" />
                </span>
                <span>
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
                        Facebook
                      </label>
                    }
                    name="facebook"
                    rules={[
                      {
                        // required: true,
                        // message: "Please input your username!",
                      },
                    ]}
                  >
                    {console.log(facebookInput)}
                    <Input
                      value={facebookInput}
                      onChange={(e) => {
                        setFacebookInput(e.target.value);
                      }}
                      // placeholder="Enter your username or email"
                      style={{
                        padding: "0.5rem",
                        border: "none",
                        background: "#5B5B5B",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        borderRadius: "6px",
                        width: "350px",
                      }}
                    />
                  </Form.Item>
                </span>
              </div>
              <div style={{ display: "flex", position: "relative" }}>
                <span
                  style={{ position: "absolute", top: "44px", left: "-40px" }}
                >
                  <SvgIcon
                    src={"instaIconWhite.svg"}
                    width="100%"
                    height="100%"
                  />
                </span>
                <span>
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
                        Instagram
                      </label>
                    }
                    name="instagram"
                    rules={[
                      {
                        // required: true,
                        // message: "Please input your username!",
                      },
                    ]}
                  >
                    {console.log(instagramInput)}
                    <Input
                      value={instagramInput}
                      onChange={(e) => {
                        setInstagramInput(e.target.value);
                      }} // placeholder="Enter your username or email"
                      style={{
                        padding: "0.5rem",
                        border: "none",
                        background: "#5B5B5B",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        borderRadius: "6px",
                        width: "350px",
                      }}
                    />
                  </Form.Item>
                </span>
              </div>
              <div style={{ display: "flex", position: "relative" }}>
                <span
                  style={{ position: "absolute", top: "44px", left: "-40px" }}
                >
                  <SvgIcon
                    src={"twitterIconWhite.svg"}
                    width="100%"
                    height="100%"
                  />
                </span>
                <span>
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
                        Twitter
                      </label>
                    }
                    name="twitter"
                    rules={[
                      {
                        // required: true,
                        // message: "Please input your username!",
                      },
                    ]}
                  >
                    {console.log(twitterInput)}
                    <Input
                      value={twitterInput}
                      onChange={(e) => {
                        setTwitterInput(e.target.value);
                      }} // placeholder="Enter your username or email"
                      style={{
                        padding: "0.5rem",
                        border: "none",
                        background: "#5B5B5B",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        borderRadius: "6px",
                        width: "350px",
                      }}
                    />
                  </Form.Item>
                </span>
              </div>
              <div style={{ display: "flex", position: "relative" }}>
                <span
                  style={{ position: "absolute", top: "44px", left: "-40px" }}
                >
                  <SvgIcon
                    src={"discordIconWhite.svg"}
                    width="100%"
                    height="100%"
                  />
                </span>
                <span>
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
                        Discord
                      </label>
                    }
                    name="discord"
                    rules={[
                      {
                        // required: true,
                        // message: "Please input your username!",
                      },
                    ]}
                  >
                    {console.log(discordInput)}
                    <Input
                      value={discordInput}
                      onChange={(e) => {
                        setDiscordInput(e.target.value);
                      }} // placeholder="Enter your username or email"
                      style={{
                        padding: "0.5rem",
                        border: "none",
                        background: "#5B5B5B",
                        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                        borderRadius: "6px",
                        width: "350px",
                      }}
                    />
                  </Form.Item>
                </span>
              </div>
              <Row justify="end">
                <Col>
                  <CancelButton onClick={handleCancel}>
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
        </Row>
      </div>
    </div>
  );
}

export default SocialAccounts;
