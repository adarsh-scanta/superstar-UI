import { lazy, useState, useEffect } from "react";
import { Row, Col, Modal, Dropdown, Menu, Button } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import { SvgIcon } from "../../common/SvgIcon";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./index.css";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useLastLocation } from "react-router-last-location";
import Loading from "../../components/Loader";
import {
  ProductPageComponent,
  ProductPageLeft,
  LincenceContainer,
  ProductPageRight,
  ContentWrapper,
  DescHead,
  PriceTag,
  AtpatContainer,
  ShareIconContainer,
  Desc,
  ProductHeading,
  ProductSubtext,
  BuyButton,
  PriceLabel,
  PriceValue,
  CardSubHeading,
  CardHead,
} from "./styles";
import ScrollToTop from "../../common/ScrollToTop";
import tandavLogo from "../../assets/Tandav.png";
import tseries from "../../assets/tseries.png";
import atpatLogo from "../../assets/atpat.png";
import nagraj from "../../assets/nagraj.png";
import { useDispatch, useSelector } from "react-redux";
import productData from "./data.json";
import { RootState } from "../../redux/rootReducer";
import {
  FETCH_TOKENS,
  FETCH_MARKETPLACE_DATA,
} from "../../redux/Dashboard/Dashboard.types";
import { convertedPrice } from "../../utils/priceConverter";
import { fetchData } from "../../services/nftServices";
import LoginModal from "../../components/Header/LoginModal";
import SignupModal from "../../components/Header/SignupModal";
const Container = lazy(() => import("../../common/Container"));
const CreatorCard = lazy(
  () => import("../../components/ProductPage/CreatorCard")
);
const BuyModal = lazy(() => import("../../components/ProductPage/BuyModal"));
const ProductPage = () => {
  const dispatch = useDispatch();
  // const isLoggedIn = useSelector((data: RootState) => data?.login.userLoggedIn);
  const userData = JSON.parse(localStorage.getItem("user-data"));
  // const authToken = JSON.parse(localStorage.getItem("Authorization-token"));
  const lastLocation = useLastLocation();
  const [isBuyModalVisible, setIsBuyModalVisible] = useState(false);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);
  const [isSignupModalVisible, setIsSignupModalVisible] = useState(false);
  const [realMarketData, setRealMarketData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [mutezToUsdRate, setmutezToUsdRate] = useState(0);
  const [mutezToInrRate, setmutezToInrRate] = useState(0);

  const [currentProduct, setCurrentProduct] = useState({
    name: "",
    movie: "",
    active: false,
    editions: "",
    balance: "",
    nftID: "",
    description: "",
    price: "",
    value: {
      price: "",
      quantity: "",
    },
    type: "",
    thumbnail: "",
    mainAsset: "",
    certificate: "",
    moviePoster: "",
  });

  const shareMenu = (
    <Menu
      theme="dark"
      style={{
        background: "rgba(18, 24, 37, 1)",
        borderRadius: "5px",
        border: "1px solid #fff",
      }}
    >
      <Menu.Item>
        <TwitterShareButton
          url={window.location.href}
          className="Demo__some-network__share-button"
        >
          Share on Twitter
        </TwitterShareButton>
      </Menu.Item>
      <Menu.Item>
        <FacebookShareButton
          url={window.location.href}
          // quote={"Hello World"}
          // hashtag={"#hashtag"}
          // description={"aiueo"}
          className="Demo__some-network__share-button"
        >
          Share on Facebook
        </FacebookShareButton>
      </Menu.Item>
      <Menu.Item>
        <CopyToClipboard text={window.location.href}>
          <span>Copy link</span>
        </CopyToClipboard>
      </Menu.Item>
    </Menu>
  );

  const toggleBuyModal = () => {
    setIsBuyModalVisible(!isBuyModalVisible);
  };
  const toggleLoginModal = () => {
    setIsLoginModalVisible(!isLoginModalVisible);
  };

  const toggleSignupModal = () => {
    setIsSignupModalVisible(!isSignupModalVisible);
  };

  const getDatafromBlock = async () => {
    const res = await fetchData();
    const te = res.filter((item) => item.active === true);
    setRealMarketData(res);
    setLoading(false);
  };

  const getMutezToUsdRate = async () => {
    const rate = await axios.get(
      "https://api.coinpaprika.com/v1/price-converter?base_currency_id=xtz-tezos-token&quote_currency_id=usd-us-dollars&amount=1"
    );
    setmutezToUsdRate(rate.data.price);
  };
  const getMutezToInrRate = async () => {
    const rate = await axios.get(
      "https://api.coinpaprika.com/v1/price-converter?base_currency_id=xtz-tezos-token&quote_currency_id=inr-indian-rupee&amount=1"
    );
    setmutezToInrRate(rate.data.price);
  };
  useEffect(() => {
    setLoading(true);
    getDatafromBlock();
    getMutezToUsdRate();
    getMutezToInrRate();

    // setLoading(false);
    // setLoading(false);
  }, []);

  useEffect(() => {
    // setLoading(true);
    let tempData = [];
    if (realMarketData.length > 0) {
      tempData = realMarketData.filter(
        (item) =>
          item.nftID ===
          window.location.pathname.split("/")[
            window.location.pathname.split("/").length - 1
          ]
      );
    }
    setCurrentProduct(tempData[0]);
    // setLoading(false);
  }, [realMarketData]);

  const [images, setImages] = useState([]);

  useEffect(() => {
    // setLoading(true);
    const tempImages = [
      {
        thumbnail: currentProduct?.mainAsset,
        original: currentProduct?.mainAsset,
      },
      {
        thumbnail: currentProduct?.moviePoster,
        original: currentProduct?.moviePoster,
      },
      {
        thumbnail: currentProduct?.certificate,
        original: currentProduct?.certificate,
      },
    ];
    setImages(tempImages);
  }, [currentProduct]);

  return (
    <>
      <ScrollToTop />
      <Loading isLoading={loading}>
        <Row justify="center">
          <div
            style={{
              width: "100%",
              minHeight: "100vh",
              maxWidth: "1600px",
              margin: "2rem 0 4rem",
            }}
          >
            <Container>
              <Row style={{ margin: "80px 1rem 0" }}>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                  <div id="top">
                    <Link
                      to={
                        lastLocation !== null
                          ? lastLocation?.pathname
                          : "/marketplace"
                      }
                    >
                      <svg
                        width="44"
                        height="44"
                        viewBox="0 0 44 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g filter="url(#filter0_d_3737_17419)">
                          <circle
                            cx="22"
                            cy="21"
                            r="18"
                            fill="url(#paint0_linear_3737_17419)"
                            shape-rendering="crispEdges"
                          />
                        </g>
                        <path
                          d="M33.0819 19.4591H14.9662L21.5401 13.9456L19.7839 12.4727L10.2119 20.5008L19.7839 28.5289L21.5401 27.056L14.9662 21.5424H33.0819V19.4591Z"
                          fill="#F5F9FA"
                        />
                        <defs>
                          <filter
                            id="filter0_d_3737_17419"
                            x="0"
                            y="0"
                            width="44"
                            height="44"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.42 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_3737_17419"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_3737_17419"
                              result="shape"
                            />
                          </filter>
                          <linearGradient
                            id="paint0_linear_3737_17419"
                            x1="22"
                            y1="3"
                            x2="22"
                            y2="39"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#4D525F" />
                            <stop
                              offset="1"
                              stop-color="#403C3C"
                              stop-opacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </Link>
                    <div></div>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                  <ShareIconContainer>
                    <Dropdown overlay={shareMenu} placement="bottomCenter">
                      <Row justify="space-between">
                        <Col>
                          <svg
                            width="43"
                            height="43"
                            viewBox="0 0 43 43"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g filter="url(#filter0_d_3737_17405)">
                              <circle
                                cx="21.5"
                                cy="20.5"
                                r="17.5"
                                fill="url(#paint0_linear_3737_17405)"
                                shape-rendering="crispEdges"
                              />
                            </g>
                            <path
                              d="M14.7531 23.9128C15.689 23.9075 16.5891 23.5528 17.277 22.9182L23.9717 26.7468C23.8864 27.0423 23.8432 27.3483 23.8434 27.6558C23.8365 28.5237 24.1289 29.3675 24.6713 30.0451C25.2137 30.7226 25.973 31.1926 26.8214 31.3758C27.6698 31.559 28.5554 31.4443 29.3291 31.051C30.1028 30.6577 30.7173 30.0098 31.0693 29.2165C31.4212 28.4231 31.489 27.5327 31.2612 26.6952C31.0335 25.8576 30.5241 25.1242 29.8189 24.6183C29.1137 24.1123 28.2557 23.8649 27.3893 23.9175C26.523 23.9702 25.7013 24.3198 25.0625 24.9074L18.3678 21.0788C18.4486 20.8152 18.4918 20.5416 18.4961 20.266L25.0732 16.5015C25.7085 17.0757 26.5219 17.4139 27.377 17.4594C28.2321 17.505 29.0768 17.2552 29.7696 16.7518C30.4623 16.2485 30.9609 15.5223 31.1818 14.6949C31.4026 13.8676 31.3323 12.9895 30.9825 12.2079C30.6328 11.4263 30.0249 10.7887 29.2608 10.4021C28.4968 10.0155 27.623 9.90333 26.7861 10.0845C25.9492 10.2656 25.2 10.729 24.6642 11.397C24.1284 12.0649 23.8386 12.8968 23.8434 13.7531C23.847 14.0603 23.8901 14.3658 23.9717 14.6621L17.8866 18.1378C17.534 17.5923 17.0455 17.148 16.4692 16.8485C15.8929 16.5489 15.2486 16.4045 14.5995 16.4294C13.9505 16.4543 13.3191 16.6477 12.7675 16.9905C12.2158 17.3333 11.7628 17.8138 11.4531 18.3846C11.1433 18.9555 10.9875 19.5972 11.0008 20.2465C11.0141 20.8959 11.1962 21.5306 11.5291 22.0883C11.862 22.646 12.3343 23.1075 12.8996 23.4273C13.4648 23.7472 14.1036 23.9145 14.7531 23.9128ZM27.5864 26.0517C27.9037 26.0517 28.2138 26.1458 28.4776 26.322C28.7414 26.4983 28.9471 26.7488 29.0685 27.042C29.1899 27.3351 29.2217 27.6576 29.1598 27.9688C29.0979 28.28 28.9451 28.5658 28.7207 28.7902C28.4964 29.0145 28.2106 29.1673 27.8994 29.2292C27.5882 29.2911 27.2657 29.2593 26.9725 29.1379C26.6794 29.0165 26.4289 28.8109 26.2526 28.5471C26.0763 28.2833 25.9823 27.9731 25.9823 27.6558C25.9823 27.2304 26.1513 26.8224 26.4521 26.5215C26.7529 26.2207 27.161 26.0517 27.5864 26.0517ZM27.5864 12.1489C27.9037 12.1489 28.2138 12.243 28.4776 12.4192C28.7414 12.5955 28.9471 12.8461 29.0685 13.1392C29.1899 13.4323 29.2217 13.7548 29.1598 14.066C29.0979 14.3772 28.9451 14.663 28.7207 14.8874C28.4964 15.1117 28.2106 15.2645 27.8994 15.3264C27.5882 15.3883 27.2657 15.3565 26.9725 15.2351C26.6794 15.1137 26.4289 14.9081 26.2526 14.6443C26.0763 14.3805 25.9823 14.0703 25.9823 13.7531C25.9823 13.3276 26.1513 12.9196 26.4521 12.6187C26.7529 12.3179 27.161 12.1489 27.5864 12.1489ZM14.7531 18.5656C15.0704 18.5656 15.3805 18.6596 15.6443 18.8359C15.9081 19.0122 16.1137 19.2627 16.2351 19.5558C16.3566 19.849 16.3883 20.1715 16.3264 20.4827C16.2645 20.7939 16.1118 21.0797 15.8874 21.304C15.6631 21.5284 15.3772 21.6812 15.066 21.7431C14.7549 21.805 14.4323 21.7732 14.1392 21.6518C13.8461 21.5304 13.5955 21.3248 13.4193 21.061C13.243 20.7972 13.1489 20.487 13.1489 20.1697C13.1489 19.7443 13.3179 19.3363 13.6188 19.0354C13.9196 18.7346 14.3276 18.5656 14.7531 18.5656Z"
                              fill="#F5F9FA"
                            />
                            <defs>
                              <filter
                                id="filter0_d_3737_17405"
                                x="0"
                                y="0"
                                width="43"
                                height="43"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                              >
                                <feFlood
                                  floodOpacity="0"
                                  result="BackgroundImageFix"
                                />
                                <feColorMatrix
                                  in="SourceAlpha"
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  result="hardAlpha"
                                />
                                <feOffset dy="1" />
                                <feGaussianBlur stdDeviation="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                  type="matrix"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.42 0"
                                />
                                <feBlend
                                  mode="normal"
                                  in2="BackgroundImageFix"
                                  result="effect1_dropShadow_3737_17405"
                                />
                                <feBlend
                                  mode="normal"
                                  in="SourceGraphic"
                                  in2="effect1_dropShadow_3737_17405"
                                  result="shape"
                                />
                              </filter>
                              <linearGradient
                                id="paint0_linear_3737_17405"
                                x1="21.5"
                                y1="3"
                                x2="21.5"
                                y2="38"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stop-color="#403C3C" />
                                <stop
                                  offset="1"
                                  stop-color="#403C3C"
                                  stop-opacity="0"
                                />
                              </linearGradient>
                            </defs>
                          </svg>
                        </Col>
                      </Row>
                    </Dropdown>
                  </ShareIconContainer>
                </Col>
              </Row>
              <ProductPageComponent>
                <Row justify="center">
                  <Col xs={24} sm={24} md={24} lg={12} xl={10}>
                    <ProductPageLeft>
                      <Row justify="end">
                        <Col span={24}>
                          <div
                            style={{ position: "relative", marginRight: "0" }}
                          >
                            <div
                              style={{
                                position: "relative",
                                width: "80%",
                                marginRight: "0",
                                height: "380px",
                                left: "18%",
                              }}
                            ></div>
                            <div className="gallery-container">
                              <ImageGallery
                                items={images}
                                showNav={false}
                                showPlayButton={false}
                              />
                            </div>
                          </div>
                          {/*  */}
                        </Col>
                      </Row>

                      <Row justify="end">
                        <Col span={20}>
                          <Row justify="center">
                            <ContentWrapper
                              style={{
                                width: "90%",
                              }}
                            >
                              <a
                                href={currentProduct?.mainAsset}
                                target="_blank"
                              >
                                <span style={{ color: "#f8bb5a" }}>
                                  Show on IPFS
                                </span>
                              </a>
                              <DescHead>Description</DescHead>
                              <Desc>{currentProduct?.description}</Desc>
                            </ContentWrapper>
                          </Row>
                        </Col>
                      </Row>
                    </ProductPageLeft>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={12} xl={14}>
                    <ProductPageRight>
                      <Row justify="space-between">
                        <Col>
                          <p
                            style={{
                              background: "rgba(255, 190, 85, 1)",
                              borderRadius: "4px",
                              padding: "0.3rem",
                              position: "relative",
                              top: "20px",
                              color: "#020202",
                              fontWeight: 600,
                              width: "fit-content",
                              fontSize: "1rem",
                            }}
                          >
                            {currentProduct?.name.includes("Jhund") && "Jhund"}
                          </p>
                        </Col>
                        <Col>
                          <p
                            style={{
                              color: "rgba(255, 190, 85, 1)",
                              position: "relative",
                              top: "10px",
                              fontWeight: 700,
                              fontSize: "1.8rem",
                              margin: "0",
                              textShadow: "0px 1px 4px #FFB947",
                              textAlign: "right",
                            }}
                          >
                            {currentProduct?.editions?.includes("Gold")
                              ? "Gold"
                              : "Premium"}
                          </p>
                          <p
                            style={{
                              color: "#fff",
                              position: "relative",
                              top: "10px",
                              fontWeight: 500,
                              fontSize: "1.3rem",
                              margin: "0",
                            }}
                          >
                            {`Quantity ${0}/${
                              currentProduct?.editions?.includes("Gold")
                                ? "1"
                                : 10 - parseInt(currentProduct?.balance)
                            }`}
                          </p>
                        </Col>
                      </Row>

                      <ProductHeading>{currentProduct?.name} </ProductHeading>
                      <ProductSubtext>{currentProduct?.movie}</ProductSubtext>
                      <Row justify="space-between">
                        <Col xs={18} sm={12} lg={22} md={16} xl={16} span={24}>
                          <PriceTag>
                            <PriceLabel>Price</PriceLabel>
                            <Row justify="center">
                              <Col xs={24} sm={24} lg={8} md={8} xl={8}>
                                <div
                                  style={{
                                    position: "relative",
                                    top: "-1rem",
                                  }}
                                >
                                  <Row>
                                    <Col
                                      xs={8}
                                      sm={8}
                                      lg={24}
                                      md={24}
                                      xl={24}
                                      span={24}
                                    >
                                      <Row justify="center">
                                        <span
                                          style={{
                                            fontSize: "1rem",
                                            textAlign: "center",
                                          }}
                                        >
                                          USD
                                        </span>
                                      </Row>
                                    </Col>
                                    <Col
                                      xs={16}
                                      sm={16}
                                      lg={24}
                                      md={24}
                                      xl={24}
                                      span={24}
                                    >
                                      <PriceValue>
                                        ${" "}
                                        {(
                                          (parseInt(
                                            currentProduct?.value.price
                                          ) /
                                            1000000) *
                                          mutezToUsdRate
                                        ).toFixed(2)}
                                      </PriceValue>
                                    </Col>
                                  </Row>
                                </div>
                              </Col>
                              <Col xs={24} sm={24} lg={8} md={8} xl={8}>
                                <div
                                  style={{
                                    position: "relative",
                                    top: "-1rem",
                                  }}
                                >
                                  <Row>
                                    <Col
                                      xs={8}
                                      sm={8}
                                      lg={24}
                                      md={24}
                                      xl={24}
                                      span={24}
                                    >
                                      <Row justify="center">
                                        <span style={{ fontSize: "1rem" }}>
                                          INR
                                        </span>
                                      </Row>
                                    </Col>
                                    <Col
                                      xs={16}
                                      sm={16}
                                      lg={24}
                                      md={24}
                                      xl={24}
                                      span={24}
                                    >
                                      <PriceValue>
                                        ₹{" "}
                                        {(
                                          (parseInt(
                                            currentProduct?.value.price
                                          ) /
                                            1000000) *
                                          mutezToInrRate
                                        ).toFixed(2)}
                                      </PriceValue>
                                    </Col>
                                  </Row>
                                </div>
                              </Col>
                              <Col xs={24} sm={24} lg={8} md={8} xl={8}>
                                <div
                                  style={{
                                    position: "relative",
                                    top: "-1rem",
                                  }}
                                >
                                  <Row>
                                    <Col
                                      xs={8}
                                      sm={8}
                                      lg={24}
                                      md={24}
                                      xl={24}
                                      span={24}
                                    >
                                      <Row justify="center">
                                        <span style={{ fontSize: "1rem" }}>
                                          XTZ
                                        </span>
                                      </Row>
                                    </Col>
                                    <Col
                                      xs={16}
                                      sm={16}
                                      lg={24}
                                      md={24}
                                      xl={24}
                                      span={24}
                                    >
                                      <PriceValue>
                                        ꜩ{" "}
                                        {(
                                          parseInt(
                                            currentProduct?.value.price
                                          ) / 1000000
                                        ).toFixed(2)}
                                      </PriceValue>
                                    </Col>
                                  </Row>
                                </div>
                              </Col>
                            </Row>
                          </PriceTag>
                        </Col>
                        {productData.type === "selling" ? (
                          <Col span={8}></Col>
                        ) : (
                          <Col span={12}>
                            <Row justify="space-between">
                              <Col>
                                <div
                                  style={{
                                    margin: " 0",
                                    padding: "0.5rem 1rem",
                                    position: "relative",
                                  }}
                                >
                                  <p
                                    style={{
                                      margin: "0 0.5rem 0.5rem",
                                      fontSize: "0.8rem",
                                      color: "#fff",
                                      textAlign: "left",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Auction ends in
                                  </p>
                                  <p
                                    style={{
                                      margin: "0 0.5rem",
                                      fontSize: "0.8rem",
                                      color: "#fff",
                                      textAlign: "left",
                                    }}
                                  >
                                    <span style={{ margin: "0 0.5rem" }}>
                                      Hours
                                    </span>
                                    :
                                    <span style={{ margin: "0 0.5rem" }}>
                                      Minutes
                                    </span>
                                    :
                                    <span style={{ margin: "0 0.5rem" }}>
                                      Seconds
                                    </span>
                                  </p>
                                  <p
                                    style={{
                                      margin: "0 0.5rem",
                                      fontSize: "1.5rem",
                                      color: "#fff",
                                      textAlign: "left",
                                    }}
                                  >
                                    <span style={{ margin: "0 1rem" }}>11</span>
                                    :
                                    <span style={{ margin: "0 1rem" }}>11</span>
                                    :
                                    <span style={{ margin: "0 1rem" }}>11</span>
                                  </p>
                                </div>
                              </Col>
                            </Row>
                          </Col>
                        )}
                      </Row>
                      <BuyButton
                        onClick={userData ? toggleBuyModal : toggleLoginModal}
                        disabled={true}
                      >
                        <span
                          style={{
                            color: "#020202",
                            fontWeight: "bold",
                            fontSize: "1rem",
                            cursor: "pointer",
                          }}
                        >
                          {"Sold"}
                        </span>
                      </BuyButton>

                      <Modal
                        style={{
                          margin: "0",
                          padding: "0",
                          borderRadius: "12px",
                          overflow: "hidden",
                        }}
                        className="modalStyle"
                        centered={true}
                        closable={true}
                        width={600}
                        visible={isBuyModalVisible}
                        footer={null}
                        cancelButtonProps={{ style: { display: "none" } }}
                        okButtonProps={{ style: { display: "none" } }}
                        onCancel={toggleBuyModal}
                        bodyStyle={{ background: "#121825" }}
                      >
                        <BuyModal productData={currentProduct} />
                      </Modal>
                      <Modal
                        style={{
                          margin: "0",
                          padding: "0",
                          borderRadius: "12px",
                          // border: "1px solid #fff",
                          overflow: "hidden",
                        }}
                        className="modalStyle"
                        centered={true}
                        closable={false}
                        width={500}
                        visible={isLoginModalVisible}
                        footer={null}
                        cancelButtonProps={{ style: { display: "none" } }}
                        okButtonProps={{ style: { display: "none" } }}
                        onCancel={toggleLoginModal}
                        bodyStyle={{ background: "#121825" }}
                      >
                        <LoginModal
                          toggleSignupModal={toggleSignupModal}
                          toggleLoginModal={toggleLoginModal}
                        />
                      </Modal>
                      <Modal
                        style={{
                          margin: "0",
                          padding: "0",
                          borderRadius: "12px",
                          overflow: "hidden",
                        }}
                        className="modalStyle"
                        centered={true}
                        closable={false}
                        width={450}
                        visible={isSignupModalVisible}
                        footer={null}
                        cancelButtonProps={{ style: { display: "none" } }}
                        okButtonProps={{ style: { display: "none" } }}
                        onCancel={toggleSignupModal}
                        bodyStyle={{ background: "#121825" }}
                      >
                        <SignupModal
                          toggleSignupModal={toggleSignupModal}
                          toggleLoginModal={toggleLoginModal}
                        />
                      </Modal>

                      <CreatorCard creatorsData={productData.creatorsData} />

                      <div style={{ margin: "3rem 0 1rem" }}>
                        <Row justify="space-between">
                          <Col span={8}>
                            <CardHead>Licenced by</CardHead>
                          </Col>
                          <Col span={8}>
                            <CardSubHeading>
                              <Link to="/terms-of-sale"></Link>
                            </CardSubHeading>
                          </Col>
                        </Row>
                        <div style={{ margin: "2rem 1rem", maxWidth: "550px" }}>
                          <Row justify="start">
                            <Col sm={24} md={24} lg={24}>
                              <Row justify="center" align="middle">
                                <Col span={8}>
                                  <Row justify="center">
                                    <LincenceContainer>
                                      <img
                                        src={tandavLogo}
                                        style={{
                                          position: "relative",
                                          // left: "10px",
                                        }}
                                      />

                                      <p
                                        style={{
                                          color: "#fff",
                                          position: "relative",
                                          top: "4px",
                                          left: "-5px",
                                          fontSize: "0.9rem",
                                          marginBottom: "0",
                                        }}
                                      >
                                        Tandav films
                                      </p>
                                    </LincenceContainer>
                                  </Row>
                                </Col>
                                <Col span={8}>
                                  <Row justify="center">
                                    <LincenceContainer>
                                      <img
                                        src={tseries}
                                        style={{
                                          position: "relative",
                                          left: "15px",
                                          top: "-4px",
                                        }}
                                      />
                                      <p
                                        style={{
                                          color: "#fff",
                                          fontSize: "0.9rem",
                                          marginBottom: "0",
                                          position: "relative",
                                          top: "6px",
                                          left: "10px",
                                        }}
                                      >
                                        T-series
                                      </p>
                                    </LincenceContainer>
                                  </Row>
                                </Col>
                                <Col span={8}>
                                  <Row justify="center">
                                    <div
                                      style={{
                                        width: "75%",
                                        // top: "5px",
                                      }}
                                    >
                                      <img
                                        src={atpatLogo}
                                        style={{
                                          position: "relative",
                                          left: "5px",
                                          top: "-4px",
                                        }}
                                      />
                                      <AtpatContainer>
                                        Aatpat Production
                                      </AtpatContainer>
                                    </div>
                                  </Row>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </div>
                      </div>
                      {/* <div style={{ margin: "3rem 0 1rem" }}>
                        <Row justify="space-between">
                          <Col span={8}>
                            <CardHead>History</CardHead>
                          </Col>
                          <Col span={8}>
                            <CardSubHeading></CardSubHeading>
                          </Col>
                        </Row>
                        <div style={{ margin: "2rem 1rem", maxWidth: "550px" }}>
                          <Row justify="start">
                            <Col sm={24} md={24} lg={24}>
                              <Row justify="center" align="middle">
                                <Col span={24}>
                                  <Row justify="center">
                                    <Col span={18}>
                                      <Row justify="start">
                                        <Col>
                                          <img
                                            src={tandavLogo}
                                            style={{
                                              position: "relative",
                                              margin: "0 10px 0 0",
                                              // left: "10px",
                                            }}
                                          />
                                        </Col>
                                        <Col>
                                          <p
                                            style={{
                                              margin: "5px 0",
                                              fontSize: "1rem",
                                            }}
                                          >
                                            Bought by{" "}
                                            <span
                                              style={{ fontWeight: "bold" }}
                                            >
                                              John Doe
                                            </span>
                                          </p>
                                          <p
                                            style={{
                                              margin: "0",
                                              fontSize: "0.9rem",
                                            }}
                                          >
                                            18 Mar 2022 04:53:09 PM
                                          </p>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col span={4}>
                                      <p
                                        style={{
                                          color: "#fff",
                                          fontSize: "1rem",
                                          fontWeight: "bold",
                                          margin: "5px 0",
                                          textAlign: "right",
                                        }}
                                      >
                                        $5000
                                      </p>
                                      <p
                                        style={{
                                          color: "#fff",
                                          fontSize: "1rem",
                                          margin: "5px 0",
                                          textAlign: "right",
                                        }}
                                      >
                                        ₹ 375,000
                                      </p>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col span={24}>
                                  <Row justify="center">
                                    <Col span={18}>
                                      <Row justify="start">
                                        <Col>
                                          <img
                                            src={tandavLogo}
                                            style={{
                                              position: "relative",
                                              margin: "0 10px 0 0",
                                              // left: "10px",
                                            }}
                                          />
                                        </Col>
                                        <Col>
                                          <p
                                            style={{
                                              margin: "5px 0",
                                              fontSize: "1rem",
                                            }}
                                          >
                                            Listed by{" "}
                                            <span
                                              style={{ fontWeight: "bold" }}
                                            >
                                              Superstar Xchange
                                            </span>
                                          </p>
                                          <p
                                            style={{
                                              margin: "0",
                                              fontSize: "0.9rem",
                                            }}
                                          >
                                            16 Mar 2022 04:53:09 PM
                                          </p>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col span={4}>
                                      <p
                                        style={{
                                          color: "#fff",
                                          fontSize: "1rem",
                                          fontWeight: "bold",
                                          margin: "5px 0",
                                          textAlign: "right",
                                        }}
                                      >
                                        $5000
                                      </p>
                                      <p
                                        style={{
                                          color: "#fff",
                                          fontSize: "1rem",
                                          margin: "5px 0",
                                          textAlign: "right",
                                        }}
                                      >
                                        ₹ 375,000
                                      </p>
                                    </Col>
                                  </Row>{" "}
                                </Col>
                                <Col span={24}>
                                  <Row justify="center">
                                    <Col span={18}>
                                      <Row justify="start">
                                        <Col>
                                          <img
                                            src={tandavLogo}
                                            style={{
                                              position: "relative",
                                              margin: "0 10px 0 0",
                                              // left: "10px",
                                            }}
                                          />
                                        </Col>
                                        <Col>
                                          <p
                                            style={{
                                              margin: "5px 0",
                                              fontSize: "1rem",
                                            }}
                                          >
                                            Minted by{" "}
                                            <span
                                              style={{ fontWeight: "bold" }}
                                            >
                                              Superstar Xchange
                                            </span>
                                          </p>
                                          <p
                                            style={{
                                              margin: "0",
                                              fontSize: "0.9rem",
                                            }}
                                          >
                                            16 Mar 2022 04:53:09 PM
                                          </p>
                                        </Col>
                                      </Row>
                                    </Col>
                                    <Col span={4}>
                                      <p
                                        style={{
                                          color: "#fff",
                                          fontSize: "1rem",
                                          fontWeight: "bold",
                                          margin: "5px 0",
                                          textAlign: "right",
                                        }}
                                      >
                                        $5000
                                      </p>
                                      <p
                                        style={{
                                          color: "#fff",
                                          fontSize: "1rem",
                                          margin: "5px 0",
                                          textAlign: "right",
                                        }}
                                      >
                                        ₹ 375,000
                                      </p>
                                    </Col>
                                  </Row>{" "}
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </div>
                      </div> */}
                    </ProductPageRight>
                  </Col>
                </Row>
              </ProductPageComponent>
            </Container>
          </div>
        </Row>
      </Loading>
    </>
  );
};

export default ProductPage;
