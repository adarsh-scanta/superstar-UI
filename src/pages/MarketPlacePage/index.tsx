import { lazy, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Menu, Row, Col, Dropdown, Checkbox } from "antd";
import { DownOutlined } from "@ant-design/icons";
import ScrollToTop from "../../common/ScrollToTop";
import { FilterContainer } from "./styles";
import _ from "underscore";
// import $ from "jquery";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loader";
import { fetchData } from "../../services/nftServices";
import { RootState } from "../../redux/rootReducer";
import { xtzToUsd } from "../../services/nftServices";
import { randomBytes } from "crypto";
import {
  NFTCard,
  NFTLabel,
  RulerContainer,
  PriceSection,
  Price,
} from "./styles";

const MarketPlacePage = () => {
  const dispatch = useDispatch();
  const [realMarketData, setRealMarketData] = useState([]);
  const [mutezToUsdRate, setmutezToUsdRate] = useState(0);

  const converter = async (xtz) => {
    const res = await xtzToUsd(xtz);
    return res;
  };

  const getDatafromBlock = async () => {
    const res = await fetchData();
    setRealMarketData(res.reverse());
    setLoading(false);
  };
  const getConvertRate = async () => {
    const rate = await axios.get(
      "https://api.coinpaprika.com/v1/price-converter?base_currency_id=xtz-tezos-token&quote_currency_id=usd-us-dollars&amount=1"
    );
    setmutezToUsdRate(rate.data.price);
  };

  useEffect(() => {
    setLoading(true);
    getConvertRate();
    getDatafromBlock();
  }, []);

  // const marketplaceCopy = realMarketData;
  const [dataToShow, setDataToShow] = useState([] as any);
  const [sortBy, setSortBy] = useState("Sort by");
  const [loading, setLoading] = useState(false);
  const [realData, setRealData] = useState([]);
  useEffect(() => {
    setDataToShow(realMarketData);
  }, [realMarketData]);

  useEffect(() => {
    const realData = [];
    for (let i = 0; i < dataToShow.length; i++) {
      realData.push({
        ...dataToShow[i],
        price: dataToShow[i].value.price,
      });
    }
    setRealData(realData);
  }, [dataToShow]);

  useEffect(() => {
    if (sortBy === "Sort by") {
      setDataToShow(realMarketData);
    }
    if (sortBy === "Low to high") {
      const lowToHighData = _.sortBy(realMarketData, "price");
      setDataToShow(lowToHighData);
    }
    if (sortBy === "High to low") {
      const lowToHighData = _.sortBy(realMarketData, "price");
      setDataToShow(lowToHighData.slice(0).reverse());
    }
    if (sortBy === "Most Viewed") {
      setDataToShow(realMarketData);
    }
  }, [sortBy]);

  const filterMenu = (
    <Menu
      theme="dark"
      style={{ border: "1px solid #fff", borderRadius: "8px" }}
    >
      <Menu.ItemGroup
        title={
          <div style={{ color: "#F8BB5A", fontSize: "1.2rem" }}>NFT Type</div>
        }
      >
        <Menu.Item>
          <Checkbox>
            <span
              style={{
                color: "#fff",
                fontSize: "1rem",
                position: "relative",
                top: "-5px",
              }}
            >
              Digital poster
            </span>
          </Checkbox>
        </Menu.Item>
        <Menu.Item>
          <Checkbox>
            <span
              style={{
                color: "#fff",
                fontSize: "1rem",
                position: "relative",
                top: "-5px",
              }}
            >
              Moments
            </span>
          </Checkbox>
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup
        title={
          <div style={{ color: "#F8BB5A", fontSize: "1.2rem" }}>Sale Type</div>
        }
      >
        <Menu.Item>
          <Checkbox>
            <span
              style={{
                color: "#fff",
                fontSize: "1rem",
                position: "relative",
                top: "-5px",
              }}
            >
              Buy now
            </span>
          </Checkbox>
        </Menu.Item>
        <Menu.Item>
          <Checkbox>
            <span
              style={{
                color: "#fff",
                fontSize: "1rem",
                position: "relative",
                top: "-5px",
              }}
            >
              Bid on auction
            </span>
          </Checkbox>
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  );

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
  return (
    <>
      <ScrollToTop />
      <Loading isLoading={loading}>
        <Row justify="center">
          <div
            style={{ width: "92%", maxWidth: "1400px", margin: "2rem 0 4rem" }}
          >
            <div style={{ margin: "6rem 2rem 2rem" }} id="top">
              <Row justify="start">
                <Col xs={8} sm={6} lg={4} xl={4}>
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
                </Col>
              </Row>
            </div>
            <div style={{ minHeight: "100vh" }}>
              <Row justify="center">
                <Col span={21} xl={23}>
                  {/* <Marketplace className="grid"> */}
                  <ResponsiveMasonry
                    columnsCountBreakPoints={{
                      350: 1,
                      750: 2,
                      900: 3,
                      1200: 4,
                    }}
                  >
                    <Masonry columnsCount={4} gutter="1rem">
                      {realData.length > 0 &&
                        realData.map((data: any, i: any) => (
                          <Link to={`/product/${data.nftID}`}>
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
                                        {data?.editions?.includes("Gold")
                                          ? "Gold"
                                          : "Premium"}
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
                                          style={{
                                            marginBottom: ".3rem",
                                            fontSize: "0.9rem",
                                          }}
                                        >
                                          {data?.active ? `Price` : `Sold for`}
                                        </NFTLabel>
                                      </Col>
                                    </Row>
                                    <Row justify="start">
                                      <Col>
                                        <Price>{`$ ${(
                                          (parseInt(data?.value?.price) /
                                            1000000) *
                                          mutezToUsdRate
                                        ).toFixed(2)} USD`}</Price>
                                      </Col>
                                    </Row>
                                  </PriceSection>
                                </div>
                              </Link>
                            </NFTCard>
                          </Link>
                        ))}
                    </Masonry>
                  </ResponsiveMasonry>{" "}
                  {/* </Marketplace> */}
                </Col>
              </Row>
            </div>
          </div>
        </Row>
      </Loading>
    </>
  );
};

export default MarketPlacePage;
