import React, { lazy } from "react";
import { Fade } from "react-awesome-reveal";
import { Row, Col } from "antd";
// import MissionContent from "../../content/MissionContent.json";
const Container = lazy(() => import("../../common/Container"));
const UnderConstruction = () => {
  return (
    <>
      <Container>
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: "8rem",
            }}
          >
            <Row justify="start">
              <p style={{ fontSize: "2rem", color: "#fff" }}>
                {`Terms of Sale`.toUpperCase()}
              </p>
            </Row>
            <Row>
              <div style={{ minHeight: "100vh", width: "100vw" }}></div>
            </Row>
          </div>
      </Container>
    </>
  );
};

export default UnderConstruction;
