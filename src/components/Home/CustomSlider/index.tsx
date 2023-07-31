import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { fetchData } from "../../../services/nftServices";
import SimpleSlider from "./SimpleSlider";
import "./customStyle.css";
import {
  NFTCard,
  Title,
  ViewAllBTN,
  NFTLabel,
  RulerContainer,
  PriceSection,
  Price,
} from "./styles";
import { xtzToUsd, usdToXtz } from "../../../services/nftServices";

import "./customStyle.css";
import $ from "jquery";
import FinalCountDown from '../FinalCountDown';

const getItems = () =>
  Array(25)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind + 1}` }));

type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

const elemPrefix = "test";
const getId = (index: number) => `${elemPrefix}${index}`;

function CustomSlider() {
  // duration of scroll animation
  var scrollDuration = 150;
  // paddles
  var leftPaddle = document.getElementsByClassName("left-paddle");
  var rightPaddle = document.getElementsByClassName("right-paddle");
  // get items dimensions
  var itemsLength = $(".item").length;
  var itemSize = $(".item").outerWidth(true);
  // get some relevant size for the paddle triggering point
  var paddleMargin = 20;

  // get wrapper width
  var getMenuWrapperSize = function () {
    return $(".menu-wrapper").outerWidth();
  };
  var menuWrapperSize = getMenuWrapperSize();
  // the wrapper is responsive
  $(window).on("resize", function () {
    menuWrapperSize = getMenuWrapperSize();
  });
  // size of the visible part of the menu is equal as the wrapper size
  var menuVisibleSize = menuWrapperSize;

  // get total width of all menu items
  var getMenuSize = function () {
    return itemsLength * itemSize;
  };
  var menuSize = getMenuSize();
  // get how much of menu is invisible
  var menuInvisibleSize = menuSize - menuWrapperSize;

  // get how much have we scrolled to the left

  //finally, what happens when we are actually scrolling the menu

  $(rightPaddle).on("click", function () {
    $(".menu").animate({ scrollLeft: "+=400" }, scrollDuration, "linear");
  });

  // scroll to right
  $(leftPaddle).on("click", function () {
    $(".menu").animate({ scrollLeft: "-=400" }, scrollDuration, "linear");
  });

  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);
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
    setRealMarketData(res.reverse());
    // setLoading(false); 
  };

  useEffect(() => {
    // setLoading(true);
    getDatafromBlock();
    getConvertRate();
  }, []);

  const isItemSelected = (id) => !!selected.find((el) => el === id);

  const handleClick =
    (id) =>
    ({ getItemById, scrollToItem }) => {
      const itemSelected = isItemSelected(id);

      setSelected((currentSelected) =>
        itemSelected
          ? currentSelected.filter((el) => el !== id)
          : currentSelected.concat(id)
      );
    };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",

        padding: "0",
        background: "#03070A",
      }}
    >
      {/* <FinalCountDown /> */}
      <div
        style={{
          position: "absolute",
          // left: "-10.35%",
          // right: "75.97%",
          // top: "60.32%",
          // bottom: "61.7%",
          background:
            // "radial-gradient(112.15% 308.89% at -5.95% 8.73%, rgba(0, 98, 143, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%)",
            "radial-gradient(112.15% 308.89% at -5.95% 8.73%, rgba(59, 63, 90, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%)",
          // filter: "blur(300px)",
          width: "100%",
          height: "100%",
        }}
      ></div>
      <div
        style={{
          maxWidth: "1450px",
          width: "100%",
          position: "relative",
          top: "50px",
          margin: "auto",
        }}
      >
        <Row justify="space-between">
          <Col xs={14} lg={8}>
            <Title>{`Live Drops`.toUpperCase()}</Title>
          </Col>
          <Col span={4} xs={10} md={8} lg={6}>
            <Row justify="end">
              <Link to="/marketplace">
                <ViewAllBTN>VIEW ALL</ViewAllBTN>
              </Link>
            </Row> 
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <SimpleSlider
              data={realMarketData}
              mutezToUsdRate={mutezToUsdRate}
            />
          </Col>
        </Row>
      </div>

      {/* <div
          className="menu-wrapper"
          style={{ width: "100%", maxWidth: "1400px" }}
        >
          <ul className="menu">
            {realMarketData.map((data, i) => (
              <li className="item" style={{ padding: "0" }}>
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
                      <img
                        key={i}
                        src={data.mainAsset}
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
                        <NFTLabel>{`Edition 1/1`}</NFTLabel>
                      </Row>

                      <Row justify="start">
                        <Col>
                          <NFTLabel style={{ color: "#ffb642" }}>
                            {data?.editions?.includes("Gold") && "Gold"}
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
                              height: "1px",
                              color: "#FFF",
                              transform: "scale(1.05, 1)",
                            }}
                          />
                        </RulerContainer>
                      </Row>
                      <PriceSection>
                        <Row justify="start" align="middle">
                          <Col>
                            <NFTLabel style={{ marginBottom: ".3rem" }}>
                              {data?.active ? `Price` : `Sold for`}
                            </NFTLabel>
                          </Col>
                        </Row>
                        <Row justify="start">
                          <Col>
                            <Price>{`$ ${(
                              (parseInt(data?.value?.price) / 1000000) *
                              mutezToUsdRate
                            ).toFixed(2)}`}</Price>
                            
                          </Col>
                        </Row>
                      </PriceSection>
                    </div>
                  </Link>
                </NFTCard>
              </li>
            ))}
          </ul>

          <div className="paddles">
            <div className="left-paddle paddle">
              <svg
                width="90"
                height="90"
                viewBox="0 0 90 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_f_3162_8044)">
                  <circle
                    r="25"
                    transform="matrix(-1 0 0 1 45 45)"
                    fill="#FFB743"
                  />
                </g>
                <circle
                  r="25"
                  transform="matrix(-1 0 0 1 45 45)"
                  fill="#FFB743"
                />
                <path
                  d="M49.464 54.8857C49.3022 54.9698 49.1206 55.0083 48.9386 54.997C48.7566 54.9858 48.5811 54.9251 48.431 54.8217L35.431 45.8217C35.2982 45.7296 35.1896 45.6068 35.1146 45.4636C35.0397 45.3205 35.0005 45.1613 35.0005 44.9997C35.0005 44.8381 35.0397 44.6789 35.1146 44.5357C35.1896 44.3925 35.2982 44.2697 35.431 44.1777L48.431 35.1777C48.581 35.0739 48.7566 35.0131 48.9387 35.0019C49.1208 34.9907 49.3025 35.0295 49.4641 35.1142C49.6257 35.1989 49.761 35.3261 49.8555 35.4822C49.95 35.6383 49.9999 35.8172 50 35.9997V53.9997C50 54.1822 49.9501 54.3613 49.8556 54.5174C49.7611 54.6736 49.6257 54.801 49.464 54.8857Z"
                  fill="white"
                />
                <defs>
                  <filter
                    id="filter0_f_3162_8044"
                    x="0"
                    y="0"
                    width="90"
                    height="90"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="10"
                      result="effect1_foregroundBlur_3162_8044"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="right-paddle paddle">
              <svg
                width="90"
                height="90"
                viewBox="0 0 90 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_f_3162_8044)">
                  <circle
                    r="25"
                    transform="matrix(-1 0 0 1 45 45)"
                    fill="#FFB743"
                  />
                </g>
                <circle
                  r="25"
                  transform="matrix(-1 0 0 1 45 45)"
                  fill="#FFB743"
                />
                <path
                  d="M49.464 54.8857C49.3022 54.9698 49.1206 55.0083 48.9386 54.997C48.7566 54.9858 48.5811 54.9251 48.431 54.8217L35.431 45.8217C35.2982 45.7296 35.1896 45.6068 35.1146 45.4636C35.0397 45.3205 35.0005 45.1613 35.0005 44.9997C35.0005 44.8381 35.0397 44.6789 35.1146 44.5357C35.1896 44.3925 35.2982 44.2697 35.431 44.1777L48.431 35.1777C48.581 35.0739 48.7566 35.0131 48.9387 35.0019C49.1208 34.9907 49.3025 35.0295 49.4641 35.1142C49.6257 35.1989 49.761 35.3261 49.8555 35.4822C49.95 35.6383 49.9999 35.8172 50 35.9997V53.9997C50 54.1822 49.9501 54.3613 49.8556 54.5174C49.7611 54.6736 49.6257 54.801 49.464 54.8857Z"
                  fill="white"
                />
                <defs>
                  <filter
                    id="filter0_f_3162_8044"
                    x="0"
                    y="0"
                    width="90"
                    height="90"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="10"
                      result="effect1_foregroundBlur_3162_8044"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div> */}
    </div>
  );
}

export default CustomSlider;
