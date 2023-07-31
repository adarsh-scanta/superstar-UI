import React, { lazy, useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { Row, Col } from "antd";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import SettingComponent from "../../components/Settings/SettingComponent";
import PaymentComponent from "../../components/Settings/PaymentComponent";
import { SettingsContainer } from "./styles";
// import MissionContent from "../../content/MissionContent.json";
const Container = lazy(() => import("../../common/Container"));

const SettingsPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const isLoggedIn = useSelector((data: RootState) => data?.login.userLoggedIn);

  const [currentTab, setCurrentTab] = useState("setting");

  const handleTabChange = (targetTab) => {
    setCurrentTab(targetTab);
  };

  useEffect(() => {
    isLoggedIn === false && history.push("/");
  }, [isLoggedIn]);

  return (
    <>
      <Container>
        <Row justify="center">
          <div
            style={{
              margin: "8rem 6rem 4rem",
              minHeight: "100vh",
              width: "100%",
              maxWidth: "1450px",
            }}
          >
            <Row>
              <Col>
                <span
                  style={{
                    margin: "0 2rem ",
                    fontSize: "1.5rem",
                    // fontWeight: "bold",
                    borderBottom:
                      currentTab === "setting" ? "2px solid #FFAB26" : "",
                  }}
                  onClick={() => {
                    handleTabChange("setting");
                  }}
                >
                  Settings
                </span>
              </Col>
            </Row>
            <SettingsContainer>
              {currentTab === "payment" && <PaymentComponent />}

              {currentTab === "setting" && <SettingComponent />}
            </SettingsContainer>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default SettingsPage;
