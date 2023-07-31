import React, { Component } from "react";
import Slider from "react-slick";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import PrevBTN from "../../../common/PrevBTN";
import NextBTN from "../../../common/NextBTN";
import {
  NFTCard,
  SliderContainer,
  Title,
  ViewAllBTN,
  NFTLabel,
  RulerContainer,
  PriceSection,
  Price,
} from "./styles.ts";

class CustomSlide extends Component {
  render() {
    const { mutezToUsdRate, index, data, ...props } = this.props;
    const i = index;
    return (
      <div {...props}>
        <NFTCard>
          <Link to={`/product/${data.nftID}`}>
            <div
              style={{
                position: "relative",
                borderRadius: "10px",
                border: "12px solid #221F20",
                height: "100%",
                width: "100%",
                //  backgroundImage: `url(/img/icons/marketplace/${data.thumbnail})`
              }}
            >
              {(data?.editions?.includes("Gold") ||
                (data?.editions?.includes("Premium") &&
                  data?.balance !== "10")) && (
                <div
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "10px",
                    background:
                      "linear-gradient(180deg, #FFBE55 24.27%, #FFAC27 100%)",
                    boxShadow:
                      "box-shadow: 0px 4px 30px 10px rgb(255, 190, 85, 0.25)",
                    borderRadius: "4px",
                    padding: "0.1rem 0.8rem",
                    color: "#020202",
                    fontSize: "1rem",
                  }}
                >
                  {data.editions.includes("Gold")
                    ? "1 Sold"
                    : `${10 - parseInt(data.balance)} Sold`}
                </div>
              )}
              <img
                key={i}
                src={
                  data?.name === "Jhund Poster #1"
                    ? "https://super-thumb.s3.amazonaws.com/jhund1.PNG"
                    : data?.name === "Jhund Poster #2"
                    ? "https://super-thumb.s3.amazonaws.com/jhund2.PNG"
                    : data?.name === "Jhund Poster #3"
                    ? "https://super-thumb.s3.amazonaws.com/jhund3.PNG"
                    : data?.name === "Jhund Poster #4"
                    ? "https://super-thumb.s3.amazonaws.com/jhund4.PNG"
                    : data?.name === "Jhund Poster #5"
                    ? "https://super-thumb.s3.amazonaws.com/jhund5.PNG"
                    : data?.name === "Jhund Poster #6"
                    ? "https://super-thumb.s3.amazonaws.com/jhund6.PNG"
                    : data?.name === "Jhund Poster #7"
                    ? "https://super-thumb.s3.amazonaws.com/jhund7.PNG"
                    : data?.name === "Jhund Poster #8"
                    ? "https://super-thumb.s3.amazonaws.com/jhund8.PNG"
                    : data?.name === "Jhund Poster #9"
                    ? "https://super-thumb.s3.amazonaws.com/jhund9.PNG"
                    : data?.name === "Jhund Poster #10"
                    ? "https://super-thumb.s3.amazonaws.com/jhund10.PNG"
                    : data?.name === "Jhund Poster 11"
                    ? "https://super-thumb.s3.amazonaws.com/jhund11.PNG"
                    : data?.name === "Jhund Poster #12"
                    ? "https://super-thumb.s3.amazonaws.com/jhund12.PNG"
                    : data?.name === "Jhund Poster #13"
                    ? "https://super-thumb.s3.amazonaws.com/jhund13.PNG"
                    : data?.name === "Jhund Poster #14"
                    ? "https://super-thumb.s3.amazonaws.com/jhund14.PNG"
                    : data?.name === "Jhund Poster #15"
                    ? "https://super-thumb.s3.amazonaws.com/jhund15.PNG"
                    : data?.name === "Jhund Poster #16"
                    ? "https://super-thumb.s3.amazonaws.com/jhund16.PNG"
                    : data?.name === "Jhund Poster #17"
                    ? "https://super-thumb.s3.amazonaws.com/jhund17.PNG"
                    : data?.name === "Jhund Poster #18"
                    ? "https://super-thumb.s3.amazonaws.com/jhund18.PNG"
                    : data?.name === "Jhund Poster #19"
                    ? "https://super-thumb.s3.amazonaws.com/jhund19.PNG"
                    : data?.name === "Jhund Poster #20"
                    ? "https://super-thumb.s3.amazonaws.com/jhund20.PNG"
                    : data?.name === "Jhund Poster #21"
                    ? "https://super-thumb.s3.amazonaws.com/jhund21.PNG"
                    : data?.name === "Jhund Poster #22"
                    ? "https://super-thumb.s3.amazonaws.com/jhund22.PNG"
                    : data?.name === "Jhund Poster #23"
                    ? "https://super-thumb.s3.amazonaws.com/jhund23.PNG"
                    : data?.mainAsset
                }
                style={{
                  width: "100%",
                  borderRadius: "3px",
                  height: "62%",
                }}
              />
              <Row justify="space-between">
                {" "}
                <NFTLabel
                  style={{
                    background: "#ffb642",
                    borderRadius: "4px",
                    marginTop: "0.5rem",
                    color: "#020202",
                    fontWeight: 700,
                    marginLeft: "0.5rem",
                  }}
                >
                  {data?.name?.includes("Jhund") && `Jhund`}
                </NFTLabel>
                <NFTLabel>{`Available ${0}/${
                  data?.editions?.includes("Gold")
                    ? "1"
                    : 10 - parseInt(data?.balance)
                }`}</NFTLabel>
              </Row>

              <Row justify="start">
                <Col>
                  <NFTLabel style={{ color: "#ffb642" }}>
                    {data?.editions?.includes("Gold") ? "Gold" : "Premium"}
                  </NFTLabel>
                </Col>
              </Row>
              <Row justify="start">
                <Col>
                  <NFTLabel>{data?.name}</NFTLabel>
                </Col>
              </Row>
              <Row>
                <RulerContainer>
                  {" "}
                  <hr
                    style={{
                      position: "relative",
                      top: "8px",
                      opacity: "0.4",
                      color: "#FFF",
                      transform: "scale(1.05, 1)",
                    }}
                  />
                </RulerContainer>
              </Row>
              <PriceSection>
                <Row justify="start" align="middle">
                  <Col>
                    <NFTLabel
                      style={{ marginBottom: ".3rem", fontSize: "0.9rem" }}
                    >
                      {data?.active ? `Price` : `Sold for`}
                    </NFTLabel>
                  </Col>
                </Row>
                <Row justify="start">
                  <Col>
                    <Price>{`$ ${(
                      (parseInt(data?.value?.price) / 1000000) *
                      mutezToUsdRate
                    ).toFixed(2)} USD`}</Price>
                  </Col>
                </Row>
              </PriceSection>
            </div>
          </Link>
        </NFTCard>{" "}
      </div>
    );
  }
}

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      //   nextArrow: <NextBTN />,
      //   prevArrow: <PrevBTN />,
      responsive: [
        {
          breakpoint: 1160,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <SliderContainer>
        <Slider {...settings}>
          {this.props.data.map((data, i) => (
            <CustomSlide
              key={i}
              index={1}
              data={data}
              mutezToUsdRate={this.props.mutezToUsdRate}
            />
          ))}
        </Slider>
      </SliderContainer>
    );
  }
}
