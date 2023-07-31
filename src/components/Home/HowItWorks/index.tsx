import React, { useState } from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import { SvgIcon } from "../../../common/SvgIcon";
import {
  InfoBox,
  InfoBoxTitle,
  InfoBoxSubTitle,
  CardsContainer,
  SectionContainer,
  Title,
} from "./styles";

function HowItWorks() {
  const [auctionSlider, setAuctionSlider] = useState("first");
  const [mouseOver, setMouseOver] = useState("");

  const onMouseOver = (sectionHeading: any) => {
    setMouseOver(sectionHeading);
  };
  const onMouseNotOver = () => {
    setMouseOver("");
  };
  return (
    <SectionContainer>
      <div
        style={{
          position: "absolute",
          width: "230px",
          height: "380px",
          left: "-4rem",
          // top: "-4rem",
          background: "#000",
          filter: "blur(150px)",
          zIndex: 7,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          width: "230px",
          height: "380px",
          right: "0rem",
          // top: "-4rem",
          background: "#000",
          filter: "blur(150px)",
          zIndex: 7,
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          width: "300px",
          height: "300px",
          borderRadius: "150px",
          zIndex: 5,
          right: "-9rem",
          bottom: "-7rem",
          background: "#00628f",
          filter: "blur(150px)",
        }}
      ></div>
      <img
        src="/img/icons/cinemaBack.png"
        style={{
          width: "100%",
          height: "60%",
          position: "absolute",
          top: "5%",
        }}
      />
      <Row justify="center">
        <Col span={24}>
          <Title>HOW IT WORKS?</Title>
        </Col>
      </Row>
      <Row justify="center" style={{marginBottom: '75px'}}>
        <CardsContainer>
          <Row justify="center">
            <Col xs={22} sm={22} md={11} lg={6} xl={6}>
              <InfoBox
                onMouseLeave={() => {
                  onMouseNotOver();
                }}
                onMouseEnter={() => onMouseOver("first")}
              >
                <Row justify="center">
                  <Col span={24}>
                    <div style={{ margin: "2rem auto 0" }}>
                      <Row justify="center">
                        <div
                          style={{
                            width: "55px",
                            height: "55px",
                            fontSize: "1.2rem",
                            borderRadius: "27px",
                            boxShadow:
                              mouseOver === "first"
                                ? " 0px 4px 30px 10px rgb(255, 190, 85, 0.25)"
                                : "",
                            background:
                              mouseOver === "first"
                                ? "rgba(255, 183, 67, 1)"
                                : "rgba(19, 42, 63, 0.7)",
                            padding: "0.8rem 1.4rem",
                            // transform: "matrix(-1, 0, 0, 1, 0, 0)",
                          }}
                        >
                          1
                        </div>
                      </Row>
                    </div>

                    <div>
                      <InfoBoxTitle>Register</InfoBoxTitle>
                      <InfoBoxSubTitle>
                        Register or Sign-in on the <br />
                        Superstar Xchange
                      </InfoBoxSubTitle>
                    </div>
                  </Col>
                </Row>
              </InfoBox>
            </Col>
            <Col xs={22} sm={22} md={11} lg={6} xl={6}>
              <InfoBox
                onMouseLeave={() => {
                  onMouseNotOver();
                }}
                onMouseEnter={() => onMouseOver("second")}
              >
                <Row justify="center">
                  <Col span={24}>
                    <div style={{ margin: "2rem auto 0" }}>
                      <Row justify="center">
                        <div
                          style={{
                            width: "55px",
                            height: "55px",
                            fontSize: "1.2rem",
                            borderRadius: "27px",
                            boxShadow:
                              mouseOver === "second"
                                ? " 0px 4px 30px 10px rgb(255, 190, 85, 0.25)"
                                : "",
                            background:
                              mouseOver === "second"
                                ? "rgba(255, 183, 67, 1)"
                                : "rgba(19, 42, 63, 0.7)",
                            padding: "0.8rem 1.4rem",
                            // transform: "matrix(-1, 0, 0, 1, 0, 0)",
                          }}
                        >
                          2
                        </div>
                      </Row>
                    </div>

                    <div>
                      <InfoBoxTitle>Explore</InfoBoxTitle>
                      <InfoBoxSubTitle>
                        Explore all the available NFT drops and select based on
                        their characteristics such as Rarity, Aestathic appeal
                        or Edition
                      </InfoBoxSubTitle>
                    </div>
                  </Col>
                </Row>
              </InfoBox>
            </Col>
            <Col xs={22} sm={22} md={11} lg={6} xl={6}>
              <InfoBox
                onMouseLeave={() => {
                  onMouseNotOver();
                }}
                onMouseEnter={() => onMouseOver("third")}
              >
                <Row justify="center">
                  <Col span={24}>
                    <div style={{ margin: "2rem auto 0" }}>
                      <Row justify="center">
                        <div
                          style={{
                            width: "55px",
                            height: "55px",
                            fontSize: "1.2rem",
                            borderRadius: "27px",
                            boxShadow:
                              mouseOver === "third"
                                ? " 0px 4px 30px 10px rgb(255, 190, 85, 0.25)"
                                : "",
                            background:
                              mouseOver === "third"
                                ? "rgba(255, 183, 67, 1)"
                                : "rgba(19, 42, 63, 0.7)",
                            padding: "0.8rem 1.4rem",
                            // transform: "matrix(-1, 0, 0, 1, 0, 0)",
                          }}
                        >
                          3
                        </div>
                      </Row>
                    </div>

                    <div>
                      <InfoBoxTitle>Buy & Collect</InfoBoxTitle>
                      <InfoBoxSubTitle>
                        Buy via your debit or credit card and collect your NFT
                        without any hassle of connecting any Crypto Wallet.
                      </InfoBoxSubTitle>
                    </div>
                  </Col>
                </Row>
              </InfoBox>
            </Col>
            <Col xs={22} sm={22} md={11} lg={6} xl={6}>
              <InfoBox
                onMouseLeave={() => {
                  onMouseNotOver();
                }}
                onMouseEnter={() => onMouseOver("fourth")}
              >
                <Row justify="center">
                  <Col span={24}>
                    <div style={{ margin: "2rem auto 0" }}>
                      <Row justify="center">
                        <div
                          style={{
                            width: "55px",
                            height: "55px",
                            boxShadow:
                              mouseOver === "fourth"
                                ? " 0px 4px 30px 10px rgb(255, 190, 85, 0.25)"
                                : "",
                            fontSize: "1.2rem",
                            borderRadius: "27px",
                            background:
                              mouseOver === "fourth"
                                ? "rgba(255, 183, 67, 1)"
                                : "rgba(19, 42, 63, 0.7)",
                            padding: "0.8rem 1.4rem",
                            // transform: "matrix(-1, 0, 0, 1, 0, 0)",
                          }}
                        >
                          4
                        </div>
                      </Row>
                    </div>

                    <div>
                      <InfoBoxTitle>Flex</InfoBoxTitle>
                      <InfoBoxSubTitle>
                        Showcase your collection on social media or among your
                        peers and prove you're the biggest Bollywood fan
                      </InfoBoxSubTitle>
                    </div>
                  </Col>
                </Row>
              </InfoBox>
            </Col>
          </Row>
        </CardsContainer>
      </Row>
    </SectionContainer>
  );
}

export default HowItWorks;
