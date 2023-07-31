import React, { useState, useEffect } from "react";
import { Row, Col, Form, Input, Button, Checkbox, Switch } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import {
  GET_USER_DETAILS,
  UPDATE_NOTIFICATION_SETTINGS,
} from "../../redux/Login/Login.types";
import {
  CancelButton,
  SaveButton,
  // CustomCheckbox,
} from "./Styles";

function Notifications() {
  const dispatch = useDispatch();

  const userData = useSelector((data: RootState) => data?.login.userData);

  const [BandPChecked, setBandPChecked] = useState(false);
  const [newDropChecked, setNewDropPChecked] = useState(false);
  const [NFTRecommendChecked, setNFTRecommendChecked] = useState(false);
  const [newsAndTutorialChecked, setNewsAndTutorialChecked] = useState(false);

  const getUserDetails = () => {
    dispatch({ type: GET_USER_DETAILS, payload: { userId: userData.id } });
  };

  const setDefaultData = () => {
    setBandPChecked(Boolean(userData?.bids_and_purchases));
    setNewDropPChecked(Boolean(userData?.new_drop_announcements));
    setNFTRecommendChecked(Boolean(userData?.nft_recommendation));
    setNewsAndTutorialChecked(Boolean(userData?.news_and_tutorials));
  };

  useEffect(() => {
    setDefaultData();
  }, [userData]);

  const handleCancel = () => {
    setDefaultData();
  };

  const handleSave = () => {
    dispatch({
      type: UPDATE_NOTIFICATION_SETTINGS,
      payload: {
        bids_and_purchases: String(Number(BandPChecked)),
        new_drop_announcements: String(Number(newDropChecked)),
        nft_recommendation: String(Number(NFTRecommendChecked)),
        news_and_tutorials: String(Number(newsAndTutorialChecked)),
      },
    });
    getUserDetails();
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div style={{ margin: "4rem" }}>
      <ul style={{ listStyle: "none" }}>
        <li>
          <Row justify="space-between">
            <Col>
              <p
                style={{
                  color: "#fff",
                  fontSize: "1.4rem",
                  // fontWeight: "bold",
                }}
              >
                Your bids and purchases
              </p>
            </Col>
            <Col>
              <Checkbox
                checked={BandPChecked}
                onChange={() => {
                  setBandPChecked(!BandPChecked);
                }}
              ></Checkbox>
            </Col>
          </Row>
        </li>
        <li>
          <Row justify="space-between">
            <Col>
              <p
                style={{
                  color: "#fff",
                  fontSize: "1.4rem",
                  // fontWeight: "bold",
                }}
              >
                New drop announcements
              </p>
            </Col>
            <Col>
              <Checkbox
                checked={newDropChecked}
                onChange={() => {
                  setNewDropPChecked(!newDropChecked);
                }}
              ></Checkbox>
            </Col>
          </Row>
        </li>
        <li>
          <Row justify="space-between">
            <Col>
              <p
                style={{
                  color: "#fff",
                  fontSize: "1.4rem",
                  // fontWeight: "bold",
                }}
              >
                NFT recommendations and reminders{" "}
              </p>
            </Col>
            <Col>
              <Checkbox
                checked={NFTRecommendChecked}
                onChange={() => setNFTRecommendChecked(!NFTRecommendChecked)}
              ></Checkbox>
            </Col>
          </Row>
        </li>
        <li>
          <Row justify="space-between">
            <Col>
              <p
                style={{
                  color: "#fff",
                  fontSize: "1.4rem",
                  // fontWeight: "bold",
                }}
              >
                Platform news and tutorials
              </p>
            </Col>
            <Col>
              <Checkbox
                checked={newsAndTutorialChecked}
                onChange={() => {
                  setNewsAndTutorialChecked(!newsAndTutorialChecked);
                }}
              ></Checkbox>
            </Col>
          </Row>
        </li>
      </ul>
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
    </div>
  );
}

export default Notifications;
