import { lazy, useState, useEffect } from "react";
import { Row, Col, Menu, Dropdown } from "antd";
// import { Row, Col, Dropdown } from "antd";
import { SvgIcon } from "../../common/SvgIcon";
import axios from "axios";
import {
  DownOutlined,
  InfoCircleOutlined,
  CopyOutlined,
} from "@ant-design/icons";
import ScrollToTop from "../../common/ScrollToTop";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { fetchData } from "../../services/nftServices";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { FilterContainer } from "./styles";
import { useLastLocation } from "react-router-last-location";
import _ from "underscore";
import { FETCH_USER_NFT } from "../../redux/Dashboard/Dashboard.types";
import Loading from "../../components/Loader";

import {
  FollowButton,
  NFTCard,
  FollowButtonContainer,
  StatsNumber,
  StatsLabel,
  SuperfanName,
  SuperfanID,
  SuperfanAddress,
  NFTLabel,
  RulerContainer,
  PriceSection,
  Price,
} from "./styles";

const Container = lazy(() => import("../../common/Container"));

const styles = {
  selectedButton: {
    margin: "0.5rem",
    padding: "0.5rem 1rem",
    border: "1px solid #F8BB5A",
    color: "#020202",
    fontSize: "1rem",
    fontWeight: "bold",
    background: "#FFAC27",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    borderRadius: "8px",
  },
  button: {
    margin: "0.5rem",
    background: "#121825",
    // fontWeight: "bold",
    fontSize: "1rem",
    padding: "0.5rem 1rem",
    border: "1px solid #FFF",
    borderRadius: "8px",
  },
};

