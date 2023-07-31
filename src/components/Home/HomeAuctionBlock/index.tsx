import React, { useState } from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import { SvgIcon } from "../../../common/SvgIcon";
import {
  SlideTitle,
  AuctionContainer,
  AuctionCard,
  AuctionDataContainer,
  PriceBadge,
  AuctionDataRight,
  SmallLabel,
  PriceBadgeContentLeft,
  TumbnailContainer,
  PriceBadgeContentRight,
  ShareIconContainer,
  PlaceBidButton,
  PlaceBidButtonContent,
  TimeLabel,
  TimeData,
  TimeLabelContainer,
  TimeDataContainer,
  TimerContainer,
  TimerLabel,
} from "./styles";

function HomeAuctionBlock() {
  const [auctionSlider, setAuctionSlider] = useState("first");

  return (
    <Row justify="center">
      <div style={{ width: "100%", margin: "4rem 0 2rem" }}>
        <Row justify="center">
          <AuctionContainer>
            <AuctionCard>
              <AuctionDataContainer>
                <Row justify="center">
                  <Col span={8}>
                    <TumbnailContainer>
                      <img
                        src="/img/icons/home/auctionThumb.png"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </TumbnailContainer>
                  </Col>
                  <Col span={16}>
                    <AuctionDataRight>
                      <Row justify="space-between">
                        <SlideTitle style={{ marginBottom: "1rem 0" }}>
                          Ye Dosti <br />
                          Hum Nhi Todenge!
                        </SlideTitle>
                        <ShareIconContainer>
                          <SvgIcon
                            src={"shareIcon.svg"}
                            width="40px"
                            height="40px"
                          />
                        </ShareIconContainer>
                      </Row>
                      <Row>
                        <PriceBadge>
                          <SmallLabel>Current Bid</SmallLabel>
                          <Row>
                            <Col span={12}>
                              <PriceBadgeContentLeft>
                                <span style={{ margin: "0 0.5rem" }}>Tez</span>
                                145
                              </PriceBadgeContentLeft>
                            </Col>
                            <Col span={12}>
                              <PriceBadgeContentRight>
                                ₹ 2000
                              </PriceBadgeContentRight>
                            </Col>
                          </Row>
                        </PriceBadge>
                      </Row>
                      <Row justify="space-between">
                        <Col span={8}>
                          <PlaceBidButton>
                            <Link to="/product?123">
                              <PlaceBidButtonContent>
                                Place a Bid
                              </PlaceBidButtonContent>
                            </Link>
                          </PlaceBidButton>
                        </Col>
                        <Col span={16}>
                          <TimerContainer>
                            <TimerLabel>Auction ends in</TimerLabel>
                            <TimeLabelContainer>
                              <TimeLabel>Hours</TimeLabel>
                              <TimeLabel>Minutes</TimeLabel>
                              <TimeLabel>Seconds</TimeLabel>
                            </TimeLabelContainer>
                            <TimeDataContainer>
                              <TimeData>11</TimeData>:<TimeData>11</TimeData>:
                              <TimeData>11</TimeData>
                            </TimeDataContainer>
                          </TimerContainer>
                        </Col>
                      </Row>
                    </AuctionDataRight>
                  </Col>
                </Row>
              </AuctionDataContainer>
            </AuctionCard>
            <Row justify="center">
              <span
                style={{ margin: "0 0.5rem" }}
                onClick={() => {
                  setAuctionSlider("first");
                }}
              >
                {auctionSlider === "first" ? (
                  <SvgIcon
                    src={"auctionDotSelected.svg"}
                    width="45px"
                    height="30px"
                  />
                ) : (
                  <SvgIcon src={"auctionDot.svg"} width="15px" height="15px" />
                )}
              </span>
              <span
                style={{ margin: "0 0.5rem" }}
                onClick={() => {
                  setAuctionSlider("second");
                }}
              >
                {auctionSlider === "second" ? (
                  <SvgIcon
                    src={"auctionDotSelected.svg"}
                    width="45px"
                    height="30px"
                  />
                ) : (
                  <SvgIcon src={"auctionDot.svg"} width="15px" height="15px" />
                )}
              </span>
              <span
                style={{ margin: "0 0.5rem" }}
                onClick={() => {
                  setAuctionSlider("third");
                }}
              >
                {auctionSlider === "third" ? (
                  <SvgIcon
                    src={"auctionDotSelected.svg"}
                    width="45px"
                    height="30px"
                  />
                ) : (
                  <SvgIcon src={"auctionDot.svg"} width="15px" height="15px" />
                )}
              </span>
              <span
                style={{ margin: "0 0.5rem" }}
                onClick={() => {
                  setAuctionSlider("fourth");
                }}
              >
                {auctionSlider === "fourth" ? (
                  <SvgIcon
                    src={"auctionDotSelected.svg"}
                    width="45px"
                    height="30px"
                  />
                ) : (
                  <SvgIcon src={"auctionDot.svg"} width="15px" height="15px" />
                )}
              </span>
            </Row>
          </AuctionContainer>
        </Row>
      </div>
    </Row>
  );
}

export default HomeAuctionBlock;
