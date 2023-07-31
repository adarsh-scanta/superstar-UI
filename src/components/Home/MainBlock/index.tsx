import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import axios from "axios";
import { fetchData } from "../../../services/nftServices";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import {
  TopBackground,
  Title1,
  Title2,
  SubTitle,
  TopLeftGlare,
  TopRightGlare,
  Description,
  MovieLogo,
  CTAButton,
  LeftContainer,
  RightContainer,
  MainBlockContainer,
} from "./styles";
import SimpleSlider from "./SimpleSlider";
import "./customStyle.css";

function MainBlock() {
  const [mutezToUsdRate, setmutezToUsdRate] = useState(0);

  const getConvertRate = async () => {
    const rate = await axios.get(
      "https://api.coinpaprika.com/v1/price-converter?base_currency_id=xtz-tezos-token&quote_currency_id=usd-us-dollars&amount=1"
    );
    setmutezToUsdRate(rate.data.price);
  };

  const [realMarketData, setRealMarketData] = useState([]);

  const getDatafromBlock = async () => {
    const res = await fetchData();
    const temp = [];
    temp.push(res[res.length - 1]);
    temp.push(res[res.length - 2]);
    temp.push(res[0]);
    temp.push(res[1]);
    setRealMarketData(temp);
    // setLoading(false);
  };

  useEffect(() => {
    // setLoading(true);
    getDatafromBlock();
    getConvertRate();
  }, []);

  return (
    <TopBackground
      style={{
        // background: "#1E232D",
        background: "#0D1016",
        // opacity: " 0.25",
        //   "url(/img/icons/home/homeTopBack.png) no-repeat center center",
        // backgroundSize:"cover"
        // padding: "2rem 0",
      }}
    >
      <TopLeftGlare id="top"></TopLeftGlare>
      <MainBlockContainer>
        <Row>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div style={{ margin: "3rem 0" }}>
              <LeftContainer>
                <Title1>
                  <span>{`Bollywood's First`.toUpperCase()}</span>
                </Title1>
                <br />
                <Title2>
                  <span> {`Premium NFT Drops`.toUpperCase()}</span>
                </Title2>
                <SubTitle>Launching our exclusive drop for</SubTitle>
                <Row justify="start">
                  <Col span={18}>
                    <Row justify="center">
                      {" "}
                      <MovieLogo src="/img/icons/home/jhund.png" />
                    </Row>
                  </Col>
                </Row>
                <Row justify="start">
                  <Col span={24}>
                    <Description>
                      The official{" "}
                      <span
                        style={{
                          color: "#FFB642",
                        }}
                      >
                        {` #NFT `}
                      </span>
                      platform for licensed and authenticated film collectibles.
                    </Description>
                  </Col>
                </Row>

                <Row justify="start">
                  <Link to="/marketplace">
                    <CTAButton>Explore</CTAButton>
                  </Link>
                </Row>
              </LeftContainer>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12}>
            <div style={{ margin: "1rem 0 1rem" }}>
              <RightContainer>
                <TopRightGlare></TopRightGlare>
                <Row justify="start">
                  <Col span={24}>
                    {" "}
                    <SimpleSlider
                      data={realMarketData}
                      mutezToUsdRate={mutezToUsdRate}
                    />
                    {/* <NFTCard>
                                <img
                                  src="/img/icons/home/gold.png"
                                  width="100%"
                                  height="60%"
                                />
                                <Row justify="space-between">
                                  {" "}
                                  <NFTLabel
                                    style={{
                                      background: "#ffb642",
                                      borderRadius: "4px",
                                      color: "#020202",
                                      fontWeight: 700,
                                      marginLeft: "0.5rem",
                                    }}
                                  >{`Jhund`}</NFTLabel>
                                  <NFTLabel>{`Edition 1/1`}</NFTLabel>
                                </Row>

                                <Row justify="start">
                                  <Col>
                                    <NFTLabel
                                      style={{ color: "#ffb642" }}
                                    >{`Gold`}</NFTLabel>
                                  </Col>
                                </Row>
                                <Row justify="start">
                                  <Col>
                                    <NFTLabel>{`Jhund Poster #1`}</NFTLabel>
                                  </Col>
                                </Row>
                                <Row>
                                  <RulerContainer>
                                    {" "}
                                    <hr
                                      style={{ transform: "scale(1.05, 1)" }}
                                    />
                                  </RulerContainer>
                                </Row>
                                <PriceSection>
                                  <Row justify="start" align="middle">
                                    <Col>
                                      <NFTLabel
                                        style={{ marginBottom: ".3rem" }}
                                      >{`Sold for`}</NFTLabel>
                                    </Col>
                                  </Row>
                                  <Row justify="start">
                                    <Col>
                                      <Price>{`2000 INR`}</Price>
                                    </Col>
                                  </Row>
                                </PriceSection>
                              </NFTCard> */}
                  </Col>
                </Row>
              </RightContainer>
            </div>
          </Col>
        </Row>
      </MainBlockContainer>
    </TopBackground>
  );
}

export default MainBlock;
