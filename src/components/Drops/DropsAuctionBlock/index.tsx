import React from "react";
import { Row, Col } from "antd";
import {Link} from "react-router-dom";
import { SvgIcon } from "../../../common/SvgIcon";
import {
  SlideTitle,
  AuctionContainer,
  AuctionCard,
  AuctionThumb,
  AuctionCardContent,
  AuctionCardContentRight,
  ShareIconContainer,
  SectionHeading,
  PriceBadge,
  PriceBadgeContentRight,
  PriceBadgeContentLeft,
  SmallLabel,
  PlaceBidButton,
  PlaceBidButtonContent,
  TimerContainer,
  TimerLabel,
  TimeLabelContainer,
  TimeLabel,
  TimeDataContainer,
  TimeData,
} from "./styles";

function DropsAuctionBlock() {
  return (
    <Row justify="center">
      <div style={{ width: "100%", margin: "2rem 0 2rem" }}>
        <Row>
          <div style={{ margin: "2rem 0 0" }}>
            <SectionHeading>AUCTION</SectionHeading>
          </div>
        </Row>
        <Row justify="center">
          {/* <img src="/img/icons/home/ACTION.png" /> */}
          <AuctionContainer>
            <AuctionCard>
              <AuctionCardContent>
                <Row justify="center">
                  <Col span={8}>
                    <AuctionThumb src="/img/icons/drops/auctionThumb.png" />
                  </Col>
                  <Col span={16}>
                    <AuctionCardContentRight>
                      <Row justify="space-between">
                        <SlideTitle>
                          Eklauta mera dil tha <br />
                          Bhola-bhala simple tha
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
                                mutez 145
                              </PriceBadgeContentLeft>
                            </Col>
                            <Col span={12}>
                              {/* <PriceBadgeContentRight>
                                ₹ 2000
                              </PriceBadgeContentRight> */}
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
                    </AuctionCardContentRight>
                  </Col>
                </Row>
              </AuctionCardContent>
            </AuctionCard>
          </AuctionContainer>
        </Row>
      </div>
    </Row>
  );
}

export default DropsAuctionBlock;
