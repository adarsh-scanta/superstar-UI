import React from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import {
  Title,
  Description,
  CTAButton,
  CardTwo,
  CardOne,
  CardContainer,
  RightBlock,
  SectionContainer,
} from "./styles";

function UpcomingMoviesBlock() {
  const stars = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  return (
    <Row justify="center">
      <Col span={24}>
        <Row>
          <Col span={24}>
            <div
              style={{
                position: "relative",
                width: "100%",
                margin: " 0",
                zIndex: 9,
                height: "80px",
                overflow: "hidden",

                background: "#1A1C21",
                // boxShadow: "0px -10px 4px rgba(0, 0, 0, 0.5)",
              }}
            >
              <Row justify="space-between">
                {stars.map((data, i) => (
                  <div
                    key={i}
                    style={{
                      // position: "absolute",
                      margin: "1rem 1rem",
                      width: "50px",
                      height: "50px",
                      background:
                        "linear-gradient(180deg, #151C2A 0%, rgba(21, 28, 42, 0) 100%)",
                      borderRadius: "2px",
                    }}
                  >
                    <div style={{ padding: "0.25rem" }}>
                      <svg
                        width="40"
                        height="38"
                        viewBox="0 0 40 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.0979 1.8541C18.6966 0.011477 21.3034 0.0114808 21.9021 1.8541L25.1638 11.8926C25.4316 12.7167 26.1995 13.2746 27.0659 13.2746H37.621C39.5585 13.2746 40.364 15.7538 38.7966 16.8926L30.2574 23.0967C29.5564 23.606 29.2631 24.5088 29.5308 25.3328L32.7925 35.3713C33.3912 37.2139 31.2823 38.7462 29.7148 37.6074L21.1756 31.4033C20.4746 30.894 19.5254 30.894 18.8244 31.4033L10.2852 37.6074C8.71774 38.7462 6.60878 37.2139 7.20748 35.3713L10.4692 25.3328C10.7369 24.5088 10.4436 23.606 9.74265 23.0967L1.20338 16.8926C-0.364047 15.7538 0.441508 13.2746 2.37895 13.2746H12.9341C13.8005 13.2746 14.5684 12.7167 14.8362 11.8926L18.0979 1.8541Z"
                          fill="#FFB338"
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <SectionContainer
          style={{
            zIndex: 2,
          }}
        >
          <img
            src="/img/icons/home/upcomingBack.png"
            width="100%"
            height="100%"
            style={{ position: "absolute", filter: "blur(8px)" }}
          />
          <div
            style={{
              width: "100%",
              height: "100%",
              opacity: "0.92",
              position: "absolute",
              backgroundColor: "#171A25",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              width: "300px",
              height: "300px",
              borderRadius: "150px",
              zIndex: 5,
              right: "-8rem",
              top: "-7rem",
              background: "#00628f",
              filter: "blur(150px)",
            }}
          ></div>
          <div>
            <Row justify="center">
              <div style={{ width: "100%", maxWidth: "1550px" }}>
                {" "}
                <Row justify="center">
                  <Col xs={22} sm={22} md={22} lg={11} xl={11}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                      }}
                    >
                      <CardContainer>
                        <div
                          style={{
                            position: "absolute",
                            width: "350px",
                            height: "280px",
                            zIndex: 5,
                            top: "20%",
                            left: "30%",
                            borderRadius: "150px",
                            background: "#03AFFF",
                            filter: "blur(200px)",
                          }}
                        ></div>
                        <Row justify="center">
                          <CardOne>
                            <img
                              src="/img/icons/Khosla.jpg"
                              width="100%"
                              height="100%"
                            />
                          </CardOne>
                          <CardTwo>
                            <img
                              src="/img/icons/jhund-pos.png"
                              width="101%"
                              height="100%"
                              style={{
                                // transform: "scale(1.2)",
                                position: "relative",
                                top: "3px",
                                left: "-2px",
                              }}
                            />
                          </CardTwo>
                        </Row>
                      </CardContainer>
                    </div>
                  </Col>
                  <Col xs={22} sm={22} md={22} lg={11} xl={11}>
                    <RightBlock>
                      <Row justify="start">
                        <Col span={24}>
                          <Title>
                            BOLLYWOOD'S
                            <br /> FIRST PREMIUM
                            <br /> NFT DROPS{" "}
                          </Title>
                          <Description>
                            World's first of its kind #NFT platform for
                            collectors to collect, the most premium Bollywood
                            experiences.
                          </Description>
                          <div style={{ width: "100%" }}>
                            <Row justify="start">
                              <Col span={24}>
                                <Link to="/marketplace">
                                  <CTAButton>Explore</CTAButton>
                                </Link>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                      </Row>
                    </RightBlock>
                  </Col>
                </Row>
              </div>
            </Row>
          </div>
        </SectionContainer>
      </Col>
      <Col span={24}>
        <Row>
          <Col span={24}>
            <div
              style={{
                position: "relative",
                zIndex: 7,

                width: "100%",
                margin: " 0",
                height: "80px",
                background: "#1A1C21",
                overflow: "hidden",
                boxSizing: "border-box",
              }}
            >
              <Row justify="space-between">
                {stars.map((data, i) => (
                  <div
                    key={i}
                    style={{
                      // position: "absolute",
                      margin: "1rem 1rem",
                      width: "50px",
                      height: "50px",
                      background:
                        "linear-gradient(180deg, #151C2A 0%, rgba(21, 28, 42, 0) 100%)",
                      boxSizing: "border-box",
                      borderRadius: "2px",
                    }}
                  >
                    <div style={{ padding: "0.25rem" }}>
                      <svg
                        width="40"
                        height="38"
                        viewBox="0 0 40 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.0979 1.8541C18.6966 0.011477 21.3034 0.0114808 21.9021 1.8541L25.1638 11.8926C25.4316 12.7167 26.1995 13.2746 27.0659 13.2746H37.621C39.5585 13.2746 40.364 15.7538 38.7966 16.8926L30.2574 23.0967C29.5564 23.606 29.2631 24.5088 29.5308 25.3328L32.7925 35.3713C33.3912 37.2139 31.2823 38.7462 29.7148 37.6074L21.1756 31.4033C20.4746 30.894 19.5254 30.894 18.8244 31.4033L10.2852 37.6074C8.71774 38.7462 6.60878 37.2139 7.20748 35.3713L10.4692 25.3328C10.7369 24.5088 10.4436 23.606 9.74265 23.0967L1.20338 16.8926C-0.364047 15.7538 0.441508 13.2746 2.37895 13.2746H12.9341C13.8005 13.2746 14.5684 12.7167 14.8362 11.8926L18.0979 1.8541Z"
                          fill="#FFB338"
                        />
                      </svg>
                    </div>
                  </div>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default UpcomingMoviesBlock;
