import React, { lazy, useState, useEffect } from "react";
import { Row, Col, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from "react-router-dom";
import { FilterContainer } from "./styles";
import _ from "underscore";
// import superfanData from "./data.json";

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
function Collections() {
  const [sortBy, setSortBy] = useState("Sort by");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [dataToShow, setDataToShow] = useState([] as any);

  useEffect(() => {
    const tempData = [];
    if (selectedFilter === "All") {
      const allData = superfanData;
      setDataToShow(allData);
    } else if (selectedFilter === "Auction") {
      const auctionData = superfanData.filter(
        (element) => element.sellingOrBidding === "bidding"
      );
      setDataToShow(auctionData);
    } else if (selectedFilter === "Digital Posters") {
      const posterData = superfanData.filter(
        (element) => element.type === "poster"
      );
      setDataToShow(posterData);
    } else if (selectedFilter === "Moments") {
      const momentsData = superfanData.filter(
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

  return (
    <div style={{ margin: "4rem 1rem" }}>
      <Row>
        <p
          style={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          10 Collections
        </p>
      </Row>
      <Row justify="space-between">
        <Col xs={24} sm={24} lg={12} xl={12}>
          <Row>
            <button
              style={
                selectedFilter === "All" ? styles.selectedButton : styles.button
              }
              onClick={() => {
                setSelectedFilter("All");
              }}
            >
              All
            </button>
            <button
              style={
                selectedFilter === "Auction"
                  ? styles.selectedButton
                  : styles.button
              }
              onClick={() => {
                setSelectedFilter("Auction");
              }}
            >
              Auction
            </button>
            <button
              style={
                selectedFilter === "Digital Posters"
                  ? styles.selectedButton
                  : styles.button
              }
              onClick={() => {
                setSelectedFilter("Digital Posters");
              }}
            >
              Digital Posters
            </button>
            <button
              style={
                selectedFilter === "Moments"
                  ? styles.selectedButton
                  : styles.button
              }
              onClick={() => {
                setSelectedFilter("Moments");
              }}
            >
              Moments
            </button>
          </Row>
        </Col>
        <Col xs={24} sm={24} lg={3} xl={3}>
          <Row justify="end">
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
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry columnsCount={3} gutter="1rem">
                {dataToShow.map((data, i) => (
                  <Link to="/product?123">
                    <div
                      style={{
                        position: "relative",
                        //  height: "90%",
                        //  backgroundImage: `url(/img/icons/marketplace/${data.thumbnail})`
                      }}
                    >
                      {" "}
                      <img
                        key={i}
                        src={`/img/icons/marketplace/${data.thumbnail}`}
                        style={{ width: "100%" }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: "2.2rem",
                          left: "4%",
                          zIndex: 1,
                          fontSize: "1.4rem",
                          fontWeight: "bold",
                          color: "rgba(255, 255, 255, 0.8)",
                        }}
                      >
                        {data.name}
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          bottom: "0.8rem",
                          left: "4%",
                          zIndex: 1,
                          fontSize: "1.1rem",
                          fontWeight: "bold",
                          color: "rgba(255, 190, 85, 0.8)",
                        }}
                      >
                        {data.movie}
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          bottom: "2.2rem",
                          right: "4%",
                          zIndex: 1,
                          fontSize: "1.2rem",
                          fontWeight: "bold",
                          color: "rgba(255, 255, 255, 0.8)",
                        }}
                      >
                        {data.type === "bidding" ? "Bid at" : "Price"}
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          bottom: "0.8rem",
                          right: "4%",
                          zIndex: 1,
                          fontSize: "1.2rem",
                          fontWeight: "bold",
                          color: "rgba(255, 255, 255, 0.8)",
                        }}
                      >
                        {data.price}
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          bottom: "0",
                          zIndex: 0.6,
                          height: "150px",
                          width: "100%",
                          background:
                            "linear-gradient(182.93deg, rgba(52, 77, 84, 0) 2.43%, rgba(26, 38, 51, 0.739328) 50.19%, #111927 97.6%)",
                        }}
                      ></div>
                    </div>
                  </Link>
                ))}
              </Masonry>
            </ResponsiveMasonry>
            {/* </Marketplace> */}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Collections;
