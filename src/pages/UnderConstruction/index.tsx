import React, { lazy } from "react";
import { Fade } from "react-awesome-reveal";
import { Row, Col } from "antd";
// import MissionContent from "../../content/MissionContent.json";
const Container = lazy(() => import("../../common/Container"));
const UnderConstruction = () => {
  return (
    <>
      <Container>
        <Fade direction="left">
          <div style={{ alignItems: "center", justifyContent: "center" }}>
            <Row justify="space-between">
              <Col lg={11} md={11} sm={24} xs={24}>
                <h6
                  style={{
                    fontSize: "3rem",
                    fontWeight: "bold",
                    marginTop: "8rem",
                    color: "#430568",
                  }}
                >
                  We're <br />
                  under construction!
                </h6>
                {/* </div> */}
              </Col>
              <Col lg={11} md={11} sm={24} xs={24}>
                <img
                  src={"/img/icons/UC1.png"}
                  alt="img1"
                  width="100%"
                  height="100%"
                  style={{
                    transform: "rotate(6deg)",
                  }}
                />
              </Col>
            </Row>
          </div>
        </Fade>
      </Container>
    </>
  );
};

export default UnderConstruction;
