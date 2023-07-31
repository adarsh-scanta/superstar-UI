import React, { lazy, useState } from "react";
import { Fade } from "react-awesome-reveal";
import {
  SettingTabs,
  CancelButton,
  SaveButton,
  // CustomCheckbox,
} from "./Styles";
import AccountDetails from "./AccountDetails";
import Notifications from "./Notifications";
import Privacy from "./Privacy";
import Security from "./Security";
import SocialAccounts from "./SocialAccounts";
import ChangePassword from "./ChangePassword";
import TowFactor from "./TowFactor";
import ListDevices from "./ListDevices";
import { Row, Col, Form, Input, Button, Checkbox, Switch } from "antd";
// import MissionContent from "../../content/MissionContent.json";
const Container = lazy(() => import("../../common/Container"));

const SettingComponent = () => {
  const [currentTab, setCurrentTab] = useState("accounts");
  return (
    <>
      <Row>
        <Col  sm={24} lg={8}>
          <div
            style={{
              // height: "60vh",
              width: "100%",
              borderRight: "2px solid #fff",
              margin: "3rem 0",
            }}
          >
            <ul style={{ listStyle: "none" }}>
              <li>
                <SettingTabs
                  style={{
                    background:
                      currentTab === "accounts"
                        ? "linear-gradient(180deg, #ffbe55 23.75%, #ffac27 89.9%)"
                        : "",
                    color: currentTab === "accounts" ? "#020202" : "#fff",
                  }}
                  onClick={() => {
                    setCurrentTab("accounts");
                  }}
                >
                  Account details
                </SettingTabs>
              </li>
              <li>
                {/* <SettingTabs
                  style={{
                    background:
                      currentTab === "social"
                        ? "linear-gradient(180deg, #ffbe55 23.75%, #ffac27 89.9%)"
                        : "",
                    color: currentTab === "social" ? "#020202" : "#fff",
                  }}
                  onClick={() => {
                    setCurrentTab("social");
                  }}
                >
                  Social Accounts
                </SettingTabs> */}
              </li>
              <li>
                {/* <SettingTabs
                  style={{
                    background:
                      currentTab === "notification"
                        ? "linear-gradient(180deg, #ffbe55 23.75%, #ffac27 89.9%)"
                        : "",
                    color: currentTab === "notification" ? "#020202" : "#fff",
                  }}
                  onClick={() => {
                    setCurrentTab("notification");
                  }}
                >
                  Notifications
                </SettingTabs> */}
              </li>
              <li>
                {/* <SettingTabs
                  style={{
                    background:
                      currentTab === "privacy"
                        ? "linear-gradient(180deg, #ffbe55 23.75%, #ffac27 89.9%)"
                        : "",
                    color: currentTab === "privacy" ? "#020202" : "#fff",
                  }}
                  onClick={() => {
                    setCurrentTab("privacy");
                  }}
                >
                  Privacy Settings
                </SettingTabs> */}
              </li>
              <li>
                <SettingTabs
                  style={{
                    background:
                      currentTab === "security"
                        ? "linear-gradient(180deg, #ffbe55 23.75%, #ffac27 89.9%)"
                        : "",
                    color: currentTab === "security" ? "#020202" : "#fff",
                  }}
                  onClick={() => {
                    setCurrentTab("security");
                  }}
                >
                  Security and Authentication
                </SettingTabs>
              </li>
            </ul>
          </div>
        </Col>
        <Col  sm={24} lg={16}>
          <div>
            {currentTab === "accounts" && <AccountDetails />}
            {currentTab === "social" && <SocialAccounts />}
            {currentTab === "notification" && <Notifications />}
            {currentTab === "privacy" && <Privacy />}
            {currentTab === "security" && <Security openTab={setCurrentTab} />}
            {currentTab === "changePass" && (
              <ChangePassword openTab={setCurrentTab} />
            )}
            {currentTab === "twoFactor" && (
              <TowFactor openTab={setCurrentTab} />
            )}
            {currentTab === "listDevice" && (
              <ListDevices openTab={setCurrentTab} />
            )}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default SettingComponent;