const superfanData = [
  {
    name: "NFT Name",
    movie: "Movie Name",
    sellingOrBidding: "selling",
    type: "poster",
    price: 16,
    thumbnail: "thumb1.png",
  },
  {
    name: "NFT Name",
    movie: "Movie Name",
    type: "moment",
    sellingOrBidding: "selling",
    price: 12,
    thumbnail: "thumb2.png",
  },
  {
    name: "NFT Name",
    movie: "Movie Name",
    type: "poster",
    sellingOrBidding: "selling",
    price: 18,
    thumbnail: "thumb3.png",
  },
  {
    name: "NFT Name",
    movie: "Movie Name",
    sellingOrBidding: "selling",
    type: "moment",
    price: 15,
    thumbnail: "thumb4.png",
  },
  {
    name: "NFT Name",
    movie: "Movie Name",
    sellingOrBidding: "bidding",
    type: "poster",
    price: 11,
    thumbnail: "thumb5.png",
  },
  {
    name: "NFT Name",
    movie: "Movie Name",
    sellingOrBidding: "bidding",
    type: "moment",
    price: 35,
    thumbnail: "thumb6.png",
  },
  {
    name: "NFT Name",
    movie: "Movie Name",
    type: "moment",
    sellingOrBidding: "selling",
    price: 22,
    thumbnail: "thumb8.png",
  },
  {
    name: "NFT Name",
    movie: "Movie Name",
    sellingOrBidding: "bidding",
    type: "poster",
    price: 29,
    thumbnail: "thumb9.png",
  },
  {
    name: "NFT Name",
    movie: "Movie Name",
    sellingOrBidding: "selling",
    type: "moment",
    price: 31,
    thumbnail: "thumb10.png",
  },
  {
    name: "NFT Name",
    movie: "Movie Name",
    sellingOrBidding: "bidding",
    type: "poster",
    price: 10,
    thumbnail: "thumb11.png",
  },
  {
    name: "NFT Name",
    movie: "Movie Name",
    type: "moment",
    sellingOrBidding: "selling",
    price: 21,
    thumbnail: "thumb12.png",
  },
  {
    name: "NFT Name",
    sellingOrBidding: "selling",
    movie: "Movie Name",
    type: "poster",
    price: 26,
    thumbnail: "thumb1.png",
  },
  {
    name: "NFT Name",
    movie: "Movie Name",
    sellingOrBidding: "bidding",
    type: "moment",
    price: 20,
    thumbnail: "thumb2.png",
  },
  {
    name: "NFT Name",
    movie: "Movie Name",
    type: "poster",
    sellingOrBidding: "selling",
    price: 13,
    thumbnail: "thumb3.png",
  },
  {
    name: "NFT Name",
    sellingOrBidding: "selling",
    movie: "Movie Name",
    type: "moment",
    price: 19,
    thumbnail: "thumb4.png",
  },
  {
    name: "NFT Name",
    movie: "Movie Name",
    sellingOrBidding: "bidding",
    type: "poster",
    price: 26,
    thumbnail: "thumb5.png",
  },

  {
    name: "NFT Name",
    movie: "Movie Name",
    sellingOrBidding: "selling",
    type: "moment",
    price: 12,
    thumbnail: "thumb10.png",
  },
  {
    name: "NFT Name",
    movie: "Movie Name",
    sellingOrBidding: "bidding",
    type: "poster",
    price: 8,
    thumbnail: "thumb11.png",
  },
  {
    name: "NFT Name",
    movie: "Movie Name",
    sellingOrBidding: "selling",
    type: "moment",
    price: 4,
    thumbnail: "thumb12.png",
  },
  {
    name: "NFT Name",
    movie: "Movie Name",
    sellingOrBidding: "selling",
    type: "poster",
    price: 23,
    thumbnail: "thumb1.png",
  },
  {
    name: "NFT Name",
    movie: "Movie Name",
    type: "moment",
    sellingOrBidding: "bidding",
    price: 15,
    thumbnail: "thumb2.png",
  },
  {
    name: "NFT Name",
    movie: "Movie Name",
    sellingOrBidding: "selling",
    type: "poster",
    price: 16,
    thumbnail: "thumb3.png",
  },
  {
    name: "NFT Name",
    movie: "Movie Name",
    sellingOrBidding: "selling",
    type: "moment",
    price: 10,
    thumbnail: "thumb4.png",
  },
  {
    name: "NFT Name",
    movie: "Movie Name",
    sellingOrBidding: "bidding",
    type: "poster",
    price: 10,
    thumbnail: "thumb5.png",
  },
  {
    name: "NFT Name",
    movie: "Movie Name",
    sellingOrBidding: "selling",
    type: "moment",
    price: 10,
    thumbnail: "thumb6.png",
  },
  {
    name: "NFT Name",
    movie: "Movie Name",
    type: "poster",
    sellingOrBidding: "selling",
    price: 10,
    thumbnail: "thumb7.png",
  },
  {
    name: "NFT Name",
    movie: "Movie Name",
    sellingOrBidding: "bidding",
    type: "moment",
    price: 10,
    thumbnail: "thumb8.png",
  },
  {
    name: "NFT Name",
    movie: "Movie Name",
    type: "poster",
    price: 10,
    sellingOrBidding: "selling",
    thumbnail: "thumb9.png",
  },
  {
    name: "NFT Name",
    movie: "Movie Name",
    sellingOrBidding: "selling",
    type: "moment",
    price: 10,
    thumbnail: "thumb10.png",
  },
  {
    name: "NFT Name",
    sellingOrBidding: "selling",
    movie: "Movie Name",
    type: "poster",
    price: 10,
    thumbnail: "thumb11.png",
  },
  {
    name: "NFT Name",
    movie: "Movie Name",
    type: "moment",
    price: 10,
    sellingOrBidding: "selling",
    thumbnail: "thumb12.png",
  },

  {
    name: "NFT Name",
    movie: "Movie Name",
    type: "moment",
    price: 21,
    sellingOrBidding: "selling",
    thumbnail: "thumb2.png",
  },
  {
    name: "NFT Name",
    movie: "Movie Name",
    sellingOrBidding: "bidding",
    type: "poster",
    price: 27,
    thumbnail: "thumb3.png",
  },
  {
    name: "NFT Name",
    movie: "Movie Name",
    sellingOrBidding: "selling",
    type: "moment",
    price: 29,
    thumbnail: "thumb4.png",
  },
  {
    name: "NFT Name",
    movie: "Movie Name",
    sellingOrBidding: "bidding",
    type: "poster",
    price: 25,
    thumbnail: "thumb5.png",
  },
  {
    name: "NFT Name",
    movie: "Movie Name",
    sellingOrBidding: "selling",
    type: "moment",
    price: 27,
    thumbnail: "thumb6.png",
  },
  {
    name: "NFT Name",
    movie: "Movie Name",
    type: "poster",
    sellingOrBidding: "selling",
    price: 23,
    thumbnail: "thumb7.png",
  },
  {
    name: "NFT Name",
    movie: "Movie Name",
    sellingOrBidding: "bidding",
    type: "moment",
    price: 14,
    thumbnail: "thumb8.png",
  },
  {
    name: "NFT Name",
    movie: "Movie Name",
    sellingOrBidding: "selling",
    type: "poster",
    price: 19,
    thumbnail: "thumb9.png",
  },
  {
    name: "NFT Name",
    movie: "Movie Name",
    sellingOrBidding: "selling",
    type: "moment",
    price: 17,
    thumbnail: "thumb10.png",
  },
  {
    name: "NFT Name",
    movie: "Movie Name",
    sellingOrBidding: "bidding",
    type: "poster",
    price: 12,
    thumbnail: "thumb11.png",
  },
  {
    name: "NFT Name",
    movie: "Movie Name",
    sellingOrBidding: "selling",
    type: "moment",
    price: 10,
    thumbnail: "thumb12.png",
  },
];

const SuperfanProfilePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [sortBy, setSortBy] = useState("Sort by");
  const isLoggedIn = useSelector((data: RootState) => data?.login.userLoggedIn);

  const [selectedFilter, setSelectedFilter] = useState("All");
  const [dataToShow, setDataToShow] = useState([] as any);
  const userNFTs = useSelector((data: RootState) => data?.dashboard.userNFTs);
  const userData = useSelector((data: RootState) => data?.login.userData);
  const pkh = JSON.parse(localStorage.getItem("user-data"))?.pkh;
  const [formattedNFTs, setFormattedNFTs] = useState([]);
  const [balanceUserNFTs, setBalanceUserNFTs] = useState([]);
  const lastLocation = useLastLocation();
  const [loading, setLoading] = useState(false);

  const [mutezToUsdRate, setmutezToUsdRate] = useState(0);

  const getConvertRate = async () => {
    const rate = await axios.get(
      "https://api.coinpaprika.com/v1/price-converter?base_currency_id=xtz-tezos-token&quote_currency_id=usd-us-dollars&amount=1"
    );
    setmutezToUsdRate(rate.data.price);
  };

  const getDatafromBlock = async () => {
    const res = await fetchData();
    setFormattedNFTs(res);
    dispatch({ type: FETCH_USER_NFT, payload: pkh });
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getConvertRate();
    getDatafromBlock();
    if (!isLoggedIn) {
      history.push("/");
    }
  }, []);

  useEffect(() => {
    let list = [];
    for (let i = 0; i < userNFTs.length; i++) {
      const tempObj = {};
      formattedNFTs.forEach((item) => {
        if (parseInt(item.nftID) === parseInt(userNFTs[i].token.tokenId)) {
          Object.assign(tempObj, item);
          Object.assign(tempObj, userNFTs[i]);
          list.push(tempObj);
        }
      });
    }
    const temperedData = list;
    // for (let i = 0; i < temperedData.length; i++) {
    //   if (temperedData[i].name === "Jhund Poster #4") {
    //     temperedData[i]["active"] = false;
    //     temperedData[i]["balance"] = "0";
    //   }
    //   if (temperedData[i].name === "Jhund Poster #5") {
    //     // temperedData[i]["active"] = false;
    //     temperedData[i]["balance"] = "4";
    //   }
    //   if (temperedData[i].name === "Jhund Poster #6") {
    //     // temperedData[i]["active"] = false;
    //     temperedData[i]["balance"] = "2";
    //   }
    //   if (temperedData[i].name === "Jhund Poster #7") {
    //     // temperedData[i]["active"] = false;
    //     temperedData[i]["balance"] = "5";
    //   }
    //   if (temperedData[i].name === "Jhund Poster #8") {
    //     // temperedData[i]["active"] = false;
    //     temperedData[i]["balance"] = "8";
    //   }
    //   if (temperedData[i].name === "Jhund Poster #9") {
    //     // temperedData[i]["active"] = false;
    //     temperedData[i]["balance"] = "6";
    //   }
    //   if (temperedData[i].name === "Jhund Poster #10") {
    //     // temperedData[i]["active"] = false;
    //     temperedData[i]["balance"] = "4";
    //   }
    //   if (temperedData[i].name === "Jhund Poster #11") {
    //     // temperedData[i]["active"] = false;
    //     temperedData[i]["balance"] = "6";
    //   }
    //   if (temperedData[i].name === "Jhund Poster #12") {
    //     // temperedData[i]["active"] = false;
    //     temperedData[i]["balance"] = "2";
    //   }
    //   if (temperedData[i].name === "Jhund Poster #13") {
    //     // temperedData[i]["active"] = false;
    //     temperedData[i]["balance"] = "7";
    //   }
    //   if (temperedData[i].name === "Jhund Poster #14") {
    //     // temperedData[i]["active"] = false;
    //     temperedData[i]["balance"] = "3";
    //   }
    //   if (temperedData[i].name === "Jhund Poster #15") {
    //     // temperedData[i]["active"] = false;
    //     temperedData[i]["balance"] = "4";
    //   } 
    //   if (temperedData[i].name === "Jhund Poster #16") {
    //     // temperedData[i]["active"] = false;
    //     temperedData[i]["balance"] = "7";
    //   }
    //   if (temperedData[i].name === "Jhund Poster #17") {
    //     // temperedData[i]["active"] = false;
    //     temperedData[i]["balance"] = "5";
    //   }
    //   if (temperedData[i].name === "Jhund Poster #18") {
    //     // temperedData[i]["active"] = false;
    //     temperedData[i]["balance"] = "2";
    //   }
    //   if (temperedData[i].name === "Jhund Poster #19") {
    //     // temperedData[i]["active"] = false;
    //     temperedData[i]["balance"] = "7";
    //   }
    //   if (temperedData[i].name === "Jhund Poster #20") {
    //     // temperedData[i]["active"] = false;
    //     temperedData[i]["balance"] = "6";
    //   }
    //   if (temperedData[i].name === "Jhund Poster #21") {
    //     // temperedData[i]["active"] = false;
    //     temperedData[i]["balance"] = "3";
    //   }
    //   if (temperedData[i].name === "Jhund Poster #22") {
    //     // temperedData[i]["active"] = false;
    //     temperedData[i]["balance"] = "4";
    //   }
    //   if (temperedData[i].name === "Jhund Poster #23") {
    //     // temperedData[i]["active"] = false;
    //     temperedData[i]["balance"] = "3";
    //   }
    // }
    setBalanceUserNFTs(list);
  }, [userNFTs]);

  useEffect(() => {

    setDataToShow(balanceUserNFTs);
  }, [balanceUserNFTs]);

  useEffect(() => {
    if (selectedFilter === "All") {
      const allData = balanceUserNFTs;
      setDataToShow(allData);
    } else if (selectedFilter === "Auction") {
      const auctionData = balanceUserNFTs.filter(
        (element) => element.sellingOrBidding === "bidding"
      );
      setDataToShow(auctionData);
    } else if (selectedFilter === "Digital Posters") {
      const posterData = balanceUserNFTs.filter(
        (element) => element.type === "poster"
      );
      setDataToShow(posterData);
    } else if (selectedFilter === "Moments") {
      const momentsData = balanceUserNFTs.filter(
        (element) => element.type === "moment"
      );
      setDataToShow(momentsData);
    }
    setSortBy("Sort by");
  }, [selectedFilter]);

  useEffect(() => {
    if (sortBy === "Sort by") {
    } else if (sortBy === "Low to high") {
      const lowToHighData = _.sortBy(dataToShow, "price");
      setDataToShow(lowToHighData);
    } else if (sortBy === "High to low") {
      const lowToHighData = _.sortBy(dataToShow, "price");
      setDataToShow(lowToHighData.splice(0).reverse());
    } else if (sortBy === "Most Viewed") {
      const mostViewData = superfanData;
      setDataToShow(mostViewData);
    }
  }, [sortBy]);

  const sortMenu = (
    <Menu
      theme="dark"
      style={{ border: "1px solid #fff", borderRadius: "8px" }}
    >
      <Menu.Item
        onClick={() => {
          setSortBy("Low to high");
        }}
      >
        <span style={{ color: "#fff", fontSize: "1rem" }}>Low to high</span>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          setSortBy("High to low");
        }}
      >
        <span style={{ color: "#fff", fontSize: "1rem" }}>High to low</span>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          setSortBy("Most Viewed");
        }}
      >
        <span style={{ color: "#fff", fontSize: "1rem" }}>Most Viewed</span>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          setSortBy("Recently Sold");
        }}
      >
        <span style={{ color: "#fff", fontSize: "1rem" }}>Recently Sold</span>
      </Menu.Item>
    </Menu>
  );

  const tokenInfo = (data) => (
    <Menu
      theme="dark"
      style={{
        background: "rgba(18, 24, 37, 1)",
        borderRadius: "5px",
        border: "1px solid #fff",
      }}
    >
      <Menu.Item>
        <Row justify="space-between">
          <p
            style={{
              fontSize: "1rem",
              marginRight: "1rem",
              marginBottom: ".3rem",
            }}
          >
            Contract address:
          </p>

          <div>
            <Row>
              <p
                style={{
                  fontSize: "1rem",
                  marginBottom: ".3rem",
                  marginRight: "0.5rem",
                }}
              >
                {data?.token?.contract.address.substring(0, 10) + "..."}
              </p>
              <CopyToClipboard text={data?.token?.contract.address}>
                <CopyOutlined />
              </CopyToClipboard>
            </Row>
          </div>
        </Row>
      </Menu.Item>
      <Menu.Item>
        <Row justify="space-between">
          <p
            style={{
              fontSize: "1rem",
              marginRight: "1rem",
              marginBottom: ".3rem",
            }}
          >
            Token ID:
          </p>
          <p style={{ fontSize: "1rem", marginBottom: ".3rem" }}>
            {data?.nftID}{" "}
          </p>
        </Row>
      </Menu.Item>
      <Menu.Item>
        <Row justify="space-between">
          <p
            style={{
              fontSize: "1rem",
              marginRight: "1rem",
              marginBottom: ".3rem",
            }}
          >
            Token Standard:
          </p>
          <p style={{ fontSize: "1rem", marginBottom: ".3rem" }}>
            {data?.token?.standard}{" "}
          </p>
        </Row>
      </Menu.Item>
      <Menu.Item>
        <Row justify="space-between">
          <p
            style={{
              fontSize: "1rem",
              marginRight: "1rem",
              marginBottom: ".3rem",
            }}
          >
            Blockchain:
          </p>
          <p style={{ fontSize: "1rem", marginBottom: ".3rem" }}>{"Tezos"} </p>
        </Row>
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <ScrollToTop />
      <Loading isLoading={loading}>
        <Row justify="center">
          <div
            style={{
              width: "100%",
              maxWidth: "1500px",
              minHeight: "100vh",
              margin: "0 4rem",
            }}
          >
            <div id="top" style={{ margin: "8rem 1rem 4rem" }}>
              <Row justify="space-between">
                <Link to={lastLocation !== null ? lastLocation?.pathname : "/"}>
                  <svg
                    width="50"
                    height="50"
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
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
                {/* <SvgIcon src={"shareIcon.svg"} width="45px" height="45px" /> */}
              </Row>
              <Row justify="space-between">
                <Col span={12}>
                  <Row>
                    <Col xs={24} sm={24} lg={8} span={8}>
                      <div style={{ margin: "2rem 0" }}>
                        <Row justify="end">
                          <img
                            src="/img/icons/profileDP.png"
                            width="150px"
                            style={{
                              borderRadius: "50%",
                              border: "4px solid rgba(255, 190, 85, 1)",
                            }}
                          />
                        </Row>
                      </div>
                    </Col>
                    <Col xs={24} sm={24} lg={16} span={16}>
                      <Row>
                        <Col>
                          <div
                            style={{
                              position: "relative",
                              top: "15px",
                              left: "20px",
                            }}
                          >
                            <SuperfanName>
                              {userData.firstName + " " + userData.lastName}
                            </SuperfanName>
                            <SuperfanID>{userData.email}</SuperfanID>
                            <SuperfanAddress>{userData.pkh}</SuperfanAddress>
                            <Link to="/settings" style={{ color: "#fff" }}>
                              <FollowButton>Edit Profile</FollowButton>
                            </Link>
                          </div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col span={12}>
                  <FollowButtonContainer>
                    {/* <FollowButton>
                  <Link to="settings" style={{ color: "#fff" }}>
                    Edit Profile
                  </Link>
                </FollowButton> */}
                  </FollowButtonContainer>
                </Col>
              </Row>
            </div>
            <div style={{ margin: "4rem 1rem", minHeight: "400px" }}>
              <Row>
                <p
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                  }}
                >
                  {`${balanceUserNFTs.length} `}
                  Collection
                </p>
              </Row>
              <Row justify="space-between">
                <Col xs={24} sm={24} lg={3} xl={3}>
                  <Row justify="start">
                    <Dropdown overlay={sortMenu} placement="bottomCenter">
                      <FilterContainer>
                        <Row justify="space-between">
                          <Col span={20}>{sortBy}</Col>
                          <Col span={4}>
                            <DownOutlined />
                          </Col>
                        </Row>
                      </FilterContainer>
                    </Dropdown>
                  </Row>
                </Col>
              </Row>
              <Row justify="center">
                <Col span={24}>
                  {/* <Marketplace className="grid"> */}
                  <div style={{ margin: "2rem 0" }}>
                    {dataToShow.length > 0 ? (
                      <ResponsiveMasonry
                        columnsCountBreakPoints={{
                          350: 1,
                          750: 2,
                          900: 3,
                          1200: 4,
                        }}
                      >
                        <Masonry columnsCount={3} gutter="1rem">
                          {dataToShow.length > 0 &&
                            dataToShow.map((data: any, i: any) => (
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
                                    {/* {((data?.editions?.includes("Gold") &&
                                      data?.balance !== "1") ||
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
                                          : `${
                                              10 - parseInt(data.balance)
                                            } Sold`}
                                      </div>
                                    )} */}
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
                                        {data?.name?.includes("Jhund") &&
                                          `Jhund`}
                                      </NFTLabel>
                                      <NFTLabel
                                        style={{
                                          marginRight: "0",
                                          paddingRight: "0",
                                        }}
                                      >
                                        {`Available ${
                                          10 - parseInt(data?.balance)
                                        }/${
                                          data?.editions?.includes("Gold")
                                            ? "1"
                                            : 10 - parseInt(data?.balance)
                                        }`}
                                      </NFTLabel>
                                    </Row>
                                    <Row justify="space-between">
                                      <Col>
                                        <NFTLabel style={{ color: "#ffb642" }}>
                                          {data?.editions?.includes("Gold")
                                            ? "Gold"
                                            : "Premium"}
                                        </NFTLabel>
                                      </Col>
                                      <Col>
                                        <Dropdown
                                          overlay={tokenInfo(data)}
                                          placement="bottomCenter"
                                          trigger={["click"]}
                                        >
                                          <Row justify="space-between">
                                            <Col>
                                              <span>
                                                <InfoCircleOutlined
                                                  style={{
                                                    color: "#fff",
                                                    marginRight: "1rem",
                                                    position: "relative",
                                                    top: "20px",
                                                    left: "15px",
                                                    fontWeight: "bold",
                                                    fontSize: "1.4rem",
                                                  }}
                                                />
                                              </span>
                                            </Col>
                                          </Row>
                                        </Dropdown>
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
                                      <Row
                                        justify="space-between"
                                        align="middle"
                                      >
                                        <Col>
                                          <NFTLabel
                                            style={{ marginBottom: ".3rem" }}
                                          >
                                            {data?.active
                                              ? `Price`
                                              : `Sold for`}
                                          </NFTLabel>
                                        </Col>
                                        <Col>
                                          <NFTLabel
                                            style={{
                                              marginBottom: ".3rem",
                                              marginRight: "0",
                                              position: "relative",
                                              left: "10px",
                                            }}
                                          >
                                            Quantity
                                          </NFTLabel>
                                        </Col>
                                      </Row>
                                      <Row justify="space-between">
                                        <Col>
                                          <Price>{`$ ${(
                                            (parseInt(data?.value?.price) /
                                              1000000) *
                                            mutezToUsdRate
                                          ).toFixed(2)} USD`}</Price>
                                        </Col>
                                        <Col>
                                          <Price style={{ fontWeight: 500 }}>
                                            {data?.balance}
                                          </Price>
                                        </Col>
                                      </Row>
                                    </PriceSection>
                                  </div>
                                </Link>
                              </NFTCard>
                            ))}
                        </Masonry>
                      </ResponsiveMasonry>
                    ) : (
                      <Row justify="center">
                        <Col>
                          <div
                            style={{
                              width: "400px",
                              height: "120px",
                              padding: "2rem 3rem",
                              background:
                                "linear-gradient(180deg, #3B3F5A 0%, #0F1218 100%)",
                              borderRadius: "12px",
                            }}
                          >
                            <p
                              style={{
                                color: "#fff",
                                textAlign: "center",
                                position: "relative",
                                // top: "2rem",
                                fontSize: "1rem",
                                letterSpacing: "0.5px",
                              }}
                            >
                              It may take upto 5 minutes for your
                              <b /> purchased NFT to be displayed
                            </p>
                          </div>
                        </Col>
                      </Row>
                    )}
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Row>
      </Loading>
    </>
  );
};

export default SuperfanProfilePage;
